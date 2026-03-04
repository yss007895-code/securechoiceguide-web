import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SecureChoiceGuide - our mission, testing methodology, and commitment to independent security product reviews.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-6">About {SITE_NAME}</h1>
      <div className="prose-style">
        <p>SecureChoiceGuide is an independent review platform dedicated to helping consumers make informed decisions about security products and services. From home security systems and VPNs to dash cams and identity theft protection, we test and review the products that keep you safe.</p>

        <h2>Our Mission</h2>
        <p>We believe everyone deserves access to honest, expert security advice. Our mission is to cut through marketing hype and provide clear, unbiased recommendations based on rigorous real-world testing.</p>

        <h2>How We Test</h2>
        <p>Every product we review goes through a comprehensive testing process. We install, configure, and use each product in real-world conditions for a minimum of 30 days. Our evaluation criteria include performance, reliability, ease of use, value for money, and customer support quality.</p>
        <p>We consult with certified security professionals to validate our methodology. Our ratings reflect weighted scores across multiple evaluation categories specific to each product type.</p>

        <h2>Editorial Independence</h2>
        <p>Our editorial team operates independently from our business team. While we may earn affiliate commissions when readers purchase through our links, these relationships never influence our rankings or recommendations. Products earn their place in our guides through merit alone.</p>

        <h2>Our Team</h2>
        <p>Our team includes cybersecurity professionals, tech journalists, and consumer advocates with decades of combined experience in the security industry. We stay current with the latest threats, technologies, and products to ensure our recommendations are always up to date.</p>

        <h2>Contact Us</h2>
        <p>Have questions, feedback, or product review requests? Reach us at <a href="mailto:contact@securechoiceguide.com">contact@securechoiceguide.com</a>. We read every message and strive to respond within 48 hours.</p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
          ],
        }) }}
      />
    </div>
  );
}
