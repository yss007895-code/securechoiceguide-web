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
  { slug: 'all', name: 'All', icon: '' },
  { slug: 'vpn-reviews', name: 'VPN Reviews', icon: '' },
  { slug: 'antivirus', name: 'Antivirus & Malware', icon: '' },
  { slug: 'password-managers', name: 'Password Managers', icon: '' },
  { slug: 'privacy-tools', name: 'Privacy Tools', icon: '' },
  { slug: 'secure-messaging', name: 'Secure Messaging', icon: '' },
  { slug: 'comparisons', name: 'Head-to-Head Comparisons', icon: '' },
  { slug: 'guides', name: 'Security Guides', icon: '' },
];

export const guides: StyleGuide[] = [

  {
    slug: 'best-password-managers-2026',
    title: 'Best Password Managers 2026: Secure Your Digital Life Easily',
    category: 'password-managers',
    description: 'Unlock top-tier password security for 2026. Our hands-on review dissects the best password managers, evaluating features, privacy, and ease of use.',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔑',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: '1Password', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=1Password&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'LastPass', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=LastPass&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Bitwarden', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Bitwarden&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Dashlane', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Dashlane&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'YubiKey', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=YubiKey&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'beyond-antivirus-zero-day-malware',
    title: 'Beyond Antivirus: Essential Steps to Protect Against Zero-Day Malware',
    category: 'antivirus',
    description: 'Go beyond basic antivirus. Learn advanced strategies and essential tools to defend your devices from sophisticated zero-day malware attacks.',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'ESET', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ESET&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Malwarebytes', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Malwarebytes&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'CrowdStrike', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=CrowdStrike&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'password manager', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=password+manager&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'VPNs', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=VPNs&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'antivirus-showdown-ultimate-pc-security',
    title: 'Antivirus Showdown: The Ultimate Comparison for Total PC Security',
    category: 'antivirus',
    description: 'Dive into a head-to-head antivirus comparison of Bitdefender, Norton 360, and Kaspersky. Get honest insights on malware protection, performance, and privacy.',
    readTime: '8 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Bitdefender Antivirus Plus', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Bitdefender+Antivirus+Plus&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Bitdefender Internet Security', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Bitdefender+Internet+Security&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Bitdefender Total Security', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Bitdefender+Total+Security&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Norton 360 Standard', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Norton+360+Standard&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Norton 360 Deluxe', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Norton+360+Deluxe&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'stream-without-buffering-best-vpns-for-flawless-streaming',
    title: 'Stream Without Buffering: The Best VPNs for Flawless Streaming',
    category: 'vpn-reviews',
    description: 'Unlock seamless HD streaming anywhere. This VPN review cuts through the noise, revealing the top services for bypassing geo-blocks and ending buffering for good.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '📺',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'ExpressVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ExpressVPN&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'NordVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'CyberGhost', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=CyberGhost&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Netflix', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Netflix&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Hulu', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Hulu&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'is-a-free-vpn-worth-it-deep-dive',
    title: 'Is a Free VPN Worth It? A Deep Dive into the Best Free Options',
    category: 'vpn-reviews',
    description: 'Unlock the truth about free VPNs. Our hands-on review identifies the safest, most reliable choices for casual online privacy without hidden costs.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Proton VPN Free', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Proton+VPN+Free&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Windscribe Free', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Windscribe+Free&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'TunnelBear Free', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=TunnelBear+Free&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Proton VPN (Paid)', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Proton+VPN+%28Paid%29&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Windscribe (Paid)', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Windscribe+%28Paid%29&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'best-vpns-2026-ultimate-online-privacy',
    title: 'Best VPNs for 2026: Top Choices for Ultimate Online Privacy',
    category: 'vpn-reviews',
    description: 'Discover the best VPNs for 2026 with our hands-on review. We analyze NordVPN, ExpressVPN, ProtonVPN, and Surfshark for future-proof security and performance.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔒',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'NordVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'ExpressVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ExpressVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Surfshark', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Surfshark&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'ProtonVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ProtonVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'ProtonMail', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ProtonMail&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },
];
