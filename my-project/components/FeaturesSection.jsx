// components/FeaturesSection.jsx
import { Shield, Upload, Users, BarChart3, Bell, Settings } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Authentication',
    desc: 'Email, Company ID login + onboarding wizard with role-based access.',
  },
  {
    icon: Upload,
    title: 'Lead Import & Export',
    desc: 'Upload CSV/Excel, manage leads with stages, notes, and reminders.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboard',
    desc: 'Track conversions, revenue, team performance with interactive charts.',
  },
  {
    icon: Users,
    title: 'Team & Role Management',
    desc: 'Assign leads, view leaderboards, monitor department performance.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Follow-up reminders, email alerts, activity timeline.',
  },
  {
    icon: Settings,
    title: 'Profile & Settings',
    desc: 'Customize notifications, connect email, view personal stats.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need to Close More Deals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built for sales, marketing, and managers — all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}