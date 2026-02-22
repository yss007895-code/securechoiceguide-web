#!/usr/bin/env python3
"""
Generate unique SVG images for SecureChoiceGuide tools and categories.
Each SVG has a deterministic color variation based on its slug using MD5 hashing.
"""
import os
import hashlib
import re

# Category color palettes: (dark, mid, light)
CATEGORY_COLORS = {
    'vpn-reviews':       ('#1E40AF', '#3B82F6', '#DBEAFE'),
    'antivirus':         ('#065F46', '#10B981', '#D1FAE5'),
    'password-managers': ('#5B21B6', '#8B5CF6', '#EDE9FE'),
    'privacy-tools':     ('#0E7490', '#06B6D4', '#CFFAFE'),
    'secure-messaging':  ('#9D174D', '#EC4899', '#FCE7F3'),
    'security-guides':   ('#92400E', '#F59E0B', '#FEF3C7'),
    'guides':            ('#92400E', '#F59E0B', '#FEF3C7'),
    'comparisons':       ('#374151', '#6B7280', '#F3F4F6'),
}

# Map tool names to their category
TOOL_CATEGORY_MAP = {
    # guides category
    'optery': 'guides',
    'deleteme': 'guides',
    'firefox-browser': 'guides',
    'brave-browser': 'guides',
    'duckduckgo-browser': 'guides',
    'multi-factor-authentication': 'guides',
    # password-managers category
    'bitwarden': 'password-managers',
    '1password': 'password-managers',
    'lastpass': 'password-managers',
    'keepass': 'password-managers',
    'dashlane': 'password-managers',
    'nordpass': 'password-managers',
    'yubikey': 'password-managers',
    # vpn-reviews category
    'nordvpn': 'vpn-reviews',
    'expressvpn': 'vpn-reviews',
    'protonvpn': 'vpn-reviews',
    'surfshark': 'vpn-reviews',
    'cyberghost': 'vpn-reviews',
    'private-internet-access': 'vpn-reviews',
    'proton-vpn-free': 'vpn-reviews',
    'windscribe-free': 'vpn-reviews',
    'tunnelbear-free': 'vpn-reviews',
    'proton-vpn-paid': 'vpn-reviews',
    'windscribe-paid': 'vpn-reviews',
    'protonmail': 'vpn-reviews',
    'vpns': 'vpn-reviews',
    # antivirus category
    'bitdefender-total-security': 'antivirus',
    'norton-360-deluxe': 'antivirus',
    'eset-internet-security': 'antivirus',
    'kaspersky-total-security': 'antivirus',
    'eset': 'antivirus',
    'malwarebytes': 'antivirus',
    'crowdstrike': 'antivirus',
    'bitdefender-antivirus-plus': 'antivirus',
    'bitdefender-internet-security': 'antivirus',
    'norton-360-standard': 'antivirus',
    'password-manager': 'antivirus',
    # secure-messaging category
    'signal': 'secure-messaging',
    'threema': 'secure-messaging',
    'session': 'secure-messaging',
    'proton-mail': 'secure-messaging',
    'tutanota': 'secure-messaging',
    # privacy-tools category
    'tor-browser': 'privacy-tools',
    'brave-browser-privacy': 'privacy-tools',
    'duckduckgo': 'privacy-tools',
    'signal-privacy': 'privacy-tools',
    'bitwarden-privacy': 'privacy-tools',
    'mozilla-firefox': 'privacy-tools',
    'duckduckgo-privacy-browser': 'privacy-tools',
    'ublock-origin': 'privacy-tools',
    'privacy-badger': 'privacy-tools',
}


def slugify(name):
    """Convert tool name to a filesystem-safe slug."""
    s = name.lower().strip()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'[\s]+', '-', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')


