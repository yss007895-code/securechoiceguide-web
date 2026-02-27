'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const AdSenseUnit = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  return (
    <div className="w-full my-8 text-center min-h-[250px] bg-gray-50 flex items-center justify-center border border-gray-100 rounded-lg">
      {/* Google AdSense Auto Ad Unit */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export const ViralVideoGrid = () => (
  <section className="my-10 p-6 rounded-2xl bg-gray-900 border border-gray-800">
    <h3 className="text-xl font-bold mb-2 text-white">Quick Security Tips</h3>
    <p className="text-sm text-gray-400 mb-5">Editor-verified advice to improve your online privacy today.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">🔒</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Enable 2FA Everywhere</p>
          <p className="text-xs text-gray-400">Two-factor authentication blocks 99% of automated attacks. Use an authenticator app, not SMS.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">🛡️</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Use a Password Manager</p>
          <p className="text-xs text-gray-400">Unique 16+ character passwords for every account. Bitwarden is free and open-source.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">🌐</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">VPN on Public Wi-Fi</p>
          <p className="text-xs text-gray-400">Never use public Wi-Fi without a VPN. Your data is visible to everyone on the network.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">📧</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Check for Breaches</p>
          <p className="text-xs text-gray-400">Visit haveibeenpwned.com monthly to see if your email appears in data breaches.</p>
        </div>
      </div>
    </div>
  </section>
);
