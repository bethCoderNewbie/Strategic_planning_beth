import React, { useState } from 'react';

// ForcesAnalysis Component
const ForcesAnalysis = () => {
  const forces = [
    {
      title: "Threat of New Entrants",
      level: "MODERATE TO LOW",
      color: "#4CAF50",
      details: [
        {
          subtitle: "Infrastructure Advantage",
          points: [
            "AI training costs ($78M-$191M)",
            "AWS partnership (53.1% market leader)",
          ]
        },
        {
          subtitle: "Entry Barriers",
          points: [
            "Compute requirements moat",
            "Existing data ecosystem advantage"
          ]
        }
      ]
    },
    {
      title: "Bargaining Power of Suppliers",
      level: "HIGH",
      color: "#f44336",
      details: [
        {
          subtitle: "Hardware Dependencies",
          points: [
            "Nvidia AI chips dependency",
            "Infrastructure scaling needs"
          ]
        },
        {
          subtitle: "Technical Resources",
          points: [
            "AI talent competition",
            "Data acquisition challenges"
          ]
        }
      ]
    },
    {
      title: "Bargaining Power of Buyers",
      level: "MODERATE",
      color: "#FF9800",
      details: [
        {
          subtitle: "Enterprise Integration",
          points: [
            "Above average AI adoption",
            "Enhanced personalization"
          ]
        },
        {
          subtitle: "Value Proposition",
          points: [
            "AI-enhanced content discovery",
            "Interactive experiences"
          ]
        }
      ]
    },
    {
      title: "Threat of Substitutes",
      level: "LOW TO MODERATE",
      color: "#8BC34A",
      details: [
        {
          subtitle: "Technical Advantages",
          points: [
            "Superior content classification",
            "Proprietary algorithms"
          ]
        },
        {
          subtitle: "Service Integration",
          points: [
            "Multi-modal AI implementation",
            "Integrated UX barriers"
          ]
        }
      ]
    },
    {
      title: "Competitive Rivalry",
      level: "HIGH",
      color: "#f44336",
      details: [
        {
          subtitle: "Investment",
          points: [
            "$67.2B U.S. AI investment",
            "Tech conglomerate competition"
          ]
        },
        {
          subtitle: "Performance",
          points: [
            "24.2% closed model advantage",
            "Proprietary AI opportunity"
          ]
        }
      ]
    }
  ];

  const [activeForce, setActiveForce] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Porter's Five Forces Analysis - AI Context</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forces.map((force, index) => (
          <div 
            key={index}
            className="border rounded-lg p-4 cursor-pointer transition-all"
            style={{
              borderColor: force.color,
              backgroundColor: activeForce === index ? `${force.color}10` : 'white'
            }}
            onClick={() => setActiveForce(activeForce === index ? null : index)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{force.title}</h3>
              <span 
                className="text-xs px-2 py-1 rounded"
                style={{ backgroundColor: force.color + '20', color: force.color }}
              >
                {force.level}
              </span>
            </div>
            
            {(activeForce === index) && (
              <div className="mt-3 space-y-3">
                {force.details.map((detail, idx) => (
                  <div key={idx}>
                    <h4 className="font-medium text-sm mb-1">{detail.subtitle}</h4>
                    <ul className="text-sm space-y-1">
                      {detail.points.map((point, pidx) => (
                        <li key={pidx} className="flex items-center">
                          <span className="mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Metrics Component
const Metrics = () => {
  const metrics = [
    {
      category: "Market Opportunity",
      items: [
        { label: "Fortune 500 AI Mention Rate", value: "80%" },
        { label: "Potential Revenue Increase", value: "59%" },
        { label: "Organizations Reporting AI Savings", value: "42%" }
      ]
    },
    {
      category: "Technical Performance",
      items: [
        { label: "Closed vs Open AI Model Advantage", value: "24.2%" },
        { label: "Cloud Infrastructure Leader Share", value: "53.1%" },
        { label: "Enterprise AI Adoption Rate", value: "55%" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Key Performance Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="font-semibold text-lg">{section.category}</h3>
            {section.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="font-semibold text-blue-600">{item.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Risk Analysis Component
const RiskAnalysis = () => {
  const risks = [
    {
      category: "Technical Risks",
      items: [
        "AI model training cost management",
        "Data quality and availability constraints"
      ],
      color: "#e53935"
    },
    {
      category: "Competitive Risks",
      items: [
        "Market consolidation pressure",
        "Technology adoption pace requirements"
      ],
      color: "#fb8c00"
    },
    {
      category: "Regulatory Risks",
      items: [
        "AI governance framework compliance",
        "Data privacy and security requirements"
      ],
      color: "#43a047"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Risk Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {risks.map((risk, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg"
            style={{ backgroundColor: `${risk.color}10` }}
          >
            <h3 className="font-semibold mb-3" style={{ color: risk.color }}>
              {risk.category}
            </h3>
            <ul className="space-y-2">
              {risk.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const AIIntegrationDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Netflix AI Integration Analysis</h1>
        <p className="text-gray-600">Market Position and External Forces Analysis</p>
      </div>
      
      <ForcesAnalysis />
      <Metrics />
      <RiskAnalysis />
    </div>
  );
};

export default AIIntegrationDashboard;
