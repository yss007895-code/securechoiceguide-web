import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | SecureChoiceGuide',
  description: 'SecureChoiceGuide affiliate disclosure — how we earn commissions and maintain editorial independence.',
  alternates: { canonical: `${SITE_URL}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-400">Last updated: February 26, 2026</p>
      </header>

      <div className="prose-style">
        <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-5 mb-8">
          <p className="text-emerald-300 font-semibold text-sm mb-1">Plain English Summary</p>
          <p className="text-gray-300 text-sm">Some links on SecureChoiceGuide are affiliate links. If you click one and make a purchase, we may earn a small commission — at no extra cost to you. This is how we fund the site and keep our content free.</p>
        </div>

        <h2>What Are Affiliate Links?</h2>
        <p>SecureChoiceGuide participates in affiliate marketing programs with VPN providers, antivirus companies, password manager vendors, and other cybersecurity services. When you click certain links on our site and subscribe to or purchase a product, we may receive a referral commission from that company.</p>
        <p>You pay the same price whether you use our affiliate link or go directly to the vendor&apos;s website. The vendor pays us a portion of the sale — it does not come out of your pocket.</p>

        <h2>Programs We Participate In</h2>
        <p>We currently have affiliate relationships with the following types of companies:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm mb-6">
          <li><strong>VPN providers</strong> — including NordVPN, Surfshark, ExpressVPN, CyberGhost, ProtonVPN, Private Internet Access, Windscribe, and Mullvad</li>
          <li><strong>Antivirus vendors</strong> — including Norton, Bitdefender, McAfee, and Malwarebytes</li>
          <li><strong>Password managers</strong> — including 1Password, Bitwarden, Dashlane, and LastPass</li>
          <li><strong>Amazon Associates Program</strong> — for physical security hardware and accessories</li>
          <li><strong>Other security software vendors</strong> — as relationships are established</li>
        </ul>

        <h2>Our Editorial Independence</h2>
        <p>Affiliate relationships do <strong>not</strong> influence our editorial decisions. We do not give higher ratings to products simply because they pay higher commissions. We do not omit negative findings because a vendor is an affiliate partner.</p>
        <p>Our review methodology is consistent: we evaluate products against objective criteria including security audit results, independent speed tests, pricing transparency, and real-world usability. If a product has significant flaws, we say so — regardless of any commercial relationship.</p>
        <p>LastPass is an example: despite having an affiliate relationship, we explicitly note the 2022 data breach in our reviews because our readers deserve accurate information.</p>

        <h2>FTC Compliance (16 CFR Part 255)</h2>
        <p>In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials (16 CFR Part 255), SecureChoiceGuide discloses material connections to the products and services we recommend. This disclosure appears at the top of all articles containing affiliate links, and in our site footer.</p>

        <h2>Prices and Availability</h2>
        <p>Prices listed on SecureChoiceGuide reflect current vendor pricing at the time of publication. VPN and security software prices change frequently — promotional rates expire, and plans are restructured. Always verify current pricing directly on the vendor&apos;s website before purchasing.</p>

        <h2>Questions</h2>
        <p>If you have questions about our affiliate relationships or editorial policies, contact us at <a href="mailto:contact@securechoiceguide.com" className="text-emerald-400 hover:underline">contact@securechoiceguide.com</a>.</p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Affiliate Disclosure', item: `${SITE_URL}/affiliate-disclosure` },
            ],
          }),
        }}
      />
    </div>
  );
}
