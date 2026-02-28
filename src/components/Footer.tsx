import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="font-display font-semibold text-text-primary">SecureChoice</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">Independent security reviews and privacy guides.</p>
            <a href="mailto:contact@securechoiceguide.com" className="inline-block mt-3 text-sm text-text-secondary hover:text-accent transition-colors font-mono">
              contact@securechoiceguide.com
            </a>
          </div>
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4">Explore</h4>
            <div className="space-y-2.5">
              <Link href="/shop" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Security Tools</Link>
              <Link href="/guides" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">VPN Reviews</Link>
              <Link href="/blog" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4">Popular</h4>
            <div className="space-y-2.5">
              <Link href="/guides/best-vpns-2026-ultimate-online-privacy" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Best VPNs 2026</Link>
              <Link href="/guides/best-password-managers-2026" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Password Managers</Link>
              <Link href="/guides/nordvpn-vs-expressvpn-ultimate-battle-online-security" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">NordVPN vs ExpressVPN</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4">Company</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Terms</Link>
              <Link href="/disclaimer" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Disclaimer</Link>
              <Link href="/affiliate-disclosure" className="block text-sm text-text-secondary hover:text-text-primary transition-colors">Affiliate Disclosure</Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-3 py-2 border border-dark-border text-xs font-mono text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Independently Tested
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-dark-border text-xs font-mono text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            No Affiliate Bias
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-dark-border text-xs font-mono text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Updated Weekly
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 p-4 border border-dark-border bg-dark-surface">
          <p className="text-xs text-text-muted leading-relaxed">
            <span className="font-medium text-text-secondary">Affiliate Disclosure:</span> SecureChoiceGuide is a participant in the Amazon Services LLC Associates Program and other affiliate programs. Some links on this site are affiliate links, meaning we may earn a small commission at no extra cost to you.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">&copy; {new Date().getFullYear()} SecureChoiceGuide. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-primary transition-colors">Privacy</Link>
            <Link href="/disclaimer" className="text-xs text-text-muted hover:text-text-primary transition-colors">Disclaimer</Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
