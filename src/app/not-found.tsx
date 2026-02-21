import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 pb-20 text-center max-w-lg mx-auto">
      <p className="font-mono text-6xl font-bold text-gray-200 mb-4">404</p>
      <h1 className="font-display text-2xl font-bold text-gray-900 mb-3">
        Page not found
      </h1>
      <p className="text-gray-400 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-primary text-sm">Go Home</Link>
        <Link href="/guides" className="btn-secondary text-sm">Browse Guides</Link>
        <Link href="/shop" className="btn-secondary text-sm">Browse Security Tools</Link>
      </div>

      <div className="mt-12 border border-gray-800 rounded-xl p-6 bg-gray-800">
        <h2 className="font-body font-bold text-white text-sm mb-3">Popular right now</h2>
        <div className="space-y-2 text-left">
          {[
            { title: 'Best VPNs 2026', href: '/guides/best-vpns-2026-ultimate-online-privacy' },
            { title: 'NordVPN vs ExpressVPN', href: '/guides/nordvpn-vs-expressvpn-ultimate-battle-online-security' },
            { title: 'Best Password Managers', href: '/guides/best-password-managers-2026' },
            { title: 'Online Privacy Guide', href: '/guides/complete-online-privacy-guide-2026' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm text-gray-500 hover:text-gray-900 transition-colors py-1">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
