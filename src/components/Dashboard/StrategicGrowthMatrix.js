import React from 'react';

export const StrategicGrowthMatrix = () => {
  const quadrants = {
    topLeft: {
      title: "Local Champions",
      color: "#ff7e8d",
      points: [
        "Strong local growth",
        "Limited AI capability",
        "Mobile-first approach"
      ],
      strategy: "Local partnerships"
    },
    topRight: {
      title: "Global Digital Renaissance",
      color: "#ff5166",
      points: [
        "AI personalization",
        "Cross-platform innovation",
        "Global-local content"
      ],
      strategy: "Full expansion"
    },
    bottomLeft: {
      title: "Digital Divide",
      color: "#ffeaec",
      points: [
        "Heavy regulation limits AI",
        "Infrastructure challenges",
        "Traditional content focus"
      ],
      strategy: "Cost efficiency"
    },
    bottomRight: {
      title: "Tech Revolution",
      color: "#ffb6bf",
      points: [
        "Low-cost AI content",
        "Advanced market focus",
        "Automated services"
      ],
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
        <li className="text-[#073763] font-semibold mt-4">
          Strategy: {data.strategy}
        </li>
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

        {/* Matrix Grid */}
        <div className="grid grid-cols-2 gap-4 h-full px-12 py-8">
          <Quadrant data={quadrants.topLeft} />
          <Quadrant data={quadrants.topRight} />
          <Quadrant data={quadrants.bottomLeft} />
          <Quadrant data={quadrants.bottomRight} />
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

export default StrategicGrowthMatrix;
