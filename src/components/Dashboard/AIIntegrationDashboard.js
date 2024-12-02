import React, { useState } from 'react';
import { PieChart, Pie, LineChart, RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const NETFLIX_COLORS = {
  primary: '#E50914',
  secondary: '#221F1F',
  tertiary: '#F5F5F1',
  gray: '#564D4D',
  orange: '#FF9900'
};

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 text-sm font-semibold rounded-t-lg transition-colors ${
      active 
        ? 'bg-white text-gray-900 border-t border-x border-gray-200' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
);

const MetricCard = ({ title, value, trend, color }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <div className="mt-2 flex items-end justify-between">
      <p className="text-2xl font-semibold" style={{ color }}>{value}</p>
      {trend && (
        <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
  </div>
);

const InvestmentAllocation = () => {
  const data = [
    { name: 'Content Development', value: 57, color: NETFLIX_COLORS.primary },
    { name: 'Tech Infrastructure', value: 12, color: NETFLIX_COLORS.secondary },
    { name: 'AI/ML Development', value: 3, color: NETFLIX_COLORS.gray },
    { name: 'Market Operations', value: 28, color: NETFLIX_COLORS.orange }
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const PorterForces = () => {
  const data = [
    { force: 'New Entrants', value: 45, color: '#FFD700' },
    { force: 'Supplier Power', value: 85, color: NETFLIX_COLORS.primary },
    { force: 'Buyer Power', value: 55, color: '#FFD700' },
    { force: 'Substitutes', value: 35, color: '#90EE90' },
    { force: 'Industry Rivalry', value: 80, color: NETFLIX_COLORS.primary }
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="force" />
          <Radar dataKey="value" fill={NETFLIX_COLORS.primary} fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

const AIIntegrationDashboard = () => {
  const [activeTab, setActiveTab] = useState('investment');

  const views = {
    investment: {
      title: "Netflix 2025: Strategic Investment Realignment",
      subtitle: "Transforming Content Leadership Through Strategic Technology Integration"
    },
    landscape: {
      title: "Netflix Strategic Landscape 2024-2025",
      subtitle: "Growth Through Content & Technology Integration"
    },
    porter: {
      title: "Netflix Market Position in AI/ML Development",
      subtitle: "Porter's Five Forces Analysis"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex space-x-2">
          <TabButton 
            active={activeTab === 'investment'} 
            onClick={() => setActiveTab('investment')}
          >
            Investment View
          </TabButton>
          <TabButton 
            active={activeTab === 'landscape'} 
            onClick={() => setActiveTab('landscape')}
          >
            Strategic Landscape
          </TabButton>
          <TabButton 
            active={activeTab === 'porter'} 
            onClick={() => setActiveTab('porter')}
          >
            Porter's Analysis
          </TabButton>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {views[activeTab].title}
          </h1>
          <p className="text-gray-500 mb-8">{views[activeTab].subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeTab === 'investment' && (
              <>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Investment Allocation</h2>
                  <InvestmentAllocation />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Performance Targets</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <MetricCard title="Efficiency Gains" value="+15%" trend={15} color={NETFLIX_COLORS.primary} />
                    <MetricCard title="ARPU Growth" value="5-7%" trend={6} color={NETFLIX_COLORS.primary} />
                    <MetricCard title="Engagement" value="+20%" trend={20} color={NETFLIX_COLORS.primary} />
                    <MetricCard title="Cost Optimization" value="-10%" trend={-10} color={NETFLIX_COLORS.primary} />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'landscape' && (
              <>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Financial Trajectory</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <MetricCard title="2024 Revenue Growth" value="14-15%" trend={14.5} color={NETFLIX_COLORS.primary} />
                    <MetricCard title="2025 Revenue Target" value="$43B-$44B" color={NETFLIX_COLORS.primary} />
                    <MetricCard title="Operating Margin Evolution" value="27% → 28%" trend={1} color={NETFLIX_COLORS.primary} />
                    <MetricCard title="FCF 2024" value="$6.0B-$6.5B" color={NETFLIX_COLORS.primary} />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Strategic Investment Vectors</h2>
                  <div className="space-y-4">
                    {['Content Ecosystem', 'Ad Tech Innovation', 'Interactive Entertainment', 'Live Programming'].map((vector, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-700">{vector}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'porter' && (
              <>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Porter's Five Forces</h2>
                  <PorterForces />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <MetricCard title="Capital Deployment" value="$15.5B" color={NETFLIX_COLORS.primary} />
                    <MetricCard title="Tech Development" value="$2.7B" color={NETFLIX_COLORS.primary} />
                    <MetricCard title="Content Investment" value="$12.5B" color={NETFLIX_COLORS.primary} />
                    <MetricCard title="AI/ML Investment" value="$500M-$700M" color={NETFLIX_COLORS.primary} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationDashboard;
