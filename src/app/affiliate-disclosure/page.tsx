import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | SecureChoiceGuide',
  description: 'SecureChoiceGuide participates in affiliate programs. Learn how we earn commissions and our commitment to editorial independence.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-body text-3xl font-bold text-white mb-2">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-400">Last updated: February 2026</p>
      </header>

      <div className="prose-style">
        <p>
          SecureChoiceGuide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) participates in affiliate marketing programs. This means we may earn a commission when you click on certain links on our site and make a purchase, at no additional cost to you.
        </p>

        <h2>What This Means for You</h2>
        <p>
          Some of the links on SecureChoiceGuide are &quot;affiliate links.&quot; This means if you click on the link and purchase the item, we will receive an affiliate commission. We only recommend products or services we believe will add value to our readers.
        </p>
        <p>
          Prices shown are subject to change. Always check the official product page for the current price before purchasing. We include a &quot;Prices may vary, check official site&quot; reminder wherever relevant.
        </p>

        <h2>Programs We Participate In</h2>
        <p>SecureChoiceGuide participates in the following affiliate programs:</p>
        <ul>
          <li><strong>Amazon Associates Program</strong> &mdash; We earn from qualifying purchases through Amazon links (tag: securecg-20).</li>
          <li><strong>VPN Affiliate Programs</strong> &mdash; NordVPN, ExpressVPN, Surfshark, and others.</li>
          <li><strong>Security Software Programs</strong> &mdash; Bitdefender, Norton, Malwarebytes, and others.</li>
          <li><strong>Other Programs</strong> &mdash; Various cybersecurity and privacy tool providers.</li>
        </ul>

        <h2>Our Editorial Independence</h2>
        <p>
          Affiliate relationships <strong>never influence</strong> our editorial decisions, rankings, or recommendations. Our team independently researches, tests, and evaluates every product we cover. We would rather recommend a product with no affiliate program than a poor product that pays us a commission.
        </p>
        <p>
          If a product earns a poor score in our testing, we will say so clearly, regardless of any affiliate relationship. Our readers&apos; trust is worth more than any commission.
        </p>

        <h2>FTC Compliance</h2>
        <p>
          In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials (16 CFR Part 255), we disclose our affiliate relationships clearly on every page where affiliate links appear. This disclosure appears at the top of relevant articles and in our site footer.
        </p>

        <h2>No Additional Cost to You</h2>
        <p>
          When you purchase through our affiliate links, you pay the same price as you would going directly to the retailer. SecureChoiceGuide receives a small commission from the retailer, which helps us continue providing free content to our readers.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any questions about our affiliate relationships or editorial process, please contact us at{' '}
          <a href="mailto:contact@securechoiceguide.com" className="text-emerald-400 hover:underline">
            contact@securechoiceguide.com
          </a>.
        </p>
      </div>
    </div>
  );
}
