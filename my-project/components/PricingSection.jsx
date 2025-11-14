// components/PricingSection.jsx
const plans = [
    {
      name: 'Free',
      price: '₹0',
      desc: 'Perfect for startups',
      features: ['5 users', '100 leads', 'Basic dashboard', 'Email support'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '₹999',
      desc: 'For growing teams',
      features: ['50 users', 'Unlimited leads', 'Automation', 'Reports & Analytics'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '₹2999',
      desc: 'Scale without limits',
      features: ['Unlimited users', 'API access', 'Integrations', 'Priority support'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];
  
  export default function PricingSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Choose the plan that fits your team</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl p-8 shadow-sm border ${
                  plan.popular ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-indigo-600">{plan.price}<span className="text-sm text-gray-500">/month</span></p>
                  <p className="mt-2 text-gray-600">{plan.desc}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }