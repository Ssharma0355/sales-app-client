// components/ProfileSection.jsx
import { User, Mail, Bell, Shield, TrendingUp } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Personal Hub</h2>
          <p className="mt-4 text-lg text-gray-600">Track progress, manage settings</p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://www.salon.com/app/uploads/2013/12/wolf_wall_street1.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
            />
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900">Jordan Belfort</h3>
              <p className="text-gray-600">Sales Manager • Marketing Dept</p>
              <div className="flex justify-center sm:justify-start gap-6 mt-4 text-sm">
                <div>
                  <p className="font-semibold text-indigo-600">89</p>
                  <p className="text-gray-500">Leads Closed</p>
                </div>
                <div>
                  <p className="font-semibold text-green-600">₹4.2L</p>
                  <p className="text-gray-500">Revenue</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">31%</p>
                  <p className="text-gray-500">Conv. Rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: 'Email Sync' },
              { icon: Bell, label: 'Notifications' },
              { icon: Shield, label: '2FA' },
              { icon: TrendingUp, label: 'Goals' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg text-center border">
                <item.icon className="w-6 h-6 mx-auto text-indigo-600 mb-1" />
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}