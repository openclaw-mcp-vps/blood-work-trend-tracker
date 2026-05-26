export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-4">
          Health Tracking
        </span>
        <h1 className="text-4xl font-bold text-white mb-4">
          Track Blood Work Trends Over Time
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Import your lab results and instantly visualize biomarker trends with normal range comparisons. Stay on top of your health data.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ['PDF & CSV', 'Import lab results from any format'],
            ['Smart Parsing', 'Auto-detects biomarkers and values'],
            ['Trend Charts', 'Interactive charts with normal ranges'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited lab result imports',
              'PDF and CSV parsing',
              'Interactive trend charts',
              'Normal range comparisons',
              'Biomarker history & alerts',
              'Secure encrypted storage',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'What file formats are supported?',
              'We support PDF lab reports from major labs (Quest, LabCorp, etc.) and CSV exports. Our parser automatically identifies biomarkers and their values.',
            ],
            [
              'Is my health data secure?',
              'Yes. All data is encrypted at rest and in transit. We never share your health information with third parties.',
            ],
            [
              'Can I cancel anytime?',
              'Absolutely. Cancel your subscription at any time with no questions asked. Your data remains accessible until the end of your billing period.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Blood Work Trend Tracker. All rights reserved.
      </footer>
    </main>
  )
}
