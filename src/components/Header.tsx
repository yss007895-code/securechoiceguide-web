'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/guides', label: 'Reviews' },
    { href: '/shop', label: 'Tools' },
    { href: '/blog', label: 'Blog' },
    { href: '/compare/nordvpn-vs-expressvpn', label: 'Compare' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className="font-display font-bold text-base tracking-tight">
              SecureChoice<span className="text-accent">Guide</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`px-3 py-1.5 text-sm font-display font-medium transition-colors ${
                  isActive(l.href)
                    ? 'text-white bg-white/15'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/guides" className="hidden sm:block bg-accent text-white text-sm font-display font-semibold px-4 py-2 hover:bg-navy-500 transition-colors">
              Get Protected
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white/80 hover:text-white p-2"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 pt-2 animate-fade-in border-t border-white/20">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block px-4 py-3 text-sm font-display ${
                  isActive(l.href)
                    ? 'text-white font-semibold bg-white/15'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 mt-3">
              <Link href="/guides" className="block bg-accent text-white text-sm font-display font-semibold text-center px-4 py-2.5 hover:bg-navy-500 transition-colors">
                Get Protected
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
