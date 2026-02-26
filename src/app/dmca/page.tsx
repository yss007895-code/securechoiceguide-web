import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'DMCA Policy | SecureChoiceGuide',
  description: 'SecureChoiceGuide DMCA copyright infringement reporting policy and procedures.',
  alternates: { canonical: `${SITE_URL}/dmca` },
};

export default function DmcaPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-white mb-2">DMCA Policy</h1>
        <p className="text-sm text-gray-400">Last updated: February 26, 2026</p>
      </header>

      <div className="prose-style">
        <h2>Copyright Infringement Notification</h2>
        <p>SecureChoiceGuide respects the intellectual property rights of others and expects our users and partners to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (the text of which may be found at the U.S. Copyright Office website at <strong>copyright.gov</strong>), we will respond expeditiously to valid claims of copyright infringement submitted to our designated DMCA agent.</p>

        <h2>Filing a DMCA Takedown Notice</h2>
        <p>If you believe that content on SecureChoiceGuide infringes your copyright, please submit a written notice containing all of the following elements:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm mb-6">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the exclusive right allegedly infringed</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or a representative list if multiple works are covered by a single notification</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity, with information reasonably sufficient to permit us to locate the material (URL is sufficient)</li>
          <li>Information reasonably sufficient to permit us to contact you, including your address, telephone number, and email address</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the exclusive right allegedly infringed</li>
        </ul>

        <h2>Where to Send DMCA Notices</h2>
        <p>Submit your DMCA takedown notice to our designated copyright agent:</p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 my-4">
          <p className="text-gray-300 text-sm font-medium">DMCA Agent — SecureChoiceGuide</p>
          <p className="text-gray-400 text-sm mt-1">Email: <a href="mailto:dmca@securechoiceguide.com" className="text-emerald-400 hover:underline">dmca@securechoiceguide.com</a></p>
          <p className="text-gray-500 text-xs mt-2">Please include &quot;DMCA Notice&quot; in the subject line.</p>
        </div>
        <p>We will respond to all valid DMCA notices within 5 business days. Upon receipt of a valid and complete takedown notice, we will remove or disable access to the allegedly infringing material promptly.</p>

        <h2>Counter-Notification</h2>
        <p>If you believe that material we removed in response to a DMCA notice is not infringing, or that you have authorization to use the material, you may submit a counter-notification to our DMCA agent. A valid counter-notification must include all elements required by 17 U.S.C. § 512(g)(3).</p>

        <h2>Repeat Infringers</h2>
        <p>It is our policy to terminate the accounts of users who are repeat infringers in appropriate circumstances.</p>

        <h2>Disclaimer</h2>
        <p>The information on this page does not constitute legal advice. If you have questions about copyright law or the DMCA, consult a qualified attorney.</p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'DMCA Policy', item: `${SITE_URL}/dmca` },
            ],
          }),
        }}
      />
    </div>
  );
}
