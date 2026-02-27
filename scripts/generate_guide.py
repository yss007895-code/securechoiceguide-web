#!/usr/bin/env python3
"""
SecureChoiceGuide Auto Content Agent
Generates new cybersecurity/insurance guides using Gemini API for text and Imagen 4.0 Ultra for images.
"""

import json
import re
import subprocess
import sys
import os
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

def escape_ts(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")

def get_existing_slugs() -> list[str]:
    content = GUIDES_DATA.read_text(encoding="utf-8")
    return re.findall(r"slug:\s*'([^']+)'", content)

def generate_imagen_image(gemini_client, prompt: str, slug: str, suffix: str, aspect_ratio: str = "16:9") -> str:
    print(f"🎨 Generating Imagen 4.0 Ultra image for: {prompt[:50]}...")
    model_name = "imagen-4.0-ultra-generate-001"
    try:
        response = gemini_client.models.generate_images(
            model=model_name,
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                output_mime_type="image/jpeg",
                aspect_ratio=aspect_ratio,
            )
        )
        if response.generated_images:
            image_data = response.generated_images[0].image.image_bytes
            filename = f"{slug}-{suffix}.jpg"
            filepath = IMAGES_DIR / filename
            with open(filepath, "wb") as f:
                f.write(image_data)
            print(f"✅ Saved image to {filepath}")
            return f"/images/guides/{filename}"
    except Exception as e:
        print(f"❌ Error generating image: {e}")
    return "https://placehold.co/600x400?text=Image"

def generate_guide_json(client, existing_slugs: list[str]) -> dict:
    prompt = f"""You are an elite cybersecurity and insurance content strategist for SecureChoiceGuide. Your goal is to drive organic traffic and maximize affiliate conversions.

Generate ONE new SEO-optimized guide. Return ONLY valid JSON, no other text.

EXISTING SLUGS (must NOT duplicate any of these):
{json.dumps(existing_slugs, indent=2)}

Use this EXACT JSON structure:
{{
  "slug": "unique-kebab-case-slug-2026",
  "title": "High-Click-Through SEO Title (Include Year if relevant)",
  "category": "security",
  "description": "SEO meta description under 155 characters designed to get clicks.",
  "readTime": "12 min",
  "date": "{datetime.now().strftime('%Y-%m-%d')}",
  "tag": "Guide",
  "emoji": "🛡️",
  "hero_image_prompt": "A detailed, photorealistic prompt for an AI image generator (Imagen 4) for the main cover image. Feature a high-tech cybersecurity or modern lifestyle insurance concept. End the prompt with 'Typography text overlay reading SecureChoiceGuide'.",
  "affiliateProducts": [
    {{
      "name": "Specific Software or Service Name",
      "brand": "Brand Name",
      "price": "$XX/mo",
      "url_index": 0,
      "tag": "Best Overall",
      "product_image_prompt": "A photorealistic product photography shot on a clean white background of [product name] software box or shield logo, studio lighting, e-commerce style, 4k."
    }}
  ],
  "content": [
    {{
      "heading": "Catchy Section Heading",
      "paragraphs": [
        "Highly engaging, expert advice paragraph... (80+ words)",
        "Another paragraph that builds desire for the recommended services..."
      ]
    }}
  ]
}}

RULES:
- category must be one of: security, insurance, privacy, software
- Include exactly 4 affiliate products.
- Include exactly 5 content sections.
- MUST RETURN VALID JSON ONLY.

Pick a fresh, highly-searchable topic. Ideas:
Best VPNs for remote workers 2026, Top Identity Theft Protection Services, Ultimate Guide to Pet Insurance, How to secure your smart home."""

    response = client.models.generate_content(model="gemini-2.5-pro", contents=prompt)
    text = response.text
    json_match = re.search(r"```(?:json)?\s*(\{[\s\S]*?\})\s*```", text)
    if json_match: return json.loads(json_match.group(1))
    json_match = re.search(r"\{[\s\S]*\}", text)
    if json_match: return json.loads(json_match.group())
    raise ValueError(f"No valid JSON in Gemini response:\n{text[:500]}")

