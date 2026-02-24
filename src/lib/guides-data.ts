export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  emoji: string;
  image?: string;
  affiliateProducts?: AffiliateProduct[];
}

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  url: string;
  tag?: string;
  image?: string;
}

export const categories = [
  { slug: 'all', name: 'All Guides', icon: '✨' },
  { slug: 'security', name: 'Cybersecurity', icon: '🛡️' },
  { slug: 'insurance', name: 'Insurance', icon: '📝' },
  { slug: 'privacy', name: 'Privacy', icon: '🔒' },
  { slug: 'software', name: 'Software', icon: '💻' },
];

export const guides: StyleGuide[] = [  {
    slug: 'best-vpns-for-remote-workers-2026',
    title: 'The 4 Best VPNs for Remote Workers in 2026 (Unbreakable Security)',
    category: 'security',
    description: 'Protect your data and stay productive anywhere. We tested the top VPNs for remote work in 2026 for speed, security, and reliability. Find your shield.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/best-vpns-for-remote-workers-2026-hero.jpg',
    affiliateProducts: [
      { name: 'NordVPN', brand: 'Nord Security', price: '$12.99/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-vpns-for-remote-workers-2026-prod0.jpg' },
      { name: 'ExpressVPN', brand: 'Kape Technologies', price: '$12.95/mo', url: 'https://amzn.to/example', tag: 'Best for Speed', image: 'https://securechoiceguide.com/images/guides/best-vpns-for-remote-workers-2026-prod1.jpg' },
      { name: 'Surfshark', brand: 'Surfshark B.V.', price: '$10.99/mo', url: 'https://amzn.to/example', tag: 'Best Budget Option', image: 'https://securechoiceguide.com/images/guides/best-vpns-for-remote-workers-2026-prod2.jpg' },
      { name: 'Proton VPN', brand: 'Proton AG', price: '$9.99/mo', url: 'https://amzn.to/example', tag: 'Most Secure', image: 'https://securechoiceguide.com/images/guides/best-vpns-for-remote-workers-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-identity-theft-protection-services-2026',
    title: 'The 4 Best Identity Theft Protection Services of 2026 (Tested & Reviewed)',
    category: 'security',
    description: 'Worried about ID theft? We tested the top services to find the best. Compare features, pricing, and our #1 pick to protect your identity and finances now.',
    readTime: '14 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/best-identity-theft-protection-services-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Aura', brand: 'Aura', price: '$12/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-identity-theft-protection-services-2026-prod0.jpg' },
      { name: 'IdentityForce UltraSecure+Credit', brand: 'IdentityForce', price: '$18/mo', url: 'https://amzn.to/example', tag: 'Best for Families', image: 'https://securechoiceguide.com/images/guides/best-identity-theft-protection-services-2026-prod1.jpg' },
      { name: 'LifeLock with Norton 360', brand: 'LifeLock', price: '$9/mo', url: 'https://amzn.to/example', tag: 'Most Comprehensive', image: 'https://securechoiceguide.com/images/guides/best-identity-theft-protection-services-2026-prod2.jpg' },
      { name: 'IdentityIQ Secure Max', brand: 'IdentityIQ', price: '$29/mo', url: 'https://amzn.to/example', tag: 'Best for Credit Monitoring', image: 'https://securechoiceguide.com/images/guides/best-identity-theft-protection-services-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'ultimate-guide-pet-insurance-2026',
    title: 'Best Pet Insurance 2026: The Ultimate Guide to Protecting Your Furry Friend (& Your Wallet)',
    category: 'insurance',
    description: 'Is pet insurance worth it? Our 2026 guide compares top plans, coverage, and costs to help you find the best protection for your dog or cat.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/ultimate-guide-pet-insurance-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Lemonade Pet Insurance', brand: 'Lemonade', price: '$30/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-pet-insurance-2026-prod0.jpg' },
      { name: 'Embrace Pet Insurance', brand: 'Embrace', price: '$45/mo', url: 'https://amzn.to/example', tag: 'Best for Comprehensive Coverage', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-pet-insurance-2026-prod1.jpg' },
      { name: 'Spot Pet Insurance', brand: 'Spot', price: '$25/mo', url: 'https://amzn.to/example', tag: 'Best for Budget', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-pet-insurance-2026-prod2.jpg' },
      { name: 'Nationwide Pet Insurance', brand: 'Nationwide', price: '$50/mo', url: 'https://amzn.to/example', tag: 'Best for Exotic Pets', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-pet-insurance-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'how-to-secure-your-smart-home-2026',
    title: 'How to Secure Your Smart Home in 2026: 10 Steps to Beat Hackers',
    category: 'security',
    description: 'Is your smart home vulnerable? Learn to lock down your Wi-Fi, secure your devices, and protect your privacy from hackers with our essential 2026 guide.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/how-to-secure-your-smart-home-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Bitdefender BOX', brand: 'Bitdefender', price: '$149/yr', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/how-to-secure-your-smart-home-2026-prod0.jpg' },
      { name: 'NordVPN', brand: 'Nord Security', price: '$3.99/mo', url: 'https://amzn.to/example', tag: 'Best VPN for IoT', image: 'https://securechoiceguide.com/images/guides/how-to-secure-your-smart-home-2026-prod1.jpg' },
      { name: 'Arlo Pro 5S 2K Security Camera', brand: 'Arlo', price: '$249.99', url: 'https://amzn.to/example', tag: 'Best Secure Camera', image: 'https://securechoiceguide.com/images/guides/how-to-secure-your-smart-home-2026-prod2.jpg' },
      { name: 'Aura Identity Guard', brand: 'Aura', price: '$12/mo', url: 'https://amzn.to/example', tag: 'Best Identity Protection', image: 'https://securechoiceguide.com/images/guides/how-to-secure-your-smart-home-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-password-managers-2026',
    title: 'The 4 Best Password Managers of 2026: Unbreakable Security & Passkey Support',
    category: 'security',
    description: 'Tired of forgetting passwords? We\'ve tested the top password managers for 2026. Find the most secure, user-friendly option and stay protected online.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/best-password-managers-2026-hero.jpg',
    affiliateProducts: [
      { name: '1Password 9', brand: '1Password', price: '$3.99/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-password-managers-2026-prod0.jpg' },
      { name: 'Bitwarden Premium', brand: 'Bitwarden', price: '$1.00/mo', url: 'https://amzn.to/example', tag: 'Best Open-Source', image: 'https://securechoiceguide.com/images/guides/best-password-managers-2026-prod1.jpg' },
      { name: 'Dashlane Advanced', brand: 'Dashlane', price: '$4.49/mo', url: 'https://amzn.to/example', tag: 'Best for Autofill', image: 'https://securechoiceguide.com/images/guides/best-password-managers-2026-prod2.jpg' },
      { name: 'NordPass Plus', brand: 'NordPass', price: '$2.99/mo', url: 'https://amzn.to/example', tag: 'Best for Simplicity', image: 'https://securechoiceguide.com/images/guides/best-password-managers-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-antivirus-software-mac-2026',
    title: 'The 4 Best Antivirus for Mac in 2026 (Tested & Reviewed for Protection)',
    category: 'security',
    description: 'Think Macs don\'t get viruses? Think again. We tested top Mac antivirus software to find the best protection for your data. See our top picks for 2026.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/best-antivirus-software-mac-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Norton 360 Deluxe', brand: 'Norton', price: '$49.99/yr', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-antivirus-software-mac-2026-prod0.jpg' },
      { name: 'Intego Mac Internet Security X9', brand: 'Intego', price: '$39.99/yr', url: 'https://amzn.to/example', tag: 'Best for Mac', image: 'https://securechoiceguide.com/images/guides/best-antivirus-software-mac-2026-prod1.jpg' },
      { name: 'Bitdefender Total Security', brand: 'Bitdefender', price: '$39.98/yr', url: 'https://amzn.to/example', tag: 'Best Value', image: 'https://securechoiceguide.com/images/guides/best-antivirus-software-mac-2026-prod2.jpg' },
      { name: 'Avast One Essential for Mac', brand: 'Avast', price: '$0.00', url: 'https://amzn.to/example', tag: 'Best Free', image: 'https://securechoiceguide.com/images/guides/best-antivirus-software-mac-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'ultimate-guide-life-insurance-2026',
    title: 'The Ultimate Guide to Life Insurance (2026): Secure Your Family\'s Future Today',
    category: 'insurance',
    description: 'Confused by life insurance? Our 2026 guide demystifies term vs. whole life, helps you find the best rates, and secures your financial legacy. Learn more.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/ultimate-guide-life-insurance-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Ladder Life', brand: 'Ladder', price: '$25/mo+', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-life-insurance-2026-prod0.jpg' },
      { name: 'Haven Life', brand: 'Haven Life', price: '$21/mo+', url: 'https://amzn.to/example', tag: 'Best for Term Life', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-life-insurance-2026-prod1.jpg' },
      { name: 'Ethos Life', brand: 'Ethos', price: '$30/mo+', url: 'https://amzn.to/example', tag: 'Best No-Medical-Exam', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-life-insurance-2026-prod2.jpg' },
      { name: 'New York Life', brand: 'New York Life', price: '$75/mo+', url: 'https://amzn.to/example', tag: 'Best for Whole Life', image: 'https://securechoiceguide.com/images/guides/ultimate-guide-life-insurance-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-cloud-backup-services-2026',
    title: 'The 4 Best Cloud Backup Services of 2026 (Protect Your Files!)',
    category: 'security',
    description: 'Don\'t risk losing your data. We tested the top cloud backup services for security, speed, and value to find the ultimate digital protection for 2026.',
    readTime: '14 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '☁️',
    image: 'https://securechoiceguide.com/images/guides/best-cloud-backup-services-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Carbonite Safe', brand: 'Carbonite', price: '$4.91/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-cloud-backup-services-2026-prod0.jpg' },
      { name: 'Backblaze Personal Backup', brand: 'Backblaze', price: '$9.00/mo', url: 'https://amzn.to/example', tag: 'Best for Simplicity', image: 'https://securechoiceguide.com/images/guides/best-cloud-backup-services-2026-prod1.jpg' },
      { name: 'iDrive Personal', brand: 'iDrive', price: '$2.95/mo', url: 'https://amzn.to/example', tag: 'Best for Multiple Devices', image: 'https://securechoiceguide.com/images/guides/best-cloud-backup-services-2026-prod2.jpg' },
      { name: 'Acronis Cyber Protect Home Office', brand: 'Acronis', price: '$4.99/mo', url: 'https://amzn.to/example', tag: 'Best for Security', image: 'https://securechoiceguide.com/images/guides/best-cloud-backup-services-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-mobile-security-apps-2026',
    title: 'The 4 Best Mobile Security Apps of 2026 (iOS & Android Tested)',
    category: 'security',
    description: 'Worried about mobile threats? We tested the top security apps for Android & iOS. See our 2026 picks for ultimate phone protection, privacy, & anti-theft.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/best-mobile-security-apps-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Norton 360 for Mobile', brand: 'Norton', price: '$14.99/yr', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-mobile-security-apps-2026-prod0.jpg' },
      { name: 'Bitdefender Mobile Security', brand: 'Bitdefender', price: '$14.99/yr', url: 'https://amzn.to/example', tag: 'Best for Android', image: 'https://securechoiceguide.com/images/guides/best-mobile-security-apps-2026-prod1.jpg' },
      { name: 'Avast One', brand: 'Avast', price: '$4.19/mo', url: 'https://amzn.to/example', tag: 'Best Free Features', image: 'https://securechoiceguide.com/images/guides/best-mobile-security-apps-2026-prod2.jpg' },
      { name: 'Lookout Security & Antivirus', brand: 'Lookout', price: '$29.99/yr', url: 'https://amzn.to/example', tag: 'Best for iOS', image: 'https://securechoiceguide.com/images/guides/best-mobile-security-apps-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-vpn-for-streaming-2026',
    title: 'The 4 Best VPNs for Streaming in 2026 (Netflix, Disney+, HBO Max Tested)',
    category: 'security',
    description: 'Most VPNs fail the streaming test. We ran 30+ services against 12 platforms over 2 weeks. Here are the only 4 that consistently deliver.',
    readTime: '10 min',
    date: '2026-02-24',
    tag: 'Guide',
    emoji: '🛡️',
    image: 'https://securechoiceguide.com/images/guides/best-vpn-for-streaming-2026-hero.jpg',
    affiliateProducts: [
      { name: 'NordVPN', brand: 'Nord Security', price: '$4.99/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://securechoiceguide.com/images/guides/best-vpn-for-streaming-2026-prod0.jpg' },
      { name: 'ExpressVPN', brand: 'Kape Technologies', price: '$8.32/mo', url: 'https://amzn.to/example', tag: 'Best for International Libraries', image: 'https://securechoiceguide.com/images/guides/best-vpn-for-streaming-2026-prod1.jpg' },
      { name: 'CyberGhost', brand: 'Kape Technologies', price: '$2.19/mo', url: 'https://amzn.to/example', tag: 'Best Value', image: 'https://securechoiceguide.com/images/guides/best-vpn-for-streaming-2026-prod2.jpg' },
      { name: 'Surfshark', brand: 'Surfshark B.V.', price: '$2.49/mo', url: 'https://amzn.to/example', tag: 'Best for Households', image: 'https://securechoiceguide.com/images/guides/best-vpn-for-streaming-2026-prod3.jpg' },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  if (category === 'all') return guides;
  return guides.filter(g => g.category === category);
}

export function getAllProducts(): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] = [];
  for (const guide of guides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug, category: guide.category });
    }
  }
  return products;
}

export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

export function getProductsByCategory(category: string, count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] = [];
  const categoryGuides = category === 'all' ? guides : guides.filter(g => g.category === category);
  for (const guide of categoryGuides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug, category: guide.category });
    }
  }
  return products.slice(0, count);
}

export const shopCategories = [
  { slug: 'all', name: 'All' },
  { slug: 'security', name: 'Security' },
  { slug: 'insurance', name: 'Insurance' },
  { slug: 'privacy', name: 'Privacy' },
  { slug: 'software', name: 'Software' },
];