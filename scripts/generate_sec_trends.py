#!/usr/bin/env python3
import json
import re
import subprocess
import sys
import os
import concurrent.futures
from datetime import datetime
from pathlib import Path
from google import genai
from google.genai import types

# ── Paths ──────────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
GUIDES_DATA = ROOT / "src" / "lib" / "guides-data.ts"
GUIDES_CONTENT = ROOT / "src" / "lib" / "guides-content-new.ts"
IMAGES_DIR = ROOT / "public" / "images" / "guides"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

SEC_TRENDS = [
    "Best VPNs for Remote Workers 2026",
    "Top Identity Theft Protection Services",
    "Ultimate Guide to Pet Insurance",
    "How to Secure Your Smart Home",
    "Best Password Managers 2026",
    "Top Renters Insurance Providers",
    "Best Antivirus Software for Mac",
    "Ultimate Guide to Life Insurance",
    "Best Cloud Backup Services",
    "Top Mobile Security Apps",
]

def escape_ts(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")

def reset_guides_data():
    print("🧹 Resetting guides-data.ts to remove old SVG guides...")
    content = GUIDES_DATA.read_text(encoding="utf-8")
    new_content = re.sub(
        r"export const guides: StyleGuide\[\] = \[.*?\];",
        "export const guides: StyleGuide[] = [];",
        content,
        flags=re.DOTALL
    )
    GUIDES_DATA.write_text(new_content, encoding="utf-8")
    content2 = "export const newGuidesContent: Record<string, { heading: string; paragraphs: string[] }[]> = {};"
    GUIDES_CONTENT.write_text(content2, encoding="utf-8")

def generate_imagen_image(gemini_client, prompt: str, slug: str, suffix: str, aspect_ratio: str = "16:9") -> str:
    print(f"🎨 Generating Imagen 4.0 Ultra image for: {prompt[:50]}...")
    model_name = "imagen-4.0-ultra-generate-001"
    try:
        response = gemini_client.models.generate_images(
            model=model_name, prompt=prompt,
            config=types.GenerateImagesConfig(number_of_images=1, output_mime_type="image/jpeg", aspect_ratio=aspect_ratio)
        )
        if response.generated_images:
            image_data = response.generated_images[0].image.image_bytes
            filename = f"{slug}-{suffix}.jpg"
            filepath = IMAGES_DIR / filename
            with open(filepath, "wb") as f:
                f.write(image_data)
            return f"/images/guides/{filename}"
    except Exception as e:
        print(f"❌ Error generating image: {e}")
    return "https://placehold.co/600x400?text=Image"

def generate_guide_json(client, topic: str) -> dict:
    prompt = f"""You are an elite cybersecurity and insurance content strategist for SecureChoiceGuide. Your goal is to drive massive organic traffic and maximize affiliate conversions.

Generate ONE new SEO-optimized guide for the specific Topic: '{topic}'.
Return ONLY valid JSON, no other text.

Use this EXACT JSON structure:
{{
  "slug": "unique-kebab-case-slug-2026",
  "title": "High-Click-Through SEO Title for {topic}",
  "category": "security",
  "description": "SEO meta description under 155 characters designed to get clicks.",
  "readTime": "12 min",
  "date": "{datetime.now().strftime('%Y-%m-%d')}",
  "tag": "Guide",
  "emoji": "🛡️",
  "hero_image_prompt": "A detailed, photorealistic prompt for an AI image generator (Imagen 4) for the main cover image. Feature a high-tech cybersecurity or modern lifestyle insurance concept for {topic}. End the prompt with 'Typography text overlay reading SecureChoiceGuide'.",
  "affiliateProducts": [
    {{
      "name": "Specific Software or Insurance Product Name",
      "price": "$XX/mo",
      "brand": "SecurityBrand",
      "url_index": 0,
      "tag": "Best Overall",
      "product_image_prompt": "A photorealistic product photography shot on a clean white background of [product name] software box or logo shield, studio lighting, e-commerce style, 4k."
    }}
  ],
  "content": [
    {{
      "heading": "Catchy Section Heading",
      "paragraphs": [
        "Highly engaging, expert security/insurance advice paragraph... (80+ words)",
        "Another paragraph that builds desire for the recommended services..."
      ]
    }}
  ]
}}

RULES:
- category must be one of: security, insurance, privacy, software
- Include exactly 4 affiliate products highly relevant to {topic}.
- Include exactly 5 content sections.
- MUST RETURN VALID JSON ONLY."""
    response = client.models.generate_content(model="gemini-2.5-pro", contents=prompt)
    text = response.text
    json_match = re.search(r"```(?:json)?\s*(\{[\s\S]*?\})\s*```", text)
    if json_match: return json.loads(json_match.group(1))
    json_match = re.search(r"\{[\s\S]*\}", text)
    if json_match: return json.loads(json_match.group())
    raise ValueError("No valid JSON in Gemini response: " + text[:500])

def resolve_urls_and_generate_images(guide: dict, gemini_client) -> dict:
    slug = guide["slug"]
    hero_prompt = guide.pop("hero_image_prompt", f"High tech editorial photography for {guide['title']}")
    guide["image"] = generate_imagen_image(gemini_client, hero_prompt, slug, "hero", "16:9")

    def process_product(i, p):
        p["url"] = "https://amzn.to/example?tag=securechoiceguide-20"
        if not p.get("brand"): p["brand"] = "SecurityBrand"
        prod_prompt = p.pop("product_image_prompt", f"Product photography on white background of {p['name']}")
        p["image"] = generate_imagen_image(gemini_client, prod_prompt, slug, f"prod{i}", "1:1")
        return p

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(process_product, i, p) for i, p in enumerate(guide["affiliateProducts"])]
        guide["affiliateProducts"] = [f.result() for f in futures]
    return guide

