import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SecureChoiceGuide privacy policy - how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: February 28, 2026</p>
      <div className="prose-style">
        <p>{SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website securechoiceguide.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways:</p>
        <p><strong>Automatically Collected Information:</strong> When you visit our site, our servers automatically log standard technical information, including your IP address, browser type, operating system, referring URL, pages visited, and time spent on pages. This information is collected through Google Analytics (GA4).</p>
        <p><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience. These include essential cookies for site functionality, analytics cookies (Google Analytics), and advertising cookies (Google AdSense).</p>

        <h2>How We Use Your Information</h2>
        <p>We use the collected information to: operate and maintain our website; improve and personalize your experience; analyze usage trends; display relevant advertisements; and comply with legal obligations.</p>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may collect data:</p>
        <p><strong>Google Analytics:</strong> Tracks website usage and visitor behavior. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
        <p><strong>Google AdSense:</strong> Displays personalized advertisements. You can opt out of personalized ads through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
        <p><strong>Amazon Associates:</strong> We participate in the Amazon Associates Program. When you click affiliate links and make purchases, Amazon may collect data as described in their privacy policy.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to: access your personal data; request correction of inaccurate data; request deletion of your data; opt out of data collection; and withdraw consent.</p>

        <h2>Data Security</h2>
        <p>We implement reasonable security measures to protect your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance of the revised policy.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:contact@securechoiceguide.com">contact@securechoiceguide.com</a>.</p>
      </div>
    </div>
  );
}