def resolve_urls_and_generate_images(guide: dict, gemini_client) -> dict:
    slug = guide["slug"]
    hero_prompt = guide.pop("hero_image_prompt", f"High tech editorial photography for {guide['title']}")
    guide["image"] = generate_imagen_image(gemini_client, hero_prompt, slug, "hero", "16:9")

    for i, p in enumerate(guide["affiliateProducts"]):
        p["url"] = "https://amzn.to/example"
        if not p.get("brand"): p["brand"] = "SecurityBrand"
        prod_prompt = p.pop("product_image_prompt", f"Product photography on white background of {p['name']}")
        p["image"] = generate_imagen_image(gemini_client, prod_prompt, slug, f"prod{i}", "1:1")

    return guide

def format_guide_data_ts(guide: dict) -> str:
    products_ts = ""
    for p in guide["affiliateProducts"]:
        tag_part = f", tag: '{escape_ts(p.get('tag', ''))}'" if p.get("tag") else ""
        image_part = f", image: '{p.get('image', '')}'" if p.get("image") else ""
        products_ts += (
            f"      {{ name: '{escape_ts(p['name'])}', brand: '{escape_ts(p['brand'])}', "
            f"price: '{escape_ts(p['price'])}', url: '{escape_ts(p['url'])}'{tag_part}{image_part} }},\n"
        )
    return f"""  {{
    slug: '{guide['slug']}',
    title: '{escape_ts(guide['title'])}',
    category: '{guide['category']}',
    description: '{escape_ts(guide['description'])}',
    readTime: '{guide['readTime']}',
    date: '{guide['date']}',
    tag: '{guide['tag']}',
    emoji: '{guide['emoji']}',
    image: '{guide['image']}',
    affiliateProducts: [\n{products_ts}    ],
  }},\n"""

def format_guide_content_ts(guide: dict) -> str:
    sections_ts = ""
    for section in guide["content"]:
        paragraphs_ts = ", ".join([f"'{escape_ts(p)}'" for p in section["paragraphs"]])
        sections_ts += f"  {{ heading: '{escape_ts(section['heading'])}', paragraphs: [{paragraphs_ts}] }},\n"
    return f"\n'{guide['slug']}': [\n{sections_ts}],\n"

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

def git_commit_and_push(slug: str, title: str):
    email = os.getenv("GIT_USER_EMAIL")
    name = os.getenv("GIT_USER_NAME")
    if email:
        subprocess.run(["git", "config", "user.email", email], check=True, cwd=ROOT)
    if name:
        subprocess.run(["git", "config", "user.name", name], check=True, cwd=ROOT)
    subprocess.run(["git", "add", "."], check=True, cwd=ROOT)
    subprocess.run(["git", "commit", "-m", f"feat: auto-generate guide '{title}' [{slug}] with Imagen 4"], check=True, cwd=ROOT)
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], check=True, cwd=ROOT)
    subprocess.run(["git", "push", "origin", "main"], check=True, cwd=ROOT)
    print(f"✅ Committed and pushed: {slug}")

def main():
    print("🤖 SecureChoiceGuide Content Agent (Premium Edition) starting...")
    gemini_client = genai.Client(vertexai=True, project="fashion-money-maker", location="us-central1")
    existing_slugs = get_existing_slugs()
    
    print("✍️  Generating new SEO-optimized guide with Gemini 2.5 Pro...")
    guide_raw = generate_guide_json(gemini_client, existing_slugs)
    
    print("📸 Generating high-quality product & hero images with Imagen 4.0 Ultra...")
    guide = resolve_urls_and_generate_images(guide_raw, gemini_client)

    insert_guide_into_data_file(format_guide_data_ts(guide))
    insert_guide_into_content_file(format_guide_content_ts(guide))
    git_commit_and_push(guide["slug"], guide["title"])
    print("🚀 Premium guide is live!")

if __name__ == "__main__":
    main()
