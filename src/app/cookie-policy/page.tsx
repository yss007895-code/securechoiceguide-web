import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy | SecureChoiceGuide',
  description: 'SecureChoiceGuide cookie policy — how we use cookies for analytics and advertising.',
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-400">Last updated: February 26, 2026</p>
      </header>

      <div className="prose-style">
        <p>This Cookie Policy explains how SecureChoiceGuide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website at securechoiceguide.com.</p>

        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites work more efficiently and to provide information to site owners about how visitors use the site. Cookies can be &quot;persistent&quot; (stored on your device until they expire or you delete them) or &quot;session&quot; cookies (deleted when you close your browser).</p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>

        <h3 className="text-lg font-semibold text-white mt-6 mb-3">1. Analytics Cookies</h3>
        <p>We use Google Analytics to understand how visitors interact with our website. Analytics cookies collect information such as pages visited, time spent on site, referral sources, and geographic location (country/city level only). This data is aggregated and anonymous — it does not identify you personally.</p>
        <p><strong>Provider:</strong> Google Analytics (Google LLC) — governed by Google&apos;s Privacy Policy and Google&apos;s data processing terms.</p>

        <h3 className="text-lg font-semibold text-white mt-6 mb-3">2. Advertising Cookies</h3>
        <p>We use Google AdSense to display advertisements on our website. AdSense uses cookies to serve ads based on your prior visits to our website and other sites on the internet. Google may use these cookies to show you interest-based ads.</p>
        <p>You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-emerald-400 hover:underline" rel="noopener noreferrer" target="_blank">Google Ad Settings</a> or by visiting <a href="https://www.aboutads.info" className="text-emerald-400 hover:underline" rel="noopener noreferrer" target="_blank">aboutads.info</a>.</p>

        <h3 className="text-lg font-semibold text-white mt-6 mb-3">3. Affiliate Tracking Cookies</h3>
        <p>When you click on affiliate links on our site, affiliate networks may place cookies on your device to track conversions. These cookies allow vendors to attribute purchases to our referral. Affiliate cookies typically expire after 30-90 days.</p>

        <h3 className="text-lg font-semibold text-white mt-6 mb-3">4. Essential Cookies</h3>
        <p>Some cookies are strictly necessary for the website to function correctly. These include session cookies that remember your preferences during a visit. These cookies do not collect personal information and cannot be disabled without affecting site functionality.</p>

        <h2>Third-Party Cookies</h2>
        <p>In addition to our own cookies, we may use cookies from the following third parties:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm mb-6">
          <li><strong>Google Analytics</strong> — website analytics</li>
          <li><strong>Google AdSense</strong> — display advertising</li>
          <li><strong>Google Tag Manager</strong> — tag management</li>
          <li><strong>Affiliate networks</strong> — conversion tracking for VPN, antivirus, and security product referrals</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm mb-6">
          <li>View cookies stored on your device and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies (note: this may break site functionality)</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p>Be aware that disabling cookies may affect your experience on SecureChoiceGuide and other websites.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Cookie Policy periodically. When we do, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy regularly to stay informed about our use of cookies.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about our use of cookies, contact us at <a href="mailto:contact@securechoiceguide.com" className="text-emerald-400 hover:underline">contact@securechoiceguide.com</a>.</p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: `${SITE_URL}/cookie-policy` },
            ],
          }),
        }}
      />
    </div>
  );
}
