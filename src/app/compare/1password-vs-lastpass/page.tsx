import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '1Password vs LastPass 2026: Which Password Manager Is Safer?',
  description: 'LastPass suffered a major breach. We compared 1Password and LastPass on security architecture, features, price, and trustworthiness for 2026.',
  keywords: ['1password vs lastpass', 'best password manager 2026', '1password review', 'lastpass review', 'password manager comparison'],
  alternates: { canonical: `${SITE_URL}/compare/1password-vs-lastpass` },
};

const data = [
  { feature: 'Security Architecture', one: 'Zero-knowledge, Secret Key', lastpass: 'Zero-knowledge (post-breach)', winner: 'one' },
  { feature: 'Major Security Breach', one: 'None', lastpass: '2022 (vault data stolen)', winner: 'one' },
  { feature: 'Starting Price', one: '$2.99/mo (individual)', lastpass: '$3/mo (individual)', winner: 'tie' },
  { feature: 'Free Tier', one: 'No standalone free (14-day trial)', lastpass: 'Yes (limited)', winner: 'lastpass' },
  { feature: 'Family Plan (up to 5)', one: '$4.99/mo', lastpass: '$4/mo', winner: 'lastpass' },
  { feature: 'Browser Extensions', one: 'All major browsers', lastpass: 'All major browsers', winner: 'tie' },
  { feature: 'Travel Mode', one: 'Yes (hide vaults at border)', lastpass: 'No', winner: 'one' },
  { feature: 'Passkey Support', one: 'Yes (full)', lastpass: 'Yes (basic)', winner: 'one' },
  { feature: 'Customer Support', one: 'Email + community (paid: priority)', lastpass: 'Email + community', winner: 'tie' },
];

export default function OnePasswordVsLastPass() {
  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-emerald-400">Home</Link>
        <span>/</span>
        <Link href="/compare" className="hover:text-emerald-400">Compare</Link>
        <span>/</span>
        <span className="text-gray-300">1Password vs LastPass</span>
      </nav>

      <header className="mb-8">
        <span className="text-xs font-medium text-emerald-400 border border-emerald-800 bg-emerald-900/30 px-3 py-1 rounded-full mb-3 inline-block">Updated Feb 2026</span>
        <h1 className="font-body text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          1Password vs LastPass 2026: Which Password Manager Should You Actually Trust?
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          After LastPass's 2022 data breach, millions of users reconsidered their password manager. We compared both on security architecture, features, and real-world usability.
        </p>
        <p className="text-xs text-gray-500 mt-3">Affiliate Disclosure: Some links below are affiliate links. We may earn a commission at no extra cost to you. Prices may vary -- check official site.</p>
      </header>

      {/* Quick Verdict */}
      <div className="border border-gray-700 rounded-xl p-6 mb-8 bg-gray-800/50">
        <h2 className="font-body text-lg font-bold text-white mb-4">Quick Verdict</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center p-4 border border-gray-700 rounded-xl bg-gray-900">
            <p className="font-body text-xl font-bold text-white mb-1">1Password</p>
            <p className="text-sm text-gray-400 mb-2">Best for: security-first users, families, travelers</p>
            <p className="font-mono text-2xl font-bold text-emerald-400">4.8<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://1password.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Get 1Password</a>
          </div>
          <div className="text-center p-4 border border-gray-700 rounded-xl bg-gray-900">
            <p className="font-body text-xl font-bold text-white mb-1">LastPass</p>
            <p className="text-sm text-gray-400 mb-2">Best for: users who want a free tier</p>
            <p className="font-mono text-2xl font-bold text-emerald-400">3.8<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://lastpass.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-gray-600 hover:bg-gray-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">See LastPass</a>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4 text-center"><strong className="text-white">Our pick:</strong> 1Password. After LastPass's 2022 breach, the trust gap is too significant to ignore.</p>
      </div>

      {/* Comparison Table */}
      <div className="border border-gray-700 rounded-xl overflow-hidden mb-8 bg-gray-900">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">Feature</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-300">1Password</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-300">LastPass</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-t border-gray-800">
                <td className="px-4 py-3 text-sm text-gray-300 font-medium">{r.feature}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'one' ? 'text-emerald-400 font-semibold' : 'text-gray-400'}`}>{r.one}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'lastpass' ? 'text-emerald-400 font-semibold' : 'text-gray-400'}`}>{r.lastpass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 text-gray-300">
        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">The 2022 Breach: Why It Still Matters</h2>
          <p>In late 2022, LastPass disclosed that attackers had accessed encrypted customer vault backups. The vaults are encrypted, but attackers could attempt offline brute-force attacks on weak master passwords. Security researchers found the incident response slow and communication poor. Millions of users migrated to alternatives.</p>
          <p className="mt-3">1Password has had no comparable security incidents. Their Secret Key system adds extra protection: even if vault data were stolen, an attacker would need both your master password and your Secret Key to decrypt anything. That dual-factor encryption is a meaningful architectural advantage.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Features: 1Password Leads on Security Tools</h2>
          <p>Travel Mode is unique to 1Password -- it lets you hide specific vaults when crossing international borders. Useful if you travel frequently or handle sensitive client data. LastPass has no equivalent.</p>
          <p className="mt-3">Both support passkeys, the emerging replacement for passwords. 1Password has broader integration and earlier adoption. Both apps autofill reliably across browsers and work on iOS, Android, Mac, Windows, and Linux.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Pricing: Closer Than You Think</h2>
          <p>Both start at roughly $3/month for individual plans. LastPass has a free tier covering one device type (mobile or browser, not both). 1Password has no free tier but offers a 14-day trial. For families of 5, LastPass is slightly cheaper at $4/month vs 1Password's $4.99/month.</p>
          <p className="mt-3">If price is the deciding factor, also consider Bitwarden -- open-source, free for individuals, with a strong security track record.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">Our Recommendation</h2>
          <p><strong className="text-white">Get 1Password</strong> if you're serious about password security. The Secret Key architecture, clean design, Travel Mode, and zero breach history make it the clear choice.</p>
          <p className="mt-2"><strong className="text-white">Consider Bitwarden</strong> if budget is the primary concern. Open-source and free for individuals, with a paid tier at $10/year.</p>
          <p className="mt-2"><strong className="text-white">Avoid LastPass</strong> until they rebuild trust through transparent security improvements and third-party audits.</p>
        </div>

        <div>
          <h2 className="font-body text-xl font-bold text-white mb-3">FAQ</h2>
          {[
            { q: 'Is 1Password safer than LastPass?', a: '1Password uses a dual-key encryption model (master password + Secret Key) that LastPass does not have. After LastPass\'s 2022 breach, security researchers broadly recommend switching to 1Password, Bitwarden, or Dashlane.' },
            { q: 'Was LastPass hacked?', a: 'Yes. In 2022, attackers accessed encrypted vault backups. While vaults are encrypted, the incident raised serious concerns about LastPass\'s security practices and incident response transparency.' },
            { q: 'Is 1Password worth paying for?', a: '1Password at $2.99/month offers excellent value given the security architecture and Travel Mode. Bitwarden is a free open-source alternative with a strong track record if budget is the main concern.' },
            { q: 'What is 1Password\'s Secret Key?', a: 'A 34-character key generated on your device that combines with your master password to encrypt your vault. It\'s never sent to 1Password\'s servers, so even if their servers are breached, your vault data can\'t be decrypted without your Secret Key.' },
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
