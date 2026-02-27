'use client';
import { useState, useEffect, useRef } from 'react';

export const POPUP_KEY = 'scg_popup_shown';
export const SHOW_DELAY_MS = 30000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_KEY)) return;

    timer.current = setTimeout(() => setVisible(true), SHOW_DELAY_MS);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5 && !sessionStorage.getItem(POPUP_KEY)) {
        if (timer.current) clearTimeout(timer.current);
        setVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(POPUP_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="newsletter-popup-title" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-fade-in text-center">
        <button onClick={dismiss} aria-label="Close" className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-lg leading-none">&#x2715;</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 mx-auto mb-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
        <h2 id="newsletter-popup-title" className="font-body text-xl font-bold text-white mb-2">Stay Protected Online</h2>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">
          Get weekly VPN deals, security alerts, and privacy tips.
          <strong className="block text-gray-300 mt-1">Free, every Thursday.</strong>
        </p>
        <div className="text-sm text-emerald-400 font-medium mb-3">Coming soon</div>
        <button onClick={dismiss} className="text-[11px] text-gray-500 mt-3 hover:text-gray-300 transition-colors underline block mx-auto">
          No thanks
        </button>
      </div>
    </div>
  );
}
