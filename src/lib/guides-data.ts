// SecureChoiceGuide - Guides Data Layer
// Categories: Home Security, Personal Safety, Cybersecurity, Car Safety

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  rating: number;
  pros: string[];
  cons: string[];
  url: string;
  image?: string;
  badge?: string;
}

export interface GuideSection {
  heading: string;
  content: string;
}

export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  image?: string;
  sections: GuideSection[];
  affiliateProducts: AffiliateProduct[];
}

export interface ShopCategory {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

// ─── Categories ───────────────────────────────────────────
export const categories = [
  { slug: 'home-security', name: 'Home Security', description: 'Smart locks, cameras, alarm systems, and home monitoring solutions.', image: '/images/categories/cat-antivirus-security.webp' },
  { slug: 'personal-safety', name: 'Personal Safety', description: 'Identity theft protection, personal alarms, and safety tools.', image: '/images/categories/cat-identity-theft.webp' },
  { slug: 'cybersecurity', name: 'Cybersecurity', description: 'VPNs, password managers, antivirus, and online privacy tools.', image: '/images/categories/cat-vpn-reviews.webp' },
  { slug: 'car-safety', name: 'Car Safety', description: 'Dash cams, GPS trackers, and vehicle security systems.', image: '/images/categories/cat-insurance-guides.webp' },
];

export const shopCategories: ShopCategory[] = [
  { slug: 'all', name: 'All', description: 'All security products' },
  { slug: 'home-security', name: 'Home Security', description: 'Smart home protection' },
  { slug: 'cybersecurity', name: 'Cybersecurity', description: 'Digital security tools' },
  { slug: 'personal-safety', name: 'Personal Safety', description: 'Personal protection' },
  { slug: 'car-safety', name: 'Car Safety', description: 'Vehicle security' },
];

// ─── Guides (6 sample) ───────────────────────────────────
export const guides: StyleGuide[] = [
  {
    slug: 'best-home-security-systems-2026',
    title: 'Best Home Security Systems 2026: Complete Buyer\'s Guide',
    category: 'home-security',
    description: 'We tested 15+ home security systems over 6 months. Here are our top picks for every budget and home size.',
    readTime: '18 min read',
    date: '2026-02-28',
    tag: 'Editor\'s Choice',
    image: '/images/categories/cat-antivirus-security.webp',
    sections: [
      { heading: 'Why Home Security Matters in 2026', content: '<p>According to FBI crime statistics, a burglary occurs every 25.7 seconds in the United States. Modern home security systems have evolved far beyond simple door alarms - today\'s systems integrate AI-powered cameras, smart locks, environmental sensors, and 24/7 professional monitoring into seamless packages.</p><p>We spent over six months installing and testing 15 different home security systems in real homes across the country. Our evaluation criteria included ease of installation, reliability, false alarm rates, mobile app quality, monitoring response times, and overall value.</p>' },
      { heading: 'How We Tested', content: '<p>Each system was installed in a test home and evaluated over a minimum of 30 days. We triggered alarms at different times of day, tested cellular backup connections, measured app response times, and evaluated customer support quality through multiple interactions.</p><p>We also consulted with three certified security professionals to validate our methodology and findings. Our product ratings reflect a weighted score across eight evaluation categories.</p>' },
      { heading: 'Best Overall: SimpliSafe', content: '<p>SimpliSafe continues to dominate the DIY security market with its no-contract monitoring, excellent hardware, and intuitive mobile app. The latest generation features faster response times and improved camera resolution. Setup takes under 30 minutes for a standard kit.</p><p>Professional monitoring starts at just $17.99/month - significantly less than competitors like ADT. The system supports up to 40 sensors and integrates with Alexa and Google Home.</p>' },
      { heading: 'Best Premium: ADT', content: '<p>For those who want professionally installed, carrier-grade security, ADT remains the gold standard. Their Smart Home packages include advanced automation, video analytics, and the industry\'s fastest average response time of 15 seconds.</p><p>The main drawback is the 36-month contract requirement and higher monthly costs starting at $28.99/month. However, the peace of mind from 150+ years of experience is hard to beat.</p>' },
      { heading: 'Best Value: Ring Alarm Pro', content: '<p>Amazon\'s Ring Alarm Pro offers an impressive feature set at a competitive price point. The built-in eero Wi-Fi 6 router eliminates the need for a separate networking device, and Ring\'s Protect Pro plan at $20/month includes 24/7 monitoring, video recording for all cameras, and an extended warranty.</p>' },
      { heading: 'Verdict', content: '<p>For most homeowners, SimpliSafe offers the best balance of features, price, and flexibility. If budget is no concern and you want white-glove installation, ADT is the way to go. Ring Alarm Pro is ideal for Amazon ecosystem users who want integrated security and networking.</p>' },
    ],
    affiliateProducts: [
      { name: 'SimpliSafe 10-Piece Home Security Kit', brand: 'SimpliSafe', price: '$249.99', rating: 9.4, pros: ['No contract required', 'Easy DIY install', 'Affordable monitoring'], cons: ['No Apple HomeKit support', 'Camera resolution could be better'], url: 'https://www.amazon.com/dp/B08GFVMYXQ?tag=securechoice-20', image: '/images/guides/best-antivirus-2026-hero.webp', badge: 'Best Overall' },
      { name: 'ADT Smart Home Complete', brand: 'ADT', price: '$599.99', rating: 9.1, pros: ['Professional installation', 'Fastest response times', 'Extensive device support'], cons: ['36-month contract', 'Higher monthly cost'], url: 'https://www.amazon.com/dp/B09BFXTCM4?tag=securechoice-20', image: '/images/categories/cat-antivirus-security.webp', badge: 'Best Premium' },
      { name: 'Ring Alarm Pro 14-Piece Kit', brand: 'Ring', price: '$349.99', rating: 8.8, pros: ['Built-in eero Wi-Fi 6', 'Works with Alexa', 'Good value'], cons: ['Amazon ecosystem lock-in', 'Basic keypad design'], url: 'https://www.amazon.com/dp/B09F6VG3K1?tag=securechoice-20', image: '/images/categories/hero-security.webp', badge: 'Best Value' },
      { name: 'Abode Smart Security Kit', brand: 'Abode', price: '$279.99', rating: 8.5, pros: ['Works with HomeKit, Alexa, Google', 'No contract', 'Flexible monitoring'], cons: ['Smaller device ecosystem', 'App can be slow'], url: 'https://www.amazon.com/dp/B08HRMX9WM?tag=securechoice-20', image: '/images/categories/security-guides.webp' },
    ],
  },
  {
    slug: 'top-vpns-for-privacy-2026',
    title: 'Top VPNs for Privacy 2026: Tested & Ranked',
    category: 'cybersecurity',
    description: 'Our cybersecurity team tested 25+ VPNs for speed, security, and privacy. These are the only ones we recommend.',
    readTime: '22 min read',
    date: '2026-02-25',
    tag: 'Top Rated',
    image: '/images/categories/cat-vpn-reviews.webp',
    sections: [
      { heading: 'Why You Need a VPN in 2026', content: '<p>Internet privacy is under increasing threat. ISPs can legally sell your browsing data, public Wi-Fi networks are prime targets for hackers, and geo-restrictions limit access to content worldwide. A reliable VPN encrypts your traffic and masks your IP address, providing essential protection for your digital life.</p><p>But not all VPNs are created equal. Some log your data despite privacy claims, others significantly slow your connection, and a few have been caught selling user information to third parties. Our exhaustive testing separates the trustworthy from the misleading.</p>' },
      { heading: 'Testing Methodology', content: '<p>We tested each VPN across five continents using standardized speed tests, DNS leak checks, WebRTC leak tests, and kill switch verification. We also reviewed each provider\'s privacy policy, audit history, and jurisdiction to assess their privacy commitments.</p>' },
      { heading: 'Best Overall: NordVPN', content: '<p>NordVPN tops our list for the third consecutive year. With 6,200+ servers in 111 countries, consistently fast speeds (average 8% speed loss), and a verified no-logs policy audited by PricewaterhouseCoopers, NordVPN delivers on every front.</p><p>The Threat Protection Pro feature blocks malware, trackers, and ads at the network level. NordVPN also introduced NordWhisper protocol in 2026, which disguises VPN traffic as regular HTTPS to bypass even the most aggressive VPN blocks.</p>' },
      { heading: 'Best for Speed: ExpressVPN', content: '<p>ExpressVPN\'s Lightway protocol delivers the fastest speeds we\'ve measured - just 3-5% average speed loss. The TrustedServer technology runs entirely in RAM, ensuring no data is ever written to disk. Based in the British Virgin Islands, ExpressVPN is outside major surveillance alliances.</p>' },
      { heading: 'Best Value: Surfshark', content: '<p>Surfshark offers unlimited simultaneous connections at one of the lowest prices in the market. At $2.49/month on a 2-year plan, it\'s hard to beat. The CleanWeb feature provides ad and malware blocking, and the NoBorders mode helps bypass censorship.</p>' },
      { heading: 'Final Recommendations', content: '<p>NordVPN is our top pick for most users seeking the best balance of speed, security, and features. ExpressVPN is worth the premium if raw speed is your priority. Surfshark is the budget champion without significant compromises.</p>' },
    ],
    affiliateProducts: [
      { name: 'NordVPN 2-Year Plan', brand: 'NordVPN', price: '$3.49/mo', rating: 9.6, pros: ['6,200+ servers worldwide', 'Verified no-logs policy', 'NordWhisper anti-censorship'], cons: ['Occasional slow server connections', 'No free tier'], url: 'https://www.amazon.com/dp/B09VPNQVQ1?tag=securechoice-20', image: '/images/categories/cat-vpn-reviews.webp', badge: 'Best Overall' },
      { name: 'ExpressVPN 1-Year Plan', brand: 'ExpressVPN', price: '$6.67/mo', rating: 9.3, pros: ['Fastest speeds tested', 'RAM-only servers', 'BVI jurisdiction'], cons: ['More expensive', 'Only 8 simultaneous connections'], url: 'https://www.amazon.com/dp/B09VPNRR41?tag=securechoice-20', image: '/images/blog/vpn-comparison-head-to-head.webp', badge: 'Fastest' },
      { name: 'Surfshark 2-Year Plan', brand: 'Surfshark', price: '$2.49/mo', rating: 9.0, pros: ['Unlimited devices', 'CleanWeb ad blocking', 'Very affordable'], cons: ['Smaller server network', 'Newer provider'], url: 'https://www.amazon.com/dp/B09VPNSS21?tag=securechoice-20', image: '/images/blog/vpn-privacy-complete-guide.webp', badge: 'Best Value' },
      { name: 'ProtonVPN Plus', brand: 'ProtonVPN', price: '$4.99/mo', rating: 8.7, pros: ['Swiss privacy laws', 'Open source', 'Free tier available'], cons: ['Slower speeds', 'Fewer streaming options'], url: 'https://www.amazon.com/dp/B09VPNPP31?tag=securechoice-20', image: '/images/categories/cat-privacy-tools.webp' },
    ],
  },
  {
    slug: 'best-dash-cams-2026',
    title: 'Best Dash Cams 2026: Protect Yourself on the Road',
    category: 'car-safety',
    description: 'From budget to premium, we tested 12 dash cams in real driving conditions. Here are our recommendations.',
    readTime: '15 min read',
    date: '2026-02-20',
    tag: 'New Guide',
    image: '/images/categories/cat-insurance-guides.webp',
    sections: [
      { heading: 'Why Every Driver Needs a Dash Cam', content: '<p>Dash cams have become essential driving accessories. They provide crucial evidence in accidents, protect against insurance fraud, and can even lower your insurance premiums. In 2026, prices have dropped while features like 4K recording, night vision, and AI-powered incident detection have become standard.</p>' },
      { heading: 'What to Look For', content: '<p>Resolution matters, but it\'s not everything. Look for wide dynamic range (WDR) for better night recording, a wide field of view (140-170 degrees), reliable parking mode, and GPS logging. Cloud connectivity is a plus for automatic backup of critical footage.</p>' },
      { heading: 'Best Overall: Viofo A229 Pro Duo', content: '<p>The Viofo A229 Pro delivers stunning 4K HDR front recording with a sharp 2K rear camera. Its Sony STARVIS 2 sensor captures license plates clearly even in low light. Built-in Wi-Fi and GPS, plus optional hardwire kit for 24/7 parking mode.</p>' },
      { heading: 'Best Budget: Vantrue N1 Pro', content: '<p>At under $100, the Vantrue N1 Pro punches well above its weight. 2.5K resolution, excellent night vision, and a compact design that hides behind your rearview mirror. It lacks a rear camera, but for front-only recording, it\'s unbeatable at this price.</p>' },
      { heading: 'Verdict', content: '<p>The Viofo A229 Pro Duo is our top recommendation for comprehensive protection. If you\'re on a budget, the Vantrue N1 Pro offers excellent value. For Tesla owners, the built-in Sentry Mode is good but a dedicated dash cam still provides better video quality.</p>' },
    ],
    affiliateProducts: [
      { name: 'Viofo A229 Pro Duo 4K+2K', brand: 'Viofo', price: '$239.99', rating: 9.2, pros: ['4K HDR front camera', 'Excellent night vision', 'Built-in GPS'], cons: ['Requires hardwire for parking mode', 'No cloud storage'], url: 'https://www.amazon.com/dp/B0BXRQZ123?tag=securechoice-20', image: '/images/categories/cat-insurance-guides.webp', badge: 'Best Overall' },
      { name: 'Vantrue N1 Pro 2.5K Dash Cam', brand: 'Vantrue', price: '$89.99', rating: 8.6, pros: ['Great value', 'Compact design', 'Voice control'], cons: ['No rear camera', 'Small screen'], url: 'https://www.amazon.com/dp/B0BXRQZ456?tag=securechoice-20', image: '/images/categories/security-guides.webp', badge: 'Best Value' },
      { name: 'Garmin Dash Cam 67W', brand: 'Garmin', price: '$229.99', rating: 8.9, pros: ['180-degree FOV', 'Cloud connected', 'Voice control'], cons: ['1440p only', 'Subscription for cloud'], url: 'https://www.amazon.com/dp/B0BXRQZ789?tag=securechoice-20', image: '/images/categories/comparisons.webp' },
    ],
  },
  {
    slug: 'best-password-managers-2026',
    title: 'Best Password Managers 2026: Secure Your Digital Life',
    category: 'cybersecurity',
    description: 'We evaluated 10+ password managers for security, usability, and cross-platform support. Our expert picks inside.',
    readTime: '16 min read',
    date: '2026-02-15',
    tag: 'Updated',
    image: '/images/categories/cat-password-managers.webp',
    sections: [
      { heading: 'The Password Problem', content: '<p>The average person has 100+ online accounts, yet studies show 65% of people reuse passwords across multiple sites. A single data breach can compromise dozens of accounts. Password managers solve this by generating and storing unique, complex passwords for every site.</p>' },
      { heading: 'Security First: How We Evaluate', content: '<p>We prioritize zero-knowledge encryption, where even the provider cannot access your vault. We also test for breach monitoring, two-factor authentication options, secure sharing, and emergency access features. Each manager was tested across Windows, macOS, iOS, and Android.</p>' },
      { heading: 'Best Overall: 1Password', content: '<p>1Password combines industry-leading security with the best user experience we\'ve tested. The Watchtower feature proactively alerts you to compromised, weak, or reused passwords. Travel Mode lets you temporarily remove sensitive data when crossing borders.</p><p>Family plans support up to 5 members with individual vaults and shared folders. At $4.99/month for families, it\'s excellent value.</p>' },
      { heading: 'Best Free: Bitwarden', content: '<p>Bitwarden\'s free tier is remarkably generous - unlimited passwords, unlimited devices, and a built-in TOTP authenticator. The open-source codebase has been independently audited, and the $10/year premium plan adds hardware key support and priority support.</p>' },
      { heading: 'Verdict', content: '<p>1Password is our recommendation for most users and families. Bitwarden is the clear winner for anyone who wants robust security at zero cost. Dashlane is worth considering if you want a bundled VPN service.</p>' },
    ],
    affiliateProducts: [
      { name: '1Password Family Plan (1 Year)', brand: '1Password', price: '$4.99/mo', rating: 9.5, pros: ['Best user experience', 'Travel Mode', 'Watchtower alerts'], cons: ['No free tier', 'Slightly more expensive'], url: 'https://www.amazon.com/dp/B09BFXTPM1?tag=securechoice-20', image: '/images/categories/cat-password-managers.webp', badge: 'Best Overall' },
      { name: 'Bitwarden Premium', brand: 'Bitwarden', price: '$10/year', rating: 9.2, pros: ['Open source', 'Generous free tier', 'Self-host option'], cons: ['Less polished UI', 'Fewer integrations'], url: 'https://www.amazon.com/dp/B09BFXTPM2?tag=securechoice-20', image: '/images/guides/1password-vs-bitwarden-2026-hero.webp', badge: 'Best Free' },
      { name: 'Dashlane Premium', brand: 'Dashlane', price: '$4.99/mo', rating: 8.8, pros: ['Built-in VPN', 'Dark web monitoring', 'Password changer'], cons: ['Limited free tier', 'Pricier than alternatives'], url: 'https://www.amazon.com/dp/B09BFXTPM3?tag=securechoice-20', image: '/images/categories/cat-privacy-tools.webp' },
    ],
  },
  {
    slug: 'best-smart-locks-2026',
    title: 'Best Smart Locks 2026: Keyless Entry Done Right',
    category: 'home-security',
    description: 'We installed and tested 10 smart locks. Find out which ones are truly worth the upgrade from traditional deadbolts.',
    readTime: '14 min read',
    date: '2026-02-10',
    tag: 'Buyer\'s Guide',
    image: '/images/categories/hero-security.webp',
    sections: [
      { heading: 'Smart Locks: Convenience Meets Security', content: '<p>Smart locks have matured significantly. Today\'s models offer multiple entry methods - fingerprint, PIN code, smartphone, key card, and traditional key backup. Integration with smart home ecosystems means you can lock up with a voice command or have your door auto-lock when you leave.</p>' },
      { heading: 'Security Concerns Addressed', content: '<p>The biggest worry with smart locks is hacking. Modern locks use AES-128 or AES-256 encryption for Bluetooth and Wi-Fi communications. We tested each lock for known vulnerabilities and replay attacks. All our recommended picks passed security audits.</p>' },
      { heading: 'Best Overall: August Wi-Fi Smart Lock', content: '<p>The August Wi-Fi Smart Lock is our top pick for its seamless retrofitting design - it installs over your existing deadbolt in minutes, so you keep your original keys as backup. Built-in Wi-Fi means no hub required. The DoorSense feature tells you if the door is actually closed and locked.</p>' },
      { heading: 'Best Fingerprint: Ultraloq U-Bolt Pro', content: '<p>If you want the fastest entry, the Ultraloq U-Bolt Pro\'s fingerprint scanner unlocks in under 0.5 seconds. It offers six ways to unlock and has an anti-peep keypad that randomizes number positions to prevent shoulder surfing.</p>' },
      { heading: 'Verdict', content: '<p>The August Wi-Fi Smart Lock is perfect for renters and anyone who wants a quick upgrade without replacing their deadbolt. The Ultraloq U-Bolt Pro is ideal for families who want the fastest, most versatile entry options.</p>' },
    ],
    affiliateProducts: [
      { name: 'August Wi-Fi Smart Lock (4th Gen)', brand: 'August', price: '$229.99', rating: 9.1, pros: ['Keeps existing keys', 'No hub needed', 'Auto-lock/unlock'], cons: ['Battery life could be better', 'Premium price'], url: 'https://www.amazon.com/dp/B0BXRQS123?tag=securechoice-20', image: '/images/categories/hero-security.webp', badge: 'Best Overall' },
      { name: 'Ultraloq U-Bolt Pro Wi-Fi', brand: 'Ultraloq', price: '$199.99', rating: 8.9, pros: ['6 unlock methods', 'Fast fingerprint scanner', 'Anti-peep keypad'], cons: ['Bulkier design', 'Complex setup'], url: 'https://www.amazon.com/dp/B0BXRQS456?tag=securechoice-20', image: '/images/categories/cat-antivirus-security.webp', badge: 'Best Fingerprint' },
      { name: 'Yale Assure Lock 2', brand: 'Yale', price: '$179.99', rating: 8.7, pros: ['Sleek design', 'Works with all smart home platforms', 'Trusted brand'], cons: ['Requires hub for some features', 'No fingerprint'], url: 'https://www.amazon.com/dp/B0BXRQS789?tag=securechoice-20', image: '/images/categories/security-guides.webp' },
    ],
  },
  {
    slug: 'identity-theft-protection-guide-2026',
    title: 'Identity Theft Protection 2026: Complete Guide & Best Services',
    category: 'personal-safety',
    description: 'Identity theft affected 15 million Americans last year. Here\'s how to protect yourself and the best monitoring services.',
    readTime: '20 min read',
    date: '2026-02-05',
    tag: 'Essential',
    image: '/images/categories/cat-identity-theft.webp',
    sections: [
      { heading: 'The Growing Threat of Identity Theft', content: '<p>Identity theft costs Americans over $10 billion annually. With increasing data breaches exposing personal information, proactive monitoring has become essential. In 2026, synthetic identity fraud - where criminals combine real and fake information - has become the fastest-growing type of financial crime.</p>' },
      { heading: 'What Identity Theft Protection Actually Does', content: '<p>These services monitor your credit reports, financial accounts, dark web marketplaces, and public records for suspicious activity. When a threat is detected, you receive real-time alerts. Premium plans include insurance coverage and dedicated recovery specialists who handle the paperwork if you become a victim.</p>' },
      { heading: 'Best Overall: Aura', content: '<p>Aura provides the most comprehensive protection we\'ve tested, combining identity monitoring, credit monitoring (all 3 bureaus), dark web scanning, VPN service, antivirus, and password manager in one subscription. The family plan covers up to 5 adults and unlimited children.</p><p>Their AI-powered fraud detection catches threats faster than competitors, with an average alert time of under 2 minutes. $1 million identity theft insurance is included on all plans.</p>' },
      { heading: 'Best Value: Identity Guard', content: '<p>Identity Guard powered by IBM Watson AI offers robust monitoring at a lower price point than Aura. The Total plan includes credit monitoring, dark web scanning, and social media monitoring. Insurance coverage of $1 million is included.</p>' },
      { heading: 'Prevention Tips', content: '<p>Beyond monitoring services, protect yourself by: freezing your credit with all three bureaus (it\'s free), using unique passwords with a password manager, enabling two-factor authentication everywhere, being cautious with public Wi-Fi, and regularly reviewing your credit reports at AnnualCreditReport.com.</p>' },
      { heading: 'Verdict', content: '<p>Aura is the best all-in-one solution, especially for families. Identity Guard offers excellent value if you don\'t need the extra features like VPN and antivirus. LifeLock (Norton) is a solid choice if you already use Norton\'s security products.</p>' },
    ],
    affiliateProducts: [
      { name: 'Aura Family Plan (Annual)', brand: 'Aura', price: '$25/mo', rating: 9.3, pros: ['All-in-one protection', 'AI-powered alerts', 'Includes VPN & antivirus'], cons: ['Higher price', 'No monthly billing option'], url: 'https://www.amazon.com/dp/B09BFXID01?tag=securechoice-20', image: '/images/categories/cat-identity-theft.webp', badge: 'Best Overall' },
      { name: 'Identity Guard Total Plan', brand: 'Identity Guard', price: '$16.99/mo', rating: 8.8, pros: ['IBM Watson AI', 'Affordable', 'Social media monitoring'], cons: ['Fewer extra features', 'Slower alerts'], url: 'https://www.amazon.com/dp/B09BFXID02?tag=securechoice-20', image: '/images/categories/cat-privacy-tools.webp', badge: 'Best Value' },
      { name: 'LifeLock Ultimate Plus', brand: 'Norton LifeLock', price: '$29.99/mo', rating: 8.5, pros: ['Includes Norton antivirus', 'Established brand', '$1M insurance'], cons: ['Most expensive', 'Auto-renewal issues reported'], url: 'https://www.amazon.com/dp/B09BFXID03?tag=securechoice-20', image: '/images/categories/cat-password-managers.webp' },
    ],
  },
];

// ─── Helper Functions ─────────────────────────────────────
export function getFeaturedProducts(count: number): AffiliateProduct[] {
  const all: AffiliateProduct[] = [];
  for (const guide of guides) {
    for (const p of guide.affiliateProducts) {
      if (!all.find(a => a.name === p.name)) {
        all.push(p);
      }
    }
  }
  return all.sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getProductsByCategory(
  slug: string,
  limit: number
): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const results: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  const source = slug === 'all' ? guides : guides.filter(g => g.category === slug);
  for (const guide of source) {
    for (const p of guide.affiliateProducts) {
      if (!results.find(r => r.name === p.name)) {
        results.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
      }
    }
  }
  return results.slice(0, limit);
}

export function getGuideBySlug(slug: string): StyleGuide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getRelatedGuides(currentSlug: string, count: number): StyleGuide[] {
  const current = guides.find(g => g.slug === currentSlug);
  if (!current) return guides.slice(0, count);
  const sameCategory = guides.filter(g => g.slug !== currentSlug && g.category === current.category);
  const others = guides.filter(g => g.slug !== currentSlug && g.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}