def format_guide_data_ts(guide: dict) -> str:
    products_ts = ""
    for p in guide["affiliateProducts"]:
        tag_part = f", tag: '{escape_ts(p.get('tag', ''))}'" if p.get("tag") else ""
        image_part = f", image: '{p.get('image', '')}'" if p.get("image") else ""
        products_ts += (
            f"      {{ name: '{escape_ts(p['name'])}', brand: '{escape_ts(p['brand'])}', " +
            f"price: '{escape_ts(p['price'])}', url: '{escape_ts(p['url'])}'{tag_part}{image_part} }},\n"
        )
    return "  {\n" + f"    slug: '{guide['slug']}',\n" + f"    title: '{escape_ts(guide['title'])}',\n" + f"    category: '{guide['category']}',\n" + f"    description: '{escape_ts(guide['description'])}',\n" + f"    readTime: '{guide['readTime']}',\n" + f"    date: '{guide['date']}',\n" + f"    tag: '{guide['tag']}',\n" + f"    emoji: '{guide['emoji']}',\n" + f"    image: '{guide['image']}',\n" + "    affiliateProducts: [\n" + products_ts + "    ],\n" + "  },\n"

def format_guide_content_ts(guide: dict) -> str:
    sections_ts = ""
    for section in guide["content"]:
        paragraphs_ts = ", ".join([f"'{escape_ts(p)}'" for p in section["paragraphs"]])
        sections_ts += f"  {{ heading: '{escape_ts(section['heading'])}', paragraphs: [{paragraphs_ts}] }},\n"
    return "\n" + f"'{guide['slug']}': [\n" + sections_ts + "],\n"

def insert_guide_into_data_file(guide_ts: str):
    content = GUIDES_DATA.read_text(encoding="utf-8")
    marker = "];\n\nexport function getGuideBySlug"
    updated = content.replace(marker, guide_ts + marker)
    GUIDES_DATA.write_text(updated, encoding="utf-8")

def insert_guide_into_content_file(content_ts: str):
    content = GUIDES_CONTENT.read_text(encoding="utf-8")
    marker = "\n};\n"
    last_idx = content.rfind(marker)
    updated = content[:last_idx] + content_ts + content[last_idx:]
    GUIDES_CONTENT.write_text(updated, encoding="utf-8")

def main():
    print("🤖 SecureChoiceGuide Content Agent (Mass Gen) starting...")
    gemini_client = genai.Client(vertexai=True, project="fashion-money-maker", location="us-central1")
    
    reset_guides_data()

    for topic in SEC_TRENDS:
        print(f"\n✍️  Generating SEO guide for: {topic}")
        try:
            guide_raw = generate_guide_json(gemini_client, topic)
            guide = resolve_urls_and_generate_images(guide_raw, gemini_client)

            insert_guide_into_data_file(format_guide_data_ts(guide))
            insert_guide_into_content_file(format_guide_content_ts(guide))
            print(f"✅ Finished: {topic}")
        except Exception as e:
            print(f"❌ Failed on {topic}: {e}")

    # Configure git user from environment variables or use default
    git_email = os.getenv("GIT_USER_EMAIL", "agent@securechoiceguide.com")
    git_name = os.getenv("GIT_USER_NAME", "SecureChoiceGuide Content Agent")
    subprocess.run(["git", "config", "user.email", git_email], check=True, cwd=ROOT)
    subprocess.run(["git", "config", "user.name", git_name], check=True, cwd=ROOT)

    subprocess.run(["git", "add", "."], check=True, cwd=ROOT)
    subprocess.run(["git", "commit", "-m", "feat: populate site with 10 Security guides via Imagen 4"], check=True, cwd=ROOT)
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], check=True, cwd=ROOT)
    subprocess.run(["git", "push", "origin", "main"], check=True, cwd=ROOT)
    print("🚀 All premium guides are live!")

if __name__ == "__main__":
    main()
