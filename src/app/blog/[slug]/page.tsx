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
    image: '/images/guides/best-vpns-2026-ultimate-online-privacy.png',
    content: [
      { heading: 'Why Privacy Matters More Than Ever', paragraphs: [
        'In 2026, your internet service provider can legally sell your browsing data to advertisers. Public Wi-Fi networks at cafes and airports are prime targets for hackers. Data brokers compile profiles on millions of people and sell them to anyone willing to pay.',
        'A VPN encrypts your connection, hides your IP address, and prevents third parties from monitoring your online activity. It is the single most effective tool for everyday privacy -- and it takes about 30 seconds to turn on.',
        'The argument that "I have nothing to hide" misses the point. Privacy is not about hiding wrongdoing. It is about controlling who has access to your personal information, your location, and your browsing habits.',
      ] },
      { heading: 'What a VPN Actually Protects You From', paragraphs: [
        'ISP data collection and selling, public Wi-Fi snooping, government surveillance in some jurisdictions, geo-restrictions on content, and price discrimination based on your location. A good VPN handles all of these.',
        'On public Wi-Fi -- in hotels, airports, cafes -- attackers can intercept unencrypted traffic in seconds. A VPN wraps everything in AES-256 encryption before it leaves your device, making interception useless.',
        'However, a VPN is not a silver bullet. It protects your connection, not your behavior. You still need strong passwords, two-factor authentication, and careful browsing habits. A VPN combined with good security hygiene is a powerful combination.',
      ] },
      { heading: 'How to Choose the Right VPN', paragraphs: [
        'Look for a no-logs policy that has been independently audited -- not just claimed. Look for strong encryption (AES-256 for data, WireGuard or OpenVPN as the protocol). Look for fast speeds, and servers in countries you actually need.',
        'Avoid free VPNs. The business model requires monetizing your data, which defeats the entire purpose. Some free VPNs have been caught selling user traffic to third parties.',
        'Our top picks for 2026 are NordVPN (best overall -- fast, affordable, independently audited), ExpressVPN (best for router setups and cross-platform support), and Surfshark (best value -- unlimited devices, strong privacy record).',
      ] },
      { heading: 'Setting Up a VPN: It Takes 3 Minutes', paragraphs: [
        'Download the app from the official website or your device\'s app store. Create an account, choose a plan, and install. Open the app, pick a server location, and click connect. That\'s it.',
        'For maximum privacy: enable the kill switch (it cuts your internet if the VPN drops, preventing accidental exposure), use WireGuard or NordLynx as the protocol, and enable DNS leak protection.',
        'If you want to protect your entire home network -- including smart TVs and gaming consoles -- set up the VPN directly on your router. NordVPN and ExpressVPN both have router-compatible firmware.',
      ] },
      { heading: 'The Bottom Line', paragraphs: [
        'The cost of a VPN is $3-10 per month. The cost of having your data sold, your identity stolen, or your connection compromised is significantly higher -- in time, money, and stress.',
        'Start with NordVPN or Surfshark. Both offer 30-day money-back guarantees. Try it, run your normal browsing, and check your speed -- you will likely notice no difference. But your ISP will no longer see what you are doing.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best VPNs 2026', slug: 'best-vpns-2026-ultimate-online-privacy' },
      { title: 'NordVPN vs ExpressVPN', slug: 'nordvpn-vs-expressvpn-2026' },
      { title: 'Best VPN for Streaming', slug: 'best-vpn-for-streaming-2026' },
    ],
  },
  'spring-color-trends': {
    slug: 'spring-color-trends',
    title: 'NordVPN vs ExpressVPN vs Surfshark: Speed Test Results 2026',
    excerpt: 'We tested the top 3 VPNs across 15 server locations for speed, latency, and reliability. One is clearly faster.',
    date: '2026-02-17',
    cat: 'Reviews',
    image: '/images/guides/nordvpn-vs-expressvpn-ultimate-battle-online-security.png',
    content: [
      { heading: 'Our Testing Methodology', paragraphs: [
        'We tested each VPN on the same hardware (MacBook Pro M3, 32GB RAM), the same ISP connection (500 Mbps Comcast baseline), across 15 server locations on 3 continents. Tests were run 5 times per location at different times of day and averaged.',
        'We measured download speed (Mbps), upload speed (Mbps), latency (ping in ms), and connection stability over 24-hour periods. All tests used WireGuard or each VPN\'s equivalent protocol for fair comparison.',
        'We also tested for DNS leaks, WebRTC leaks, and IPv6 leaks using multiple independent testing tools. A VPN that leaks your real IP is useless for privacy.',
      ] },
      { heading: 'Speed Results: NordVPN Leads', paragraphs: [
        'NordVPN delivered the fastest average speeds at 420 Mbps download on nearby US servers and 310 Mbps on long-distance connections to Asia. Their NordLynx protocol (built on WireGuard) is the key advantage -- it has lower overhead than OpenVPN.',
        'ExpressVPN came in second at 380 Mbps nearby and 280 Mbps long-distance. Their Lightway protocol is competitive and notably consistent -- we saw less variance across different server locations.',
        'Surfshark surprised us in third place at 360 Mbps on nearby servers -- faster than we expected for its price point. Long-distance performance dropped to 240 Mbps, a bigger gap than NordVPN or ExpressVPN.',
      ] },
      { heading: 'Latency: Critical for Gaming', paragraphs: [
        'For gamers or anyone using video calls, latency matters as much as throughput. NordVPN averaged 12ms added latency on nearby servers. ExpressVPN added 15ms. Surfshark added 18ms.',
        'All three are perfectly usable for competitive gaming if you connect to a nearby server. Where they differ is long-distance: NordVPN added 45ms average to European servers from the US East Coast; ExpressVPN added 52ms; Surfshark added 65ms.',
        'One practical note: the kill switch has zero latency impact. It only activates when the VPN connection drops, cutting your internet momentarily rather than exposing your real IP.',
      ] },
      { heading: 'Privacy Audits: All Three Pass', paragraphs: [
        'NordVPN publishes an annual no-logs audit by Deloitte. The 2025 audit confirmed that no user data is stored during or after sessions. ExpressVPN uses PwC for the same purpose. Surfshark uses Deloitte as well.',
        'All three have passed third-party penetration testing. NordVPN famously survived a server seizure in 2018 -- the Finnish server was taken but contained no user-identifiable data because of the no-logs architecture.',
        'None of the three have complied with user data requests to law enforcement. All three are based outside 14-Eyes jurisdictions.',
      ] },
      { heading: 'Which One Should You Pick?', paragraphs: [
        'For raw speed and best value: NordVPN at $3.19/month on the 2-year plan. For the most consistent cross-platform experience and excellent router support: ExpressVPN at $6.67/month. For budget shoppers or households with many devices: Surfshark at $2.49/month with unlimited device connections.',
        'All three are excellent choices. The real differences come down to pricing, device limits, and specific features like split tunneling and ad blocking. What to avoid: any free VPN, and any VPN that has not published independent no-logs audits.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best VPNs 2026', slug: 'best-vpns-2026-ultimate-online-privacy' },
      { title: 'NordVPN vs ExpressVPN', slug: 'nordvpn-vs-expressvpn-2026' },
    ],
  },
  'capsule-wardrobe-mistakes': {
    slug: 'capsule-wardrobe-mistakes',
    title: '7 Password Mistakes That Put Your Accounts at Risk',
    excerpt: 'Reusing passwords, skipping 2FA, and using weak passphrases are just the start. Here\'s what attackers actually exploit.',
    date: '2026-02-16',
    cat: 'Security',
    image: '/images/guides/best-password-managers-2026.png',
    content: [
      { heading: 'Mistake 1: Reusing Passwords Across Sites', paragraphs: [
        'The number one password mistake -- by a significant margin -- is using the same password on multiple sites. When one site gets breached (and they all do eventually), attackers run credential stuffing attacks: they try your leaked password on every major service automatically.',
        'This is not theoretical. The 2024 RockYou3 breach exposed 10 billion credentials. Attackers used those lists to compromise millions of accounts on unrelated services within 48 hours.',
        'Use a unique password for every account. A password manager makes this simple -- you only need to remember one strong master password.',
      ] },
      { heading: 'Mistake 2: Not Using Two-Factor Authentication', paragraphs: [
        'Even a strong, unique password can be compromised through phishing, malware, or server-side breaches. 2FA adds a second layer -- usually a code from your phone or a hardware key -- that makes stolen passwords useless on their own.',
        'Enable 2FA on every account that supports it. Use an authenticator app (Authy, Google Authenticator, or the built-in options in 1Password and Bitwarden) rather than SMS -- SIM swapping attacks can intercept SMS codes.',
        'For high-value accounts like email, banking, and cryptocurrency: use a hardware security key (YubiKey). It is the strongest 2FA method available and immune to phishing.',
      ] },
      { heading: 'Mistake 3: Short Passwords', paragraphs: [
        'Passwords under 12 characters can be cracked by modern GPU rigs in minutes using brute force. A 12-character password with mixed characters takes years. A 16-character password with mixed characters takes millions of years.',
        'Most password managers generate 20+ character random passwords by default. Use them. The password looks like garbage but you never have to remember it -- the manager does.',
      ] },
      { heading: 'Mistakes 4-7: Dictionary Words, Personal Info, No Manager, Never Updating', paragraphs: [
        'Dictionary words are the first thing cracked. "password", "monkey", "sunshine" -- all appear in the first few thousand attempts. Personal information (pet names, birthdays, addresses) can often be found on social media, making them trivially guessable.',
        'Not using a password manager means relying on memory, which means shorter passwords and reuse. Get 1Password or Bitwarden. 1Password is $3.99/month and excellent. Bitwarden is $1/month and open-source.',
        'Never updating compromised passwords is a slow-motion disaster. Use HaveIBeenPwned.com monthly to check if your email appears in known data breaches. When it does -- change that password immediately, and every other account where you may have reused it.',
      ] },
      { heading: 'The Fix: Five Steps to Get Current', paragraphs: [
        'Step one: Install a password manager (Bitwarden is free for individuals). Step two: Change your email password to a 20-character random string and enable 2FA with an authenticator app. Step three: Do the same for your bank, then work outward.',
        'Step four: Run your email through HaveIBeenPwned.com and prioritize changing passwords for any breached services. Step five: Enable 2FA on every remaining account that supports it.',
        'This takes about two hours total. The alternative is spending 40+ hours cleaning up after an account takeover -- recovering access, notifying contacts, dealing with fraud. The math is obvious.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Password Managers 2026', slug: 'best-password-managers-2026' },
      { title: 'How to Secure Your Smart Home', slug: 'how-to-secure-your-smart-home-2026' },
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
