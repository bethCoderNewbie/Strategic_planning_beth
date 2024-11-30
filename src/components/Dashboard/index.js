import { useState } from 'react';

// Custom Arrow component
const Arrow = ({ direction, className = "w-8 h-8" }) => {
  const paths = {
    up: "M12 19V5M5 12l7-7 7 7",
    right: "M5 12h14M12 5l7 7-7 7",
    down: "M12 5v14M5 12l7 7 7-7",
    left: "M19 12H5M12 19l-7-7 7-7"
  };

  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d={paths[direction]} />
    </svg>
  );
};

// Strategic Growth Matrix Component
export const StrategicGrowthMatrix = () => {
  const quadrants = {
    topLeft: {
      title: "Local Champions",
      color: "#ff7e8d",
      points: ["Strong local growth", "Limited AI capability", "Mobile-first approach"],
      strategy: "Local partnerships"
    },
    topRight: {
      title: "Global Digital Renaissance",
      color: "#ff5166",
      points: ["AI personalization", "Cross-platform innovation", "Global-local content"],
      strategy: "Full expansion"
    },
    bottomLeft: {
      title: "Digital Divide",
      color: "#ffeaec",
      points: ["Heavy regulation limits AI", "Infrastructure challenges", "Traditional content focus"],
      strategy: "Cost efficiency"
    },
    bottomRight: {
      title: "Tech Revolution",
      color: "#ffb6bf",
      points: ["Low-cost AI content", "Advanced market focus", "Automated services"],
      strategy: "AI investment"
    }
  };

  const Quadrant = ({ data }) => (
    <div className="p-6 rounded-lg" style={{ backgroundColor: data.color }}>
      <h3 className="font-bold mb-4 text-black">{data.title}</h3>
      <ul className="space-y-2 text-sm text-black">
        {data.points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
        <li className="text-[#073763] font-semibold mt-4">Strategy: {data.strategy}</li>
      </ul>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Strategic Growth Scenarios</h2>
      
      <div className="relative h-[600px]">
        {/* Axes Labels */}
        <div className="absolute -left-4 top-1/2 transform -rotate-90 whitespace-nowrap">
          <div className="text-center">
            <span className="font-bold">High Growth</span>
            <span className="text-sm block">(Economic Prosperity)</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <div>
            <span className="font-bold">High Impact</span>
            <span className="text-sm block">(Light Regulation)</span>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Arrow direction="up" />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Arrow direction="right" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Arrow direction="down" />
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Arrow direction="left" />
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-2 gap-4 h-full px-12 py-8">
          {Object.entries(quadrants).map(([key, data]) => (
            <Quadrant key={key} data={data} />
          ))}
        </div>

        {/* Strategic Flexibility Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#073763] bg-white flex items-center justify-center">
            <span className="text-sm text-[#073763] font-semibold text-center">Strategic Flexibility</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Uncertainty Matrix Component
export const UncertaintyMatrix = () => {
  const quadrants = [
    {
      title: "Trends",
      importance: "high",
      uncertainty: "low",
      items: ["Digital Ad Market Growth", "Content Localization", "Mobile-First Consumption"]
    },
    {
      title: "Critical Uncertainties",
      importance: "high",
      uncertainty: "high",
      items: ["AI/ML Development Speed & Regulation", "Emerging Market Growth Trajectory", "Gaming Industry Evolution"]
    },
    {
      title: "Background",
      importance: "low",
      uncertainty: "low",
      items: ["Data Center Sustainability", "Payment Infrastructure", "Basic Internet Connectivity Growth"]
    },
    {
      title: "Monitor",
      importance: "low",
      uncertainty: "high",
      items: ["Web3/Metaverse Development", "Quantum Computing", "Future Disruptions"]
    }
  ];

  const getQuadrantStyle = (importance, uncertainty) => {
    if (importance === 'high') {
      return uncertainty === 'high' 
        ? { backgroundColor: '#ff7e8d' }
        : { backgroundColor: '#ff5166' }
    }
    return uncertainty === 'high'
      ? { backgroundColor: '#ffeaec' }
      : { backgroundColor: '#ffb6bf' }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Strategic Impact-Uncertainty Matrix</h2>
      
      <div className="grid grid-cols-2 gap-px bg-white h-[480px] border border-gray-200">
        {quadrants.map((quadrant, index) => (
          <div 
            key={index}
            className="p-6" 
            style={getQuadrantStyle(quadrant.importance, quadrant.uncertainty)}
          >
            <h3 className="font-bold mb-4 text-black">{quadrant.title}</h3>
            <div className="space-y-4">
              {quadrant.items.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-2" />
                  <span className="text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 px-8">
        <div className="flex flex-col">
          <span className="font-bold">Low Uncertainty</span>
          <span className="text-sm text-gray-600">(More Predictable)</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-bold">High Uncertainty</span>
          <span className="text-sm text-gray-600">(Less Predictable)</span>
        </div>
      </div>
    </div>
  );
};
