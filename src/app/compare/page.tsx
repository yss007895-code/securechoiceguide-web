import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VPN Comparisons 2026: Head-to-Head Reviews | SecureChoiceGuide',
  description: 'Side-by-side VPN and security tool comparisons with real test data. Speed benchmarks, privacy audits, and price breakdowns to help you choose.',
};

const comparisons = [
  {
    slug: 'nordvpn-vs-expressvpn',
    title: 'NordVPN vs ExpressVPN',
    subtitle: 'Speed, privacy, and price -- which wins in 2026?',
    verdict: 'NordVPN wins',
    tags: ['VPN', 'Privacy'],
  },
  {
    slug: 'surfshark-vs-nordvpn',
    title: 'Surfshark vs NordVPN',
    subtitle: 'Unlimited devices vs top-tier speed and server network',
    verdict: 'NordVPN edges ahead',
    tags: ['VPN', 'Privacy'],
  },
  {
    slug: 'bitdefender-vs-norton',
    title: 'Bitdefender vs Norton',
    subtitle: 'Which antivirus catches more threats with less system impact?',
    verdict: 'Bitdefender wins',
    tags: ['Antivirus', 'Security'],
  },
  {
    slug: '1password-vs-lastpass',
    title: '1Password vs LastPass',
    subtitle: 'After the LastPass breach, which password manager should you trust?',
    verdict: '1Password wins',
    tags: ['Password Manager', 'Privacy'],
  },
];

export default function ComparePage() {
  return (
    <div className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-emerald-400">Home</Link>
        <span>/</span>
        <span className="text-gray-300">Compare</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-body text-3xl sm:text-4xl font-bold text-white mb-3">
          VPN Head-to-Head Comparisons
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Real test data. No paid placements. Just honest breakdowns of which security tools actually win.
        </p>
      </header>

      <div className="grid gap-4">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className="card-hover p-6 flex items-center justify-between group"
          >
            <div>
              <div className="flex gap-2 mb-2">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-800">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-body font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                {c.title}
              </h2>
              <p className="text-sm text-gray-400 mt-1">{c.subtitle}</p>
            </div>
            <div className="text-right ml-4 shrink-0">
              <span className="text-xs text-emerald-400 font-semibold">{c.verdict}</span>
              <p className="text-gray-500 text-sm mt-1">Read comparison</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
