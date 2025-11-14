// components/TeamSection.jsx
import { Trophy, Target, TrendingUp } from 'lucide-react';

const team = [
  { name: 'Alex Chen', role: 'Sales Lead', leads: 142, closed: 38, rate: 27 },
  { name: 'Sara Kim', role: 'Marketing', leads: 98, closed: 31, rate: 32 },
  { name: 'Raj Patel', role: 'Sales', leads: 87, closed: 29, rate: 33 },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Team Performance</h2>
          <p className="mt-4 text-lg text-gray-600">Motivate with live leaderboards</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Top Closers This Month
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {team.map((member, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-semibold text-indigo-700">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">{member.closed}</p>
                  <p className="text-sm text-gray-500">Closed ({member.rate}%)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}