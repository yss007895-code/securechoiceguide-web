import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'SecureChoiceGuide - VPN Reviews & Online Privacy Guides', template: '%s | SecureChoiceGuide' },
  description: SITE_DESCRIPTION,
  keywords: ['best vpn 2026', 'vpn reviews', 'online privacy', 'cybersecurity tools', 'password manager', 'internet security', 'vpn comparison', 'nordvpn review', 'expressvpn review', 'online safety guide', 'privacy protection'],
  other: {
    'google-adsense-account': 'ca-pub-8049649445649586',
  },
  openGraph: {
    type: 'website', locale: 'en_US', url: SITE_URL, siteName: SITE_NAME,
    title: 'SecureChoiceGuide - VPN Reviews & Online Privacy Guides',
    description: 'Expert VPN reviews, cybersecurity tool comparisons, and privacy guides to keep you safe online.',
    images: [{ url: '/images/categories/hero-security.webp', width: 1200, height: 630, alt: 'SecureChoiceGuide - VPN Reviews & Online Privacy Guides' }],
  },
  twitter: { card: 'summary_large_image', site: '@SecureChoiceG', creator: '@SecureChoiceG' },
  alternates: { canonical: SITE_URL },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://s.skimresources.com https://www.google-analytics.com https://partner.googleadservices.com https://tpc.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://placehold.co https://images.unsplash.com https://securechoiceguide.com https://*.google-analytics.com https://*.googlesyndication.com https://*.doubleclick.net https://*.skimresources.com; connect-src 'self' https://www.google-analytics.com https://*.googlesyndication.com https://*.doubleclick.net https://analytics.google.com https://*.skimresources.com; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com; object-src 'none'; base-uri 'self';" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KSLL4L883T" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KSLL4L883T');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-cream antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/guides?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        )}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8049649445649586"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://s.skimresources.com/js/298887X1786506.skimlinks.js"
          strategy="afterInteractive"
        />
        <Header />
        <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
