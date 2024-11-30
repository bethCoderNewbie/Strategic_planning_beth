const UncertaintyMatrix = () => {
  const quadrants = [
    {
      title: "Trends",
      importance: "high",
      uncertainty: "low",
      items: [
        "Digital Ad Market Growth",
        "Content Localization",
        "Mobile-First Consumption"
      ]
    },
    {
      title: "Critical Uncertainties",
      importance: "high",
      uncertainty: "high",
      items: [
        "AI/ML Development Speed & Regulation",
        "Emerging Market Growth Trajectory",
        "Gaming Industry Evolution"
      ]
    },
    {
      title: "Background",
      importance: "low",
      uncertainty: "low",
      items: [
        "Data Center Sustainability",
        "Payment Infrastructure",
        "Basic Internet Connectivity Growth"
      ]
    },
    {
      title: "Monitor",
      importance: "low",
      uncertainty: "high",
      items: [
        "Web3/Metaverse Development",
        "Quantum Computing",
        "Future Disruptions"
      ]
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
      <h2 className="text-2xl font-bold text-center mb-8">
        Strategic Impact-Uncertainty Matrix
      </h2>
      
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

export { StrategicGrowthMatrix, UncertaintyMatrix };
