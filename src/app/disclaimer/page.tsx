import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Disclaimer & Affiliate Disclosure',
  description: 'SecureChoiceGuide disclaimer and affiliate disclosure - transparency about our review process and affiliate relationships.',
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Disclaimer &amp; Affiliate Disclosure</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: February 28, 2026</p>
      <div className="prose-style">
        <h2>General Disclaimer</h2>
        <p>The information provided on {SITE_NAME} (securechoiceguide.com) is for general informational purposes only. While we strive to keep our content accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics on this website.</p>
        <p>Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage arising from the use of this website.</p>

        <h2>Affiliate Disclosure (FTC Compliance)</h2>
        <p>{SITE_NAME} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>Some links on this website are affiliate links, meaning we may earn a small commission at no additional cost to you when you make a purchase through these links. This helps us maintain and improve our website.</p>
        <p><strong>Important:</strong> Our affiliate relationships do not influence our editorial content, product ratings, or recommendations. Products earn their rankings based solely on our independent testing and evaluation. We only recommend products we have tested or thoroughly researched.</p>

        <h2>Product Reviews</h2>
        <p>Our product reviews are based on independent testing and research. However, product features, prices, and availability may change after publication. We recommend verifying current information directly with the manufacturer or retailer before making a purchase decision.</p>
        <p>Ratings and rankings reflect our editorial opinion at the time of publication and may be updated as new information becomes available or as products are updated.</p>

        <h2>Professional Advice</h2>
        <p>The content on this website is not intended to be a substitute for professional security advice. For specific security concerns about your home, vehicle, or digital life, we recommend consulting with a qualified security professional.</p>

        <h2>External Links</h2>
        <p>This website may contain links to external websites. We have no control over the content, privacy policies, or practices of third-party websites and assume no responsibility for them.</p>

        <h2>Advertising</h2>
        <p>We display advertisements through Google AdSense. These ads are served by third parties and may use cookies to personalize ad content. We do not control the content of these advertisements.</p>

        <h2>Contact</h2>
        <p>If you have questions about this disclaimer or our affiliate relationships, please contact us at <a href="mailto:contact@securechoiceguide.com">contact@securechoiceguide.com</a>.</p>
      </div>
    </div>
  );
}
