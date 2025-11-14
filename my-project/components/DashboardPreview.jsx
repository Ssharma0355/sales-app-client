// components/DashboardPreview.jsx
"use client"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Mon', leads: 12, converted: 3 },
  { name: 'Tue', leads: 19, converted: 7 },
  { name: 'Wed', leads: 15, converted: 5 },
  { name: 'Thu', leads: 25, converted: 10 },
  { name: 'Fri', leads: 22, converted: 8 },
];

const pieData = [
  { name: 'Converted', value: 35, color: '#4f46e5' },
  { name: 'In Progress', value: 45, color: '#818cf8' },
  { name: 'Lost', value: 20, color: '#e5e7eb' },
];

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Live Sales Dashboard</h2>
          <p className="mt-4 text-lg text-gray-600">Track performance in real-time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Lead Flow</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="leads" stroke="#4f46e5" strokeWidth={2} />
                <Line type="monotone" dataKey="converted" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Status</h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-gray-700">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}