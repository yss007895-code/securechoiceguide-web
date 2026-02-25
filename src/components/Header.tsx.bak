'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/guides', label: 'VPN Reviews' },
    { href: '/shop', label: 'Security Tools' },
    { href: '/blog', label: 'Blog' },
    { href: '/guides', label: 'Compare' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className="font-body font-bold text-xl text-white tracking-tight">
              Secure<span className="text-emerald-400">Choice</span>Guide
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive(l.href)
                    ? 'text-white bg-gray-800'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/guides" className="hidden sm:block bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Privacy Guide</Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-400 hover:text-white p-2"
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
          <nav className="md:hidden pb-4 pt-2 animate-fade-in">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block px-4 py-3 text-sm rounded-lg ${
                  isActive(l.href)
                    ? 'text-white bg-gray-800 font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/guides" className="block mx-4 mt-3 bg-emerald-500 text-white text-sm font-semibold text-center px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Privacy Guide</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
