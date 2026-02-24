export default function NewsletterCTA() {
  return (
    <div className="border border-gray-700 rounded-xl p-8 text-center bg-gray-800">
      <h3 className="font-body text-xl font-semibold text-white mb-2">The Weekly Security Brief</h3>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
        VPN deals, security alerts, and privacy tips delivered every Thursday.
      </p>
      <div className="max-w-md mx-auto">
        <a href="https://securechoiceguide.substack.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">Subscribe Free</a>
      </div>
      <p className="text-[11px] text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
