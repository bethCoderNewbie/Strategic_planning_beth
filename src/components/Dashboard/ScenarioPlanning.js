import React from 'react';
import { Globe, DollarSign, Gamepad, Monitor, Brain } from './Icons';

const ScenarioPlanning = () => {
  const scenarios = [
    {
      title: "Emerging Markets Expansion",
      icon: Globe,
      color: "#073763",
      metrics: [
        "APAC revenue growth: $1B quarterly",
        "India pricing optimization success",
        "Local content investment strategy"
      ],
      strategy: "Regional content development & pricing flexibility"
    },
    {
      title: "Revenue Diversification",
      icon: DollarSign,
      color: "#6aa84f",
      metrics: [
        "Multi-stream revenue model",
        "Live events & sports content",
        "Merchandise & experiences"
      ],
      strategy: "Expand beyond core streaming services"
    },
    {
      title: "Gaming Investment",
      icon: Gamepad,
      color: "#cc0000",
      metrics: [
        "3x gaming engagement growth",
        "35 games on platform",
        "Netflix IP integration"
      ],
      strategy: "Build gaming as major entertainment vertical"
    },
    {
      title: "Ad-Supported Model",
      icon: Monitor,
      color: "#ffd966",
      metrics: [
        "40% new signups from ad tier",
        "Ad member growth: 70% QoQ",
        "12 markets expansion"
      ],
      strategy: "Scale advertising business for new revenue stream"
    },
    {
      title: "AI/ML Integration",
      icon: Brain,
      color: "#073763",
      metrics: [
        "Content recommendation engine",
        "Personalization algorithms",
        "Operational efficiency"
      ],
      strategy: "Leverage AI for enhanced user experience"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-2">Strategic Scenario Planning</h2>
        <p className="text-[#073763]">Key Growth Initiatives 2024-2026</p>
      </div>

      <div className="space-y-4">
        {scenarios.map((scenario, index) => {
          const Icon = scenario.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 transition-all duration-200"
              style={{
                border: `1px solid ${scenario.color}`,
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="p-2 rounded"
                  style={{ backgroundColor: `${scenario.color}20` }}
                >
                  <Icon 
                    className="w-6 h-6"
                    style={{ color: scenario.color }}
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-black">{scenario.title}</h3>
                    <span 
                      className="text-xs px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: `${scenario.color}10`,
                        color: scenario.color
                      }}
                    >
                      {index + 1}/5
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#073763] mb-1">Key Metrics</p>
                      <ul className="text-sm space-y-1">
                        {scenario.metrics.map((metric, idx) => (
                          <li key={idx} className="text-black">• {metric}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#073763] mb-1">Strategy</p>
                      <p className="text-sm text-black">{scenario.strategy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScenarioPlanning;
