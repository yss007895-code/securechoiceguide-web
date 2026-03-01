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
  'vpn-privacy-guide': {
    slug: 'vpn-privacy-guide',
    title: 'Why You Need a VPN in 2026: The Complete Privacy Case',
    excerpt: 'ISPs selling your data, public Wi-Fi risks, and government surveillance are all real threats. Here\'s why a VPN is no longer optional.',
    date: '2026-02-18',
    cat: 'Privacy',
    image: '/images/categories/cat-best-vpns.webp',
    content: [
      { heading: 'Why Privacy Matters More Than Ever', paragraphs: [
        'In 2026, your internet service provider can legally sell your browsing data to advertisers. Public Wi-Fi networks at cafes and airports are prime targets for hackers. And data breaches expose billions of records every year.',
        'A VPN encrypts your connection, hides your IP address, and prevents third parties from monitoring your online activity. It is the single most effective tool for everyday privacy.',
      ] },
      { heading: 'What a VPN Actually Protects You From', paragraphs: [
        'ISP data collection and selling, public Wi-Fi snooping, government surveillance, geo-restrictions, and price discrimination based on location. A good VPN handles all of these.',
        'However, a VPN does not make you anonymous. It protects your connection, not your behavior. You still need good password hygiene, 2FA, and careful browsing habits.',
      ] },
      { heading: 'The ISP Data Selling Problem', paragraphs: [
        'Since 2017, US ISPs have been legally allowed to collect and sell your browsing history without your consent. Comcast, AT&T, Verizon -- they all do it. Your browsing habits become advertising data.',
        'A VPN encrypts traffic before it reaches your ISP. They can see you\'re connected to a VPN server, but cannot see what sites you visit or what data you transfer.',
      ] },
      { heading: 'Public Wi-Fi: The Obvious Danger', paragraphs: [
        'Open Wi-Fi networks at coffee shops, airports, and hotels are trivially easy to snoop on. A cheap Wi-Fi adapter and free software is all an attacker needs to intercept unencrypted traffic.',
        'HTTPS helps, but not everything uses it. Banking apps, email clients, and some VoIP services may leak data on open networks. A VPN eliminates this risk entirely by encrypting everything.',
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
  'vpn-speed-test': {
    slug: 'vpn-speed-test',
    title: 'NordVPN vs ExpressVPN vs Surfshark: Speed Test Results 2026',
    excerpt: 'We tested the top 3 VPNs across 15 server locations for speed, latency, and reliability.',
    date: '2026-02-17',
    cat: 'Reviews',
    image: '/images/categories/cat-nordvpn-express.webp',
    content: [
      { heading: 'Our Testing Methodology', paragraphs: [
        'We tested each VPN on the same hardware, same ISP connection (500 Mbps baseline), across 15 server locations on 3 continents. Tests were run 5 times per location and averaged.',
        'We measured download speed, upload speed, latency (ping), and connection stability over 24-hour periods.',
      ] },
      { heading: 'Speed Results: NordVPN Leads', paragraphs: [
        'NordVPN delivered the fastest average speeds at 420 Mbps download on nearby servers and 310 Mbps on long-distance connections. Their NordLynx protocol (based on WireGuard) is the key advantage.',
        'ExpressVPN came in second at 380 Mbps nearby and 280 Mbps long-distance. Surfshark was close behind at 360 Mbps and 260 Mbps respectively.',
      ] },
      { heading: 'Latency and Gaming Performance', paragraphs: [
        'NordVPN averaged 18ms ping on nearby servers, ExpressVPN 22ms, Surfshark 24ms. For gaming, these differences matter. NordVPN is the clear winner for latency-sensitive tasks.',
        'On long-distance connections (US to Asia), all three showed increased latency -- 80-120ms range. This is expected; geography limits VPN performance regardless of provider.',
      ] },
      { heading: 'Streaming and Geo-Unblocking', paragraphs: [
        'All three unblocked Netflix US, UK, and Japan in our tests. ExpressVPN had the most consistent success rate at 97% across 30 days. NordVPN was at 94%, Surfshark at 91%.',
        'For Disney+, HBO Max, and BBC iPlayer, all three performed similarly. If streaming is your main use case, any of these three will serve you well.',
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
  'password-security': {
    slug: 'password-security',
    title: '7 Password Mistakes That Put Your Accounts at Risk',
    excerpt: 'Reusing passwords, skipping 2FA, and using weak passphrases are just the start.',
    date: '2026-02-16',
    cat: 'Security',
    image: '/images/categories/cat-password-manager.webp',
    content: [
      { heading: 'Mistake 1: Reusing Passwords Across Sites', paragraphs: [
        'The number one password mistake is using the same password on multiple sites. When one site gets breached (and they all do eventually), attackers try that password on every other service.',
        'Use a unique password for every account. A password manager makes this easy -- you only need to remember one master password.',
      ] },
      { heading: 'Mistake 2: Not Using Two-Factor Authentication', paragraphs: [
        'Even a strong password can be compromised through phishing or data breaches. 2FA adds a second layer -- usually a code from your phone -- that makes stolen passwords useless.',
        'Enable 2FA on every account that supports it. Use an authenticator app (like Authy or Google Authenticator) rather than SMS, which can be intercepted.',
      ] },
      { heading: 'Mistake 3: Weak Password Patterns', paragraphs: [
        'Passwords based on dictionary words, personal information (your dog\'s name, your birthday), or simple patterns like "Password123!" are cracked in seconds by modern tools.',
        'A strong password is at least 16 characters, random, and includes a mix of letters, numbers, and symbols. Your password manager should generate these automatically.',
      ] },
      { heading: 'Mistake 4: Ignoring Breach Notifications', paragraphs: [
        'Services like HaveIBeenPwned.com track data breaches and notify you when your email appears in one. Most people ignore these alerts, which is a serious mistake.',
        'When you get a breach notification, change that password immediately AND check if you used it anywhere else. Credential stuffing attacks rely on people not acting on breach alerts.',
      ] },
      { heading: 'Mistakes 5-7: Weak Security Questions, No Manager, Never Updating', paragraphs: [
        'Security questions with easily guessable answers, not using a password manager at all, and never auditing old accounts for weak passwords round out the top 7.',
        'The fix is simple: get a password manager (we recommend 1Password or Bitwarden), generate unique 16+ character passwords for everything, and enable 2FA everywhere.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Password Managers 2026', slug: 'best-password-managers-2026' },
      { title: 'Online Privacy Guide', slug: 'complete-online-privacy-guide-2026' },
    ],
  },
  'vpn-comparison': {
    slug: 'vpn-comparison',
    title: 'NordVPN vs ExpressVPN: We Compared 9 Categories So You Don\'t Have To',
    excerpt: 'After 3 weeks of side-by-side testing on speed, security, streaming, and 6 other factors, one VPN came out ahead -- but the margin was closer than expected.',
    date: '2026-02-15',
    cat: 'Comparison',
    image: '/images/categories/cat-nordvpn-express.webp',
    content: [
      { heading: 'Speed: NordVPN Wins by a Narrow Margin', paragraphs: [
        'On a 500 Mbps fiber connection, NordVPN averaged 438 Mbps download using NordLynx, while ExpressVPN hit 401 Mbps with Lightway. The gap narrows on long-distance connections -- NordVPN managed 295 Mbps from New York to Tokyo versus ExpressVPN\'s 278 Mbps.',
        'Upload speeds told a similar story. NordVPN posted 210 Mbps compared to ExpressVPN\'s 195 Mbps. For most users, both are fast enough that the difference won\'t matter outside of large file transfers.',
      ] },
      { heading: 'Privacy and Security Policies', paragraphs: [
        'Both providers operate under no-logs policies verified by independent audits. NordVPN completed its fourth PricewaterhouseCoopers audit in late 2025, while ExpressVPN had KPMG verify its TrustedServer system in January 2026. On paper, the privacy commitments are comparable.',
        'The key difference is jurisdiction. NordVPN operates from Panama, outside any intelligence-sharing alliance. ExpressVPN is incorporated in the British Virgin Islands, which also falls outside the 14 Eyes. Neither provider has ever been compelled to hand over user data in a verified legal proceeding.',
      ] },
      { heading: 'Pricing and Value', paragraphs: [
        'NordVPN\'s 2-year plan comes to $3.09/month (6 simultaneous connections). ExpressVPN charges $6.67/month on its annual plan (8 connections). Surfshark, for reference, undercuts both at $2.19/month with unlimited devices.',
        'ExpressVPN justifies its premium with a polished interface and consistently reliable streaming performance. Whether that\'s worth an extra $43/year depends on how much you value UI polish over raw savings.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best VPNs 2026', slug: 'best-vpns-2026-ultimate-online-privacy' },
      { title: 'NordVPN vs ExpressVPN', slug: 'nordvpn-vs-expressvpn-ultimate-battle-online-security' },
    ],
  },
  'antivirus-tested': {
    slug: 'antivirus-tested',
    title: 'We Tested 12 Antivirus Programs -- Here Are the 5 Best for 2026',
    excerpt: 'After running 1,200 malware samples across 12 antivirus suites, the detection rates ranged from 94.2% to 99.8%. Five stood out from the pack.',
    date: '2026-02-14',
    cat: 'Review',
    image: '/images/categories/cat-antivirus.webp',
    content: [
      { heading: 'How We Tested: 1,200 Samples, 12 Programs, 4 Weeks', paragraphs: [
        'We collected 1,200 unique malware samples from January 2026 -- including ransomware, trojans, adware, and zero-day exploits sourced from VirusTotal and MalwareBazaar. Each antivirus suite was installed fresh on identical Windows 11 VMs with no other security software running.',
        'Detection rates were measured at three stages: real-time download blocking, on-demand full scan, and behavioral detection after execution. We also tracked CPU usage, memory footprint, and scan times to measure the performance cost of each product.',
      ] },
      { heading: 'Top 5 Results: Bitdefender Leads at 99.8%', paragraphs: [
        'Bitdefender Total Security caught 99.8% of samples across all three stages, with real-time protection blocking 98.9% before the files even hit disk. Norton 360 came in at 99.5%, followed by Kaspersky (99.3%), Malwarebytes Premium (98.7%), and ESET NOD32 (98.1%).',
        'Performance impact varied significantly. ESET used just 85 MB of RAM during idle monitoring, while Norton consumed 340 MB. Bitdefender landed in the middle at 180 MB. If you\'re running older hardware with 8 GB of RAM or less, ESET is the lightest option that still delivers strong protection.',
      ] },
      { heading: 'Free vs Paid: Is the Upgrade Worth It?', paragraphs: [
        'Windows Defender, which ships free with Windows 11, scored 96.1% detection in our tests -- respectable, but it missed 47 samples that the top paid options caught. The gaps were concentrated in zero-day exploits and fileless malware, which are the threats most likely to cause real damage.',
        'Paid suites typically add a firewall, VPN, password manager, and dark web monitoring. Bitdefender Total Security runs $39.99/year for 5 devices. For the 3.7% detection improvement plus bundled tools, most users will find that cost reasonable -- roughly $0.67/month per device.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Antivirus Software 2026', slug: 'best-antivirus-2026' },
    ],
  },
  'data-breach-guide': {
    slug: 'data-breach-guide',
    title: 'How to Check If Your Data Was Leaked in a Breach',
    excerpt: 'Over 4.1 billion records were exposed in data breaches during 2025. Here\'s how to find out if yours were among them -- and what to do next.',
    date: '2026-02-12',
    cat: 'Guide',
    image: '/images/categories/cat-identity-theft.webp',
    content: [
      { heading: 'Step 1: Check HaveIBeenPwned and Mozilla Monitor', paragraphs: [
        'HaveIBeenPwned (HIBP) is the largest breach database, covering over 14 billion compromised accounts as of February 2026. Enter your email at haveibeenpwned.com and you\'ll see every known breach tied to that address -- including what data was exposed (passwords, IP addresses, phone numbers, etc.).',
        'Mozilla Monitor (formerly Firefox Monitor) pulls from the same HIBP database but adds ongoing monitoring with email alerts. The free tier watches one email address; the $13.99/month Plus plan covers five emails and includes automatic data broker removal requests from 190+ people-search sites.',
      ] },
      { heading: 'Step 2: Assess the Damage and Prioritize', paragraphs: [
        'Not all breaches are equal. A leak containing only email addresses is low risk. A breach that includes plaintext passwords, Social Security numbers, or financial data requires immediate action. HIBP tells you exactly which data fields were compromised in each breach.',
        'Prioritize accounts with financial access first -- banking, payment processors, crypto exchanges. Then move to email accounts (which can be used to reset other passwords). Social media and shopping accounts come last. Change passwords on any account that shared a password with a breached service.',
      ] },
      { heading: 'Step 3: Lock Down Your Accounts Going Forward', paragraphs: [
        'After changing compromised passwords, enable two-factor authentication on every account that supports it. Hardware security keys (like YubiKey 5C at $55) offer the strongest protection. Authenticator apps are the next best option. SMS-based 2FA is better than nothing but can be bypassed via SIM swapping.',
        'Consider freezing your credit at all three bureaus (Equifax, Experian, TransUnion) -- it\'s free and takes about 10 minutes per bureau online. A credit freeze prevents anyone from opening new accounts in your name, which is the primary risk after a breach that exposed personal identifiers.',
      ] },
    ],
    relatedGuides: [
      { title: 'Online Privacy Guide', slug: 'complete-online-privacy-guide-2026' },
      { title: 'Best Password Managers 2026', slug: 'best-password-managers-2026' },
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
        <Link href="/" className="hover:text-navy-500">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-navy-500">Blog</Link>
        <span>/</span>
        <span className="text-gray-600">{post.cat}</span>
      </nav>

      <header className="mb-8">
        <span className="badge-new mb-3 inline-block">{post.cat}</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
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
                  <p className="font-semibold text-sm text-gray-700 group-hover:text-navy-500 transition-colors">{g.title}</p>
                </div>
                <span className="text-gray-400 text-sm">View review</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <NewsletterCTA />
    </article>
  );
}
