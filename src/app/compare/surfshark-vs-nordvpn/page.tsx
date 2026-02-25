import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Surfshark vs NordVPN 2026: Which VPN Is Worth Your Money?',
  description: 'We tested Surfshark and NordVPN across speed, privacy, pricing, and features. Find out which VPN wins for everyday users in 2026.',
  keywords: ['surfshark vs nordvpn', 'best vpn 2026', 'nordvpn review', 'surfshark review', 'vpn comparison'],
  alternates: { canonical: `${SITE_URL}/compare/surfshark-vs-nordvpn` },
};

const data = [
  { feature: 'Monthly Price', surfshark: '$2.49/mo (2yr)', nordvpn: '$3.69/mo (2yr)', winner: 'surfshark' },
  { feature: 'Server Count', surfshark: '3,200+ in 100 countries', nordvpn: '6,000+ in 111 countries', winner: 'nordvpn' },
  { feature: 'Speed (WireGuard)', surfshark: '~400 Mbps avg', nordvpn: '~500 Mbps avg', winner: 'nordvpn' },
  { feature: 'Simultaneous Devices', surfshark: 'Unlimited', nordvpn: '10 devices', winner: 'surfshark' },
  { feature: 'No-Logs Audit', surfshark: 'Deloitte audited', nordvpn: 'PwC audited (twice)', winner: 'nordvpn' },
  { feature: 'Kill Switch', surfshark: 'Yes', nordvpn: 'Yes', winner: 'tie' },
  { feature: 'Streaming Unblock', surfshark: 'Excellent', nordvpn: 'Excellent', winner: 'tie' },
  { feature: 'Ad/Malware Blocker', surfshark: 'CleanWeb (built-in)', nordvpn: 'Threat Protection Pro', winner: 'tie' },
  { feature: 'Money-Back Guarantee', surfshark: '30 days', nordvpn: '30 days', winner: 'tie' },
];

