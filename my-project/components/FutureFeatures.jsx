// components/FutureFeatures.jsx
const future = [
    { title: 'AI Lead Scoring', desc: 'Auto-rank high-potential leads using ML' },
    { title: 'Email Automation', desc: 'Send follow-ups via Gmail/Outlook' },
    { title: 'WhatsApp API', desc: 'Close deals directly in chat' },
    { title: 'Revenue Forecasting', desc: 'Predict next month’s sales' },
    { title: 'Custom Reports', desc: 'Export PDF/Excel analytics' },
    { title: 'Multi-Tenant SaaS', desc: 'Support 100s of companies' },
  ];
  
  export default function FutureFeatures() {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Coming Soon</h2>
            <p className="mt-4 text-lg text-gray-600">Modular upgrades you can add anytime</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {future.map((f, i) => (
              <div
                key={i}
                className="group relative p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:border-indigo-300 transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition" />
                <h3 className="text-lg font-semibold text-gray-900 relative">{f.title}</h3>
                <p className="mt-2 text-gray-600 relative">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }