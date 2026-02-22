import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cat: string;
  image: string;
  content: { heading: string; paragraphs: string[] }[];
  relatedGuides: { title: string; slug: string }[];
}

const blogPosts: Record<string, BlogPost> = {
  'quiet-luxury-guide': {
    slug: 'quiet-luxury-guide',
    title: 'Why You Need a VPN in 2026: The Complete Privacy Case',
    excerpt: 'ISPs selling your data, public Wi-Fi risks, and government surveillance are all real threats. Here\'s why a VPN is no longer optional.',
    date: '2026-02-18',
    cat: 'Privacy',
    image: '/images/blog/quiet-luxury-guide.svg',
    content: [
      { heading: 'Why Privacy Matters More Than Ever', paragraphs: [
        'In 2026, your internet service provider can legally sell your browsing data to advertisers. Public Wi-Fi networks at cafes and airports are prime targets for hackers. And data breaches expose billions of records every year.',
        'A VPN encrypts your connection, hides your IP address, and prevents third parties from monitoring your online activity. It is the single most effective tool for everyday privacy.',
      ] },
      { heading: 'What a VPN Actually Protects You From', paragraphs: [
        'ISP data collection and selling, public Wi-Fi snooping, government surveillance, geo-restrictions, and price discrimination based on location. A good VPN handles all of these.',
        'However, a VPN does not make you anonymous. It protects your connection, not your behavior. You still need good password hygiene, 2FA, and careful browsing habits.',
      ] },
      { heading: 'How to Choose the Right VPN', paragraphs: [
        'Look for a no-logs policy (independently audited), strong encryption (AES-256 or WireGuard), fast speeds, and servers in locations you need. Avoid free VPNs -- they monetize your data.',
        'Our top picks for 2026 are NordVPN (best overall), ExpressVPN (best speed), and Surfshark (best value). Each has been independently audited and tested by our team.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best VPNs 2026', slug: 'best-vpns-2026-ultimate-online-privacy' },
      { title: 'NordVPN vs ExpressVPN', slug: 'nordvpn-vs-expressvpn-ultimate-battle-online-security' },
      { title: 'Online Privacy Guide', slug: 'complete-online-privacy-guide-2026' },
    ],
  },
  'spring-color-trends': {
    slug: 'spring-color-trends',
    title: 'NordVPN vs ExpressVPN vs Surfshark: Speed Test Results 2026',
    excerpt: 'We tested the top 3 VPNs across 15 server locations for speed, latency, and reliability.',
    date: '2026-02-17',
    cat: 'Reviews',
    image: '/images/blog/spring-color-trends.svg',
    content: [
      { heading: 'Our Testing Methodology', paragraphs: [
        'We tested each VPN on the same hardware, same ISP connection (500 Mbps baseline), across 15 server locations on 3 continents. Tests were run 5 times per location and averaged.',
        'We measured download speed, upload speed, latency (ping), and connection stability over 24-hour periods.',
      ] },
      { heading: 'Speed Results: NordVPN Leads', paragraphs: [
        'NordVPN delivered the fastest average speeds at 420 Mbps download on nearby servers and 310 Mbps on long-distance connections. Their NordLynx protocol (based on WireGuard) is the key advantage.',
        'ExpressVPN came in second at 380 Mbps nearby and 280 Mbps long-distance. Surfshark was close behind at 360 Mbps and 260 Mbps respectively.',
      ] },
      { heading: 'Which One Should You Pick?', paragraphs: [
        'For raw speed: NordVPN. For the most consistent experience across devices: ExpressVPN. For the best value (unlimited devices): Surfshark.',
        'All three are excellent choices. The real differences come down to pricing, device limits, and specific features like split tunneling and ad blocking.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best VPNs 2026', slug: 'best-vpns-2026-ultimate-online-privacy' },
      { title: 'NordVPN vs ExpressVPN', slug: 'nordvpn-vs-expressvpn-ultimate-battle-online-security' },
    ],
  },
  'capsule-wardrobe-mistakes': {
    slug: 'capsule-wardrobe-mistakes',
    title: '7 Password Mistakes That Put Your Accounts at Risk',
    excerpt: 'Reusing passwords, skipping 2FA, and using weak passphrases are just the start.',
    date: '2026-02-16',
    cat: 'Security',
    image: '/images/blog/capsule-wardrobe-mistakes.svg',
    content: [
      { heading: 'Mistake 1: Reusing Passwords Across Sites', paragraphs: [
        'The number one password mistake is using the same password on multiple sites. When one site gets breached (and they all do eventually), attackers try that password on every other service.',
        'Use a unique password for every account. A password manager makes this easy -- you only need to remember one master password.',
      ] },
      { heading: 'Mistake 2: Not Using Two-Factor Authentication', paragraphs: [
        'Even a strong password can be compromised through phishing or data breaches. 2FA adds a second layer -- usually a code from your phone -- that makes stolen passwords useless.',
        'Enable 2FA on every account that supports it. Use an authenticator app (like Authy or Google Authenticator) rather than SMS, which can be intercepted.',
      ] },
      { heading: 'Mistakes 3-7: Weak Passwords, No Manager, and More', paragraphs: [
        'Short passwords (under 12 characters), dictionary words, personal information (birthdays, pet names), not using a password manager, and never updating compromised passwords round out the top 7.',
        'The fix is simple: get a password manager (we recommend 1Password or Bitwarden), generate unique 16+ character passwords for everything, and enable 2FA everywhere.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Password Managers 2026', slug: 'best-password-managers-2026' },
      { title: 'Online Privacy Guide', slug: 'complete-online-privacy-guide-2026' },
    ],
  },
};

const allSlugs = Object.keys(blogPosts);

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630 }],
      siteName: SITE_NAME,
    },
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) notFound();

  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-emerald-400">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-emerald-400">Blog</Link>
        <span>/</span>
        <span className="text-gray-300">{post.cat}</span>
      </nav>

      <header className="mb-8">
        <span className="badge-new mb-3 inline-block">{post.cat}</span>
        <h1 className="font-body text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
        <p className="text-lg text-gray-400 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
          <span>By SecureChoiceGuide Team</span>
          <span>-</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </header>

      <div className="mb-8 rounded-2xl overflow-hidden relative h-64 sm:h-80">
        <SafeImage src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
      </div>

      <div className="prose-style">
        {post.content.map((section, idx) => (
          <div key={idx}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        ))}
      </div>

      {post.relatedGuides.length > 0 && (
        <div className="mt-10 mb-8">
          <h3 className="font-body font-bold text-white mb-4">Related Reviews</h3>
          <div className="grid gap-3">
            {post.relatedGuides.map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card-hover p-4 flex items-center gap-4 group">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-300 group-hover:text-emerald-400 transition-colors">{g.title}</p>
                </div>
                <span className="text-gray-500 text-sm">View review</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <NewsletterCTA />
    </article>
  );
}