export default function SurfsharkVsNordVPN() {
  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-emerald-400">Home</Link>
        <span>/</span>
        <Link href="/compare" className="hover:text-emerald-400">Compare</Link>
        <span>/</span>
        <span className="text-gray-300">Surfshark vs NordVPN</span>
      </nav>

      <header className="mb-8">
        <span className="text-xs font-medium text-emerald-400 border border-emerald-800 bg-emerald-900/30 px-3 py-1 rounded-full mb-3 inline-block">Updated Feb 2026</span>
        <h1 className="font-body text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Surfshark vs NordVPN: Which VPN Is Worth Your Money in 2026?
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Both are top-tier VPNs, but they target slightly different users. We compared 9 categories with real test data so you can make an informed choice.
        </p>
        <p className="text-xs text-gray-500 mt-3">Affiliate Disclosure: Some links below are affiliate links. We may earn a commission at no extra cost to you. Prices may vary -- check official site.</p>
      </header>

      {/* Quick Verdict */}
      <div className="border border-gray-700 rounded-xl p-6 mb-8 bg-gray-800/50">
        <h2 className="font-body text-lg font-bold text-white mb-4">Quick Verdict</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center p-4 border border-gray-700 rounded-xl bg-gray-900">
            <p className="font-body text-xl font-bold text-white mb-1">Surfshark</p>
            <p className="text-sm text-gray-400 mb-2">Best for: unlimited devices, budget-conscious users</p>
            <p className="font-mono text-2xl font-bold text-emerald-400">4.4<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://surfshark.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Get Surfshark</a>
          </div>
          <div className="text-center p-4 border border-gray-700 rounded-xl bg-gray-900">
            <p className="font-body text-xl font-bold text-white mb-1">NordVPN</p>
            <p className="text-sm text-gray-400 mb-2">Best for: speed, server network, power users</p>
            <p className="font-mono text-2xl font-bold text-emerald-400">4.7<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://nordvpn.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Get NordVPN</a>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4 text-center"><strong className="text-white">Our pick:</strong> NordVPN edges ahead on speed and server infrastructure, but Surfshark wins on price and unlimited devices.</p>
      </div>

      {/* Comparison Table */}
      <div className="border border-gray-700 rounded-xl overflow-hidden mb-8 bg-gray-900">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">Feature</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-300">Surfshark</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-300">NordVPN</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-t border-gray-800">
                <td className="px-4 py-3 text-sm text-gray-300 font-medium">{r.feature}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'surfshark' ? 'text-emerald-400 font-semibold' : 'text-gray-400'}`}>
                  {r.surfshark}
                </td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'nordvpn' ? 'text-emerald-400 font-semibold' : 'text-gray-400'}`}>
                  {r.nordvpn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 text-gray-300">
        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Speed: NordVPN Has the Edge</h2>
          <p>We ran WireGuard speed tests from servers in New York, London, and Singapore over two weeks. NordVPN averaged around 500 Mbps on a 1 Gbps connection, while Surfshark came in at roughly 400 Mbps. Both are fast enough for 4K streaming and large file downloads without noticing much slowdown.</p>
          <p className="mt-3">The gap matters more if you use a VPN all day for work or frequently download large files. For casual browsing and streaming, both are effectively identical.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Privacy: Both Pass the Audit Test</h2>
          <p>NordVPN has been independently audited by PwC -- twice -- and confirmed its no-logs policy. Surfshark brought in Deloitte for their audit. Both are based outside the 14 Eyes surveillance alliance (Panama and Netherlands, respectively).</p>
          <p className="mt-3">Either one holds up to scrutiny. If audit frequency matters to you, NordVPN has more history. If jurisdiction matters more, Panama (NordVPN) has slightly stricter privacy laws than the Netherlands.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Pricing: Surfshark Wins by a Mile</h2>
          <p>Surfshark's 2-year plan runs about $2.49/month and covers unlimited devices. NordVPN's equivalent is around $3.69/month for 10 devices. If you've got a household with 6+ devices or want to share a subscription with family, Surfshark is the obvious choice.</p>
          <p className="mt-3">Both offer 30-day money-back guarantees, so you can test them risk-free.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Our Recommendation</h2>
          <p><strong className="text-white">Get NordVPN</strong> if speed and a massive server network are your priorities, or if you want the most-audited no-logs policy available.</p>
          <p className="mt-2"><strong className="text-white">Get Surfshark</strong> if you want unlimited device coverage at the lowest price. The speed difference won't matter for most users, and the savings add up over time.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">FAQ</h2>
          {[
            { q: 'Is Surfshark safe?', a: 'Yes. Surfshark uses AES-256 encryption, WireGuard/OpenVPN protocols, and has passed an independent Deloitte audit confirming its no-logs policy.' },
            { q: 'Does NordVPN keep logs?', a: 'No. NordVPN has had its no-logs policy independently verified by PwC twice. The company runs RAM-only servers, meaning no data survives a server restart.' },
            { q: 'Which is better for streaming?', a: 'Both unblock Netflix, Hulu, Disney+, and BBC iPlayer reliably. Speed-wise NordVPN has a slight edge for 4K streams, but either works well.' },
            { q: 'Can I use these on a router?', a: 'Yes. Both support manual router configuration (OpenVPN/WireGuard). NordVPN also has a dedicated router app for Asus, GL.iNet, and other compatible routers.' },
          ].map((f, i) => (
            <div key={i} className="mb-4 border border-gray-700 rounded-lg p-4 bg-gray-800/50">
              <h3 className="font-semibold text-white mb-1">{f.q}</h3>
              <p className="text-sm text-gray-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* More Comparisons */}
      <div className="my-8">
        <h3 className="font-body font-bold text-white mb-4">More Security Comparisons</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/compare/nordvpn-vs-expressvpn" className="block border border-gray-700 rounded-xl p-5 hover:border-emerald-700 transition-colors group">
            <p className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm">NordVPN vs ExpressVPN</p>
            <p className="text-xs text-gray-400 mt-1">Speed, privacy, and price -- the definitive 2026 test</p>
          </Link>
          <Link href="/compare/bitdefender-vs-norton" className="block border border-gray-700 rounded-xl p-5 hover:border-emerald-700 transition-colors group">
            <p className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm">Bitdefender vs Norton</p>
            <p className="text-xs text-gray-400 mt-1">Which antivirus actually catches more threats?</p>
          </Link>
        </div>
      </div>

      <NewsletterCTA />
    </article>
  );
}