def get_color_variation(slug, base_dark, base_mid, base_light):
    """Create a deterministic color variation using MD5 hash of the slug."""
    h = hashlib.md5(slug.encode()).hexdigest()
    # Use hash bytes to create slight color variations
    r_offset = (int(h[0:2], 16) % 40) - 20
    g_offset = (int(h[2:4], 16) % 40) - 20
    b_offset = (int(h[4:6], 16) % 40) - 20

    def adjust_hex(hex_color, r_off, g_off, b_off):
        r = max(0, min(255, int(hex_color[1:3], 16) + r_off))
        g = max(0, min(255, int(hex_color[3:5], 16) + g_off))
        b = max(0, min(255, int(hex_color[5:7], 16) + b_off))
        return f'#{r:02X}{g:02X}{b:02X}'

    dark = adjust_hex(base_dark, r_offset, g_offset, b_offset)
    mid = adjust_hex(base_mid, r_offset // 2, g_offset // 2, b_offset // 2)
    light = adjust_hex(base_light, r_offset // 3, g_offset // 3, b_offset // 3)
    return dark, mid, light


def get_initial(name):
    """Get a display initial or abbreviation from a tool name."""
    words = name.strip().split()
    if len(words) == 1:
        return words[0][0].upper()
    # For multi-word names, take first letter of each (up to 2)
    return ''.join(w[0].upper() for w in words[:2])


def get_decorative_shape(slug):
    """Generate a unique decorative shape based on the slug hash."""
    h = hashlib.md5(slug.encode()).hexdigest()
    shape_type = int(h[6:8], 16) % 6

    if shape_type == 0:
        # Circle
        cx = 140 + (int(h[8:10], 16) % 30)
        cy = 40 + (int(h[10:12], 16) % 30)
        r = 15 + (int(h[12:14], 16) % 20)
        return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{{mid}}" opacity="0.3"/>'
    elif shape_type == 1:
        # Rectangle rotated
        x = 130 + (int(h[8:10], 16) % 40)
        y = 30 + (int(h[10:12], 16) % 40)
        angle = int(h[12:14], 16) % 45
        return f'<rect x="{x}" y="{y}" width="25" height="25" rx="4" fill="{{mid}}" opacity="0.25" transform="rotate({angle} {x+12} {y+12})"/>'
    elif shape_type == 2:
        # Diamond
        cx = 150 + (int(h[8:10], 16) % 20)
        cy = 45 + (int(h[10:12], 16) % 20)
        s = 12 + (int(h[12:14], 16) % 10)
        return f'<polygon points="{cx},{cy-s} {cx+s},{cy} {cx},{cy+s} {cx-s},{cy}" fill="{{mid}}" opacity="0.2"/>'
    elif shape_type == 3:
        # Small circles cluster
        cx = 145 + (int(h[8:10], 16) % 25)
        cy = 40 + (int(h[10:12], 16) % 25)
        return (f'<circle cx="{cx}" cy="{cy}" r="8" fill="{{mid}}" opacity="0.2"/>'
                f'<circle cx="{cx+15}" cy="{cy+10}" r="6" fill="{{mid}}" opacity="0.15"/>'
                f'<circle cx="{cx-5}" cy="{cy+18}" r="5" fill="{{mid}}" opacity="0.1"/>')
    elif shape_type == 4:
        # Hexagon
        cx = 150 + (int(h[8:10], 16) % 20)
        cy = 50 + (int(h[10:12], 16) % 15)
        s = 14 + (int(h[12:14], 16) % 8)
        points = []
        import math
        for i in range(6):
            angle_rad = math.pi / 3 * i - math.pi / 6
            px = cx + s * math.cos(angle_rad)
            py = cy + s * math.sin(angle_rad)
            points.append(f'{px:.1f},{py:.1f}')
        return f'<polygon points="{" ".join(points)}" fill="{{mid}}" opacity="0.2"/>'
    else:
        # Star-like cross
        cx = 148 + (int(h[8:10], 16) % 24)
        cy = 42 + (int(h[10:12], 16) % 24)
        return (f'<line x1="{cx-10}" y1="{cy}" x2="{cx+10}" y2="{cy}" stroke="{{mid}}" stroke-width="2" opacity="0.3"/>'
                f'<line x1="{cx}" y1="{cy-10}" x2="{cx}" y2="{cy+10}" stroke="{{mid}}" stroke-width="2" opacity="0.3"/>')


def generate_tool_svg(slug, name, category):
    """Generate a 200x200 SVG for a tool/product."""
    base_colors = CATEGORY_COLORS.get(category, CATEGORY_COLORS['comparisons'])
    dark, mid, light = get_color_variation(slug, *base_colors)
    initial = get_initial(name)
    grad_id = f'grad-{slug[:20]}'

    # Get decorative shape and fill in color
    deco = get_decorative_shape(slug)
    deco = deco.replace('{mid}', mid)

    # Truncate name if too long
    display_name = name if len(name) <= 20 else name[:18] + '..'
    font_size = 10 if len(display_name) <= 16 else 8

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="{grad_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{dark}"/>
      <stop offset="50%" stop-color="{mid}"/>
      <stop offset="100%" stop-color="{light}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="16" fill="url(#{grad_id})"/>
  {deco}
  <circle cx="100" cy="80" r="40" fill="rgba(255,255,255,0.15)"/>
  <text x="100" y="92" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="bold" fill="white">{initial}</text>
  <text x="100" y="155" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="{font_size}" fill="white" opacity="0.9">{display_name}</text>
  <rect x="60" y="168" width="80" height="2" rx="1" fill="white" opacity="0.3"/>
</svg>'''
    return svg


def generate_category_svg(slug, name):
    """Generate a 600x400 SVG for a category."""
    base_colors = CATEGORY_COLORS.get(slug, CATEGORY_COLORS['comparisons'])
    dark, mid, light = get_color_variation(slug, *base_colors)
    grad_id = f'cat-grad-{slug[:20]}'

    # Hash-based decorative elements
    h = hashlib.md5(slug.encode()).hexdigest()
    circle1_cx = 450 + (int(h[0:2], 16) % 80)
    circle1_cy = 60 + (int(h[2:4], 16) % 60)
    circle1_r = 40 + (int(h[4:6], 16) % 40)
    circle2_cx = 80 + (int(h[6:8], 16) % 80)
    circle2_cy = 300 + (int(h[8:10], 16) % 60)
    circle2_r = 30 + (int(h[10:12], 16) % 30)

    # Category icon path based on category type
    icon_map = {
        'vpn-reviews': '<path d="M280 160 L300 140 L320 160 L320 200 L280 200 Z" fill="white" opacity="0.15"/><circle cx="300" cy="180" r="8" fill="white" opacity="0.2"/>',
        'antivirus': '<path d="M285 150 L300 135 L315 150 L315 195 L300 205 L285 195 Z" fill="white" opacity="0.15"/><line x1="300" y1="160" x2="300" y2="185" stroke="white" stroke-width="3" opacity="0.2"/><line x1="290" y1="175" x2="310" y2="175" stroke="white" stroke-width="3" opacity="0.2"/>',
        'password-managers': '<rect x="280" y="155" width="40" height="30" rx="5" fill="white" opacity="0.15"/><circle cx="300" cy="165" r="5" fill="white" opacity="0.2"/><line x1="300" y1="170" x2="300" y2="180" stroke="white" stroke-width="2" opacity="0.2"/>',
        'privacy-tools': '<circle cx="300" cy="175" r="20" fill="none" stroke="white" stroke-width="3" opacity="0.15"/><circle cx="300" cy="175" r="8" fill="white" opacity="0.15"/><line x1="315" y1="190" x2="325" y2="200" stroke="white" stroke-width="3" opacity="0.15"/>',
        'secure-messaging': '<rect x="280" y="150" width="40" height="30" rx="10" fill="white" opacity="0.15"/><polygon points="285,180 295,190 305,180" fill="white" opacity="0.15"/>',
        'guides': '<rect x="285" y="145" width="30" height="40" rx="3" fill="white" opacity="0.15"/><line x1="292" y1="158" x2="308" y2="158" stroke="white" stroke-width="2" opacity="0.2"/><line x1="292" y1="165" x2="308" y2="165" stroke="white" stroke-width="2" opacity="0.2"/><line x1="292" y1="172" x2="305" y2="172" stroke="white" stroke-width="2" opacity="0.2"/>',
        'security-guides': '<rect x="285" y="145" width="30" height="40" rx="3" fill="white" opacity="0.15"/><line x1="292" y1="158" x2="308" y2="158" stroke="white" stroke-width="2" opacity="0.2"/><line x1="292" y1="165" x2="308" y2="165" stroke="white" stroke-width="2" opacity="0.2"/><line x1="292" y1="172" x2="305" y2="172" stroke="white" stroke-width="2" opacity="0.2"/>',
        'comparisons': '<line x1="280" y1="155" x2="280" y2="195" stroke="white" stroke-width="2" opacity="0.15"/><line x1="320" y1="155" x2="320" y2="195" stroke="white" stroke-width="2" opacity="0.15"/><line x1="275" y1="170" x2="325" y2="170" stroke="white" stroke-width="2" opacity="0.15"/><line x1="275" y1="180" x2="325" y2="180" stroke="white" stroke-width="2" opacity="0.15"/>',
    }
    icon = icon_map.get(slug, icon_map['comparisons'])

    # Adjust font size for long names
    font_size = 28 if len(name) <= 18 else 22

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="{grad_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{dark}"/>
      <stop offset="60%" stop-color="{mid}"/>
      <stop offset="100%" stop-color="{light}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="20" fill="url(#{grad_id})"/>
  <circle cx="{circle1_cx}" cy="{circle1_cy}" r="{circle1_r}" fill="white" opacity="0.06"/>
  <circle cx="{circle2_cx}" cy="{circle2_cy}" r="{circle2_r}" fill="white" opacity="0.08"/>
  {icon}
  <text x="300" y="260" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="{font_size}" font-weight="bold" fill="white">{name}</text>
  <rect x="230" y="275" width="140" height="3" rx="1.5" fill="white" opacity="0.3"/>
  <text x="300" y="310" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="white" opacity="0.7">SecureChoiceGuide</text>
</svg>'''
    return svg


def generate_guide_svg(slug, title, category):
    """Generate a 600x400 SVG for a guide hero image."""
    base_colors = CATEGORY_COLORS.get(category, CATEGORY_COLORS['comparisons'])
    dark, mid, light = get_color_variation(slug, *base_colors)
    grad_id = f'guide-grad-{slug[:16]}'

    h = hashlib.md5(slug.encode()).hexdigest()
    # Decorative elements
    rect_x = 30 + (int(h[0:2], 16) % 50)
    rect_y = 30 + (int(h[2:4], 16) % 50)
    rect_w = 80 + (int(h[4:6], 16) % 60)
    rect_h = 60 + (int(h[6:8], 16) % 40)
    circle_cx = 480 + (int(h[8:10], 16) % 80)
    circle_cy = 280 + (int(h[10:12], 16) % 80)
    circle_r = 50 + (int(h[12:14], 16) % 50)

    # Word-wrap title for SVG display (max ~30 chars per line)
    words = title.split()
    lines = []
    current = ''
    for w in words:
        if len(current + ' ' + w) > 30 and current:
            lines.append(current.strip())
            current = w
        else:
            current = current + ' ' + w if current else w
    if current:
        lines.append(current.strip())

    # Limit to 3 lines
    lines = lines[:3]
    font_size = 24 if max(len(l) for l in lines) <= 25 else 20

    text_lines = ''
    start_y = 200 - (len(lines) - 1) * 15
    for i, line in enumerate(lines):
        text_lines += f'  <text x="300" y="{start_y + i * 35}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="{font_size}" font-weight="bold" fill="white">{line}</text>\n'

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="{grad_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{dark}"/>
      <stop offset="50%" stop-color="{mid}"/>
      <stop offset="100%" stop-color="{light}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="20" fill="url(#{grad_id})"/>
  <rect x="{rect_x}" y="{rect_y}" width="{rect_w}" height="{rect_h}" rx="10" fill="white" opacity="0.06"/>
  <circle cx="{circle_cx}" cy="{circle_cy}" r="{circle_r}" fill="white" opacity="0.05"/>
{text_lines}  <rect x="230" y="{start_y + len(lines) * 35 - 15}" width="140" height="3" rx="1.5" fill="white" opacity="0.3"/>
  <text x="300" y="{start_y + len(lines) * 35 + 15}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="white" opacity="0.6">SecureChoiceGuide</text>
</svg>'''
    return svg


def generate_blog_svg(slug, title, category_key='guides'):
    """Generate a 600x400 SVG for a blog post hero."""
    return generate_guide_svg(slug, title, category_key)


def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    tools_dir = os.path.join(base_dir, 'public', 'images', 'tools')
    cats_dir = os.path.join(base_dir, 'public', 'images', 'categories')
    blog_dir = os.path.join(base_dir, 'public', 'images', 'blog')

    os.makedirs(tools_dir, exist_ok=True)
    os.makedirs(cats_dir, exist_ok=True)
    os.makedirs(blog_dir, exist_ok=True)

    # All unique tools from guides-data.ts
    tools = [
        # guides category
        ('optery', 'Optery', 'guides'),
        ('deleteme', 'DeleteMe', 'guides'),
        ('firefox-browser', 'Firefox Browser', 'guides'),
        ('brave-browser', 'Brave Browser', 'guides'),
        ('duckduckgo-browser', 'DuckDuckGo Browser', 'guides'),
        ('multi-factor-authentication', 'Multi-factor Auth', 'guides'),
        # password-managers
        ('bitwarden', 'Bitwarden', 'password-managers'),
        ('1password', '1Password', 'password-managers'),
        ('lastpass', 'LastPass', 'password-managers'),
        ('keepass', 'KeePass', 'password-managers'),
        ('dashlane', 'Dashlane', 'password-managers'),
        ('nordpass', 'NordPass', 'password-managers'),
        ('yubikey', 'YubiKey', 'password-managers'),
        # vpn-reviews
        ('nordvpn', 'NordVPN', 'vpn-reviews'),
        ('expressvpn', 'ExpressVPN', 'vpn-reviews'),
        ('protonvpn', 'ProtonVPN', 'vpn-reviews'),
        ('surfshark', 'Surfshark', 'vpn-reviews'),
        ('cyberghost', 'CyberGhost', 'vpn-reviews'),
        ('private-internet-access', 'Private Internet Access', 'vpn-reviews'),
        ('proton-vpn-free', 'Proton VPN Free', 'vpn-reviews'),
        ('windscribe-free', 'Windscribe Free', 'vpn-reviews'),
        ('tunnelbear-free', 'TunnelBear Free', 'vpn-reviews'),
        ('proton-vpn-paid', 'Proton VPN (Paid)', 'vpn-reviews'),
        ('windscribe-paid', 'Windscribe (Paid)', 'vpn-reviews'),
        ('protonmail', 'ProtonMail', 'vpn-reviews'),
        ('vpns', 'VPNs', 'vpn-reviews'),
        # antivirus
        ('bitdefender-total-security', 'Bitdefender Total', 'antivirus'),
        ('norton-360-deluxe', 'Norton 360 Deluxe', 'antivirus'),
        ('eset-internet-security', 'ESET Internet Sec', 'antivirus'),
        ('kaspersky-total-security', 'Kaspersky Total', 'antivirus'),
        ('eset', 'ESET', 'antivirus'),
        ('malwarebytes', 'Malwarebytes', 'antivirus'),
        ('crowdstrike', 'CrowdStrike', 'antivirus'),
        ('bitdefender-antivirus-plus', 'Bitdefender AV+', 'antivirus'),
        ('bitdefender-internet-security', 'Bitdefender IS', 'antivirus'),
        ('norton-360-standard', 'Norton 360 Standard', 'antivirus'),
        ('password-manager', 'Password Manager', 'antivirus'),
        # secure-messaging
        ('signal', 'Signal', 'secure-messaging'),
        ('threema', 'Threema', 'secure-messaging'),
        ('session', 'Session', 'secure-messaging'),
        ('proton-mail', 'Proton Mail', 'secure-messaging'),
        ('tutanota', 'Tutanota', 'secure-messaging'),
        # privacy-tools
        ('tor-browser', 'Tor Browser', 'privacy-tools'),
        ('duckduckgo', 'DuckDuckGo', 'privacy-tools'),
        ('mozilla-firefox', 'Mozilla Firefox', 'privacy-tools'),
        ('duckduckgo-privacy-browser', 'DDG Privacy Browser', 'privacy-tools'),
        ('ublock-origin', 'uBlock Origin', 'privacy-tools'),
        ('privacy-badger', 'Privacy Badger', 'privacy-tools'),
    ]

    # Categories
    category_list = [
        ('vpn-reviews', 'VPN Reviews'),
        ('antivirus', 'Antivirus & Malware'),
        ('password-managers', 'Password Managers'),
        ('privacy-tools', 'Privacy Tools'),
        ('secure-messaging', 'Secure Messaging'),
        ('guides', 'Security Guides'),
        ('security-guides', 'Security Guides'),
        ('comparisons', 'Comparisons'),
        ('default', 'Security Tools'),
    ]

    # Blog post images
    blog_posts = [
        ('quiet-luxury-guide', 'Why You Need a VPN in 2026', 'vpn-reviews'),
        ('spring-color-trends', 'VPN Speed Test Results 2026', 'vpn-reviews'),
        ('capsule-wardrobe-mistakes', 'Password Mistakes to Avoid', 'password-managers'),
        ('nordstrom-vs-asos', 'NordVPN vs ExpressVPN Compared', 'vpn-reviews'),
        ('antivirus-guide', 'Best Antivirus Programs 2026', 'antivirus'),
        ('data-breach-check', 'Check If Your Data Was Leaked', 'privacy-tools'),
    ]

    # Featured guide images for homepage
    featured_guides = [
        ('featured-best-vpns-2026', 'Best VPNs 2026', 'vpn-reviews'),
        ('featured-nordvpn-vs-expressvpn', 'NordVPN vs ExpressVPN', 'vpn-reviews'),
        ('featured-best-password-managers', 'Best Password Managers', 'password-managers'),
        ('featured-online-privacy-guide', 'Online Privacy Guide', 'privacy-tools'),
    ]

    # Generate tool SVGs
    tool_count = 0
    for slug, name, cat in tools:
        svg = generate_tool_svg(slug, name, cat)
        path = os.path.join(tools_dir, f'{slug}.svg')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(svg)
        tool_count += 1

    # Generate category SVGs
    cat_count = 0
    for slug, name in category_list:
        svg = generate_category_svg(slug, name)
        path = os.path.join(cats_dir, f'{slug}.svg')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(svg)
        cat_count += 1

    # Generate blog SVGs
    blog_count = 0
    for slug, title, cat in blog_posts:
        svg = generate_blog_svg(slug, title, cat)
        path = os.path.join(blog_dir, f'{slug}.svg')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(svg)
        blog_count += 1

    # Generate featured guide SVGs
    feat_count = 0
    for slug, title, cat in featured_guides:
        svg = generate_guide_svg(slug, title, cat)
        path = os.path.join(cats_dir, f'{slug}.svg')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(svg)
        feat_count += 1

    print(f'Generated {tool_count} tool SVGs in {tools_dir}')
    print(f'Generated {cat_count} category SVGs in {cats_dir}')
    print(f'Generated {blog_count} blog SVGs in {blog_dir}')
    print(f'Generated {feat_count} featured guide SVGs in {cats_dir}')
    print(f'Total: {tool_count + cat_count + blog_count + feat_count} SVG files')


if __name__ == '__main__':
    main()
