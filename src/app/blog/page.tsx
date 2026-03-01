import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Cybersecurity News, VPN Tips & Privacy Updates',
  description: 'The latest cybersecurity news, VPN tips, privacy guides, and security tool reviews. Stay updated with expert analysis and practical advice.',
  keywords: ['cybersecurity blog', 'vpn news', 'privacy tips 2026', 'online security', 'data breach news'],
};

const posts = [
  {
    slug: 'vpn-privacy-guide',
    title: 'Why You Need a VPN in 2026: The Complete Privacy Case',
    excerpt: 'ISPs selling your data, public Wi-Fi risks, and government surveillance are all real threats. Here\'s why a VPN is no longer optional for anyone who values privacy.',
    date: 'Feb 18, 2026',
    time: '8 min',
    cat: 'Privacy',
    image: '/images/blog/vpn-privacy-complete-guide.webp',
    link: '/guides/best-vpns-for-remote-workers-2026',
  },
  {
    slug: 'vpn-speed-test',
    title: 'NordVPN vs ExpressVPN vs Surfshark: Speed Test Results 2026',
    excerpt: 'We tested the top 3 VPNs across 15 server locations for speed, latency, and reliability. The results might surprise you.',
    date: 'Feb 17, 2026',
    time: '6 min',
    cat: 'Reviews',
    image: '/images/blog/vpn-speed-test-comparison.webp',
    link: '/compare/nordvpn-vs-expressvpn',
  },
  {
    slug: 'password-security',
    title: '7 Password Mistakes That Put Your Accounts at Risk',
    excerpt: 'Reusing passwords, skipping 2FA, and using weak passphrases are just the start. Here are the security mistakes almost everyone makes.',
    date: 'Feb 16, 2026',
    time: '7 min',
    cat: 'Security',
    image: '/images/blog/password-security-mistakes.webp',
    link: '/guides/best-password-managers-2026',
  },
  {
    slug: 'vpn-comparison',
    title: 'NordVPN vs ExpressVPN: We Compared 9 Categories So You Don\'t Have To',
    excerpt: 'Speed, security protocols, privacy policies, server count, price -- we spent weeks comparing both VPNs to help you decide which one deserves your money.',
    date: 'Feb 15, 2026',
    time: '11 min',
    cat: 'Comparison',
    image: '/images/blog/vpn-comparison-head-to-head.webp',
    link: '/compare/nordvpn-vs-expressvpn',
  },
  {
    slug: 'antivirus-tested',
    title: 'We Tested 12 Antivirus Programs -- Here Are the 5 Best for 2026',
    excerpt: 'From Bitdefender to Malwarebytes, we ran real-world malware tests and measured system impact. Our honest, tested rankings.',
    date: 'Feb 14, 2026',
    time: '15 min',
    cat: 'Review',
    image: '/images/blog/antivirus-software-tested-2026.webp',
    link: '/guides/best-antivirus-software-mac-2026',
  },
  {
    slug: 'data-breach-guide',
    title: 'How to Check If Your Data Was Leaked in a Breach',
    excerpt: 'Over 12 billion records were exposed in 2025. Here\'s how to check if your email, passwords, or personal data were compromised, and what to do about it.',
    date: 'Feb 12, 2026',
    time: '10 min',
    cat: 'Guide',
    image: '/images/blog/data-breach-check-guide.webp',
    link: '/guides/best-identity-theft-protection-services-2026',
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="pt-8 max-w-4xl mx-auto">
      <div className="mb-10 border-b border-surface-border pb-4">
        <h1 className="section-title">Security Brief</h1>
        <p className="text-gray-500 mt-1">Cybersecurity insights, VPN reviews, and privacy analysis</p>
      </div>

      {/* Featured Post */}
      <Link href={featured.link} className="block group mb-12">
        <div className="border border-surface-border overflow-hidden rounded-sm">
          {featured.image && (
            <div className="relative h-64 sm:h-80 overflow-hidden bg-surface-light">
              <SafeImage
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0">
                <span className="text-xs font-display font-semibold text-white bg-navy-500 px-3 py-1.5">
                  {featured.cat}
                </span>
              </div>
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-gray-400 font-display mb-3">
              <span>{featured.date}</span>
              <span>&middot;</span>
              <span>{featured.time} read</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-900 group-hover:text-navy-500 transition-colors mb-3 leading-snug">
              {featured.title}
            </h2>
            <p className="text-gray-500 leading-relaxed">{featured.excerpt}</p>
          </div>
        </div>
      </Link>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map(p => (
          <Link key={p.slug} href={p.link} className="border border-surface-border hover:shadow-md transition-shadow block group overflow-hidden rounded-sm">
            {p.image && (
              <div className="relative h-44 overflow-hidden bg-surface-light">
                <SafeImage
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0">
                  <span className="text-[10px] font-display font-semibold text-white bg-navy-500 px-2.5 py-1">
                    {p.cat}
                  </span>
                </div>
              </div>
            )}
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-display mb-2">
                <span>{p.date}</span>
                <span>&middot;</span>
                <span>{p.time} read</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 group-hover:text-navy-500 transition-colors mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 bg-navy-700 p-8 text-center text-white">
        <h3 className="font-display text-xl font-bold mb-2">Stay Protected</h3>
        <p className="text-navy-200 text-sm mb-6">New security articles and VPN deals delivered every Thursday.</p>
        <div className="text-sm text-accent font-medium">Coming soon</div>
        <p className="text-[11px] text-navy-300 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
