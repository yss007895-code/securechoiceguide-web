import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-body font-bold text-lg text-white tracking-tight">
              Secure<span className="text-emerald-400">Choice</span>Guide
            </span>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">Honest VPN reviews, security tool comparisons, and privacy guides to keep you safe online.</p>
            <a href="mailto:contact@securechoiceguide.com" className="inline-block mt-3 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
              contact@securechoiceguide.com
            </a>
          </div>
          <div>
            <h4 className="font-body font-semibold text-white text-sm mb-3">Explore</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Security Tools</Link>
              <Link href="/guides" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">VPN Reviews</Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-white text-sm mb-3">Popular</h4>
            <div className="space-y-2">
              <Link href="/guides/best-vpns-2026-ultimate-online-privacy" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Best VPNs 2026</Link>
              <Link href="/guides/best-password-managers-2026" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Password Managers</Link>
              <Link href="/guides/nordvpn-vs-expressvpn-ultimate-battle-online-security" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">NordVPN vs ExpressVPN</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-white text-sm mb-3">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</Link>
              <Link href="/affiliate-disclosure" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Affiliate Disclosure</Link>
              <Link href="/disclaimer" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700">
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="font-semibold text-gray-300">Affiliate Disclosure:</span> SecureChoiceGuide is a participant in the Amazon Services LLC Associates Program and other affiliate programs. Some links on this site are affiliate links, meaning we may earn a small commission at no extra cost to you when you make a purchase through our links.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} SecureChoiceGuide. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors">Privacy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors">Terms</Link>
            <span className="text-gray-700">|</span>
            <Link href="/affiliate-disclosure" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors">Affiliate Disclosure</Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
