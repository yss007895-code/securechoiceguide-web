import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Security Comparisons 2026: VPN, Antivirus & More',
  description: 'Honest head-to-head comparisons of top VPNs, antivirus software, and privacy tools. We test each product and give you the straight answer.',
  keywords: ['vpn comparison', 'antivirus comparison', 'nordvpn vs expressvpn', 'security tool review', 'best vpn 2026'],
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: 'Security Comparisons 2026: VPN, Antivirus & More',
    description: 'Honest head-to-head comparisons of top VPNs, antivirus software, and privacy tools.',
    type: 'website',
    url: `${SITE_URL}/compare`,
    siteName: SITE_NAME,
    images: [{ url: '/images/categories/hero-security.webp', width: 1200, height: 630, alt: 'Security Tool Comparisons 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SecureChoiceG' },
};

const comparisons = [
  {
    href: '/compare/nordvpn-vs-expressvpn',
    title: 'NordVPN vs ExpressVPN',
    desc: '6 months of testing, 15 server locations. NordVPN wins on speed and price; ExpressVPN wins on router support.',
    tag: 'VPN',
    verdict: 'NordVPN wins',
  },
];

export default function ComparePage() {
  return (
    <div className="pt-12 max-w-4xl mx-auto">
      <header className="mb-10">
        <p className="text-sm text-gray-400 font-mono uppercase tracking-wide mb-3">Comparisons</p>
        <h1 className="font-body text-3xl sm:text-4xl font-bold text-white mb-4">
          Side-by-Side Security Comparisons
        </h1>
        <p className="text-lg text-gray-400">
          We test the top security tools head-to-head so you can stop reading marketing copy and just pick the right one.
        </p>
      </header>

      <div className="grid gap-5">
        {comparisons.map(c => (
          <Link key={c.href} href={c.href} className="card-hover group block p-6 rounded-2xl border border-gray-800 bg-gray-900">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="badge-new mb-2 inline-block">{c.tag}</span>
                <h2 className="font-body font-bold text-white text-xl mb-2 group-hover:text-emerald-400 transition-colors">
                  {c.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs text-gray-500 mb-1">Our pick</div>
                <div className="text-sm font-semibold text-emerald-400">{c.verdict}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-emerald-400 text-sm font-medium">
              Read comparison
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gray-900 border border-gray-800 text-center">
        <h3 className="font-body font-bold text-white mb-2">More comparisons coming soon</h3>
        <p className="text-sm text-gray-400 mb-4">
          We are currently testing Bitdefender vs Norton, 1Password vs Bitwarden, and more. Subscribe to get notified.
        </p>
        <Link href="/guides" className="btn-primary text-sm">Browse all guides</Link>
      </div>
    </div>
  );
}
