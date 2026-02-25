import Link from 'next/link';

export default function AffiliateDisclosureBanner() {
  return (
    <div className="mb-6 p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-xs text-gray-400 leading-relaxed">
      <span className="font-semibold text-gray-300">Affiliate Disclosure:</span>{' '}
      Some links in this article are affiliate links. This means we may earn a small commission if you make a purchase through these links, at no additional cost to you. Prices may vary &mdash; always check the official site for current pricing.{' '}
      <Link href="/affiliate-disclosure" className="text-emerald-400 hover:underline">Learn more</Link>.
    </div>
  );
}
