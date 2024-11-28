import { ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';

const StrategicGrowthMatrix = () => {
  const getQuadrantStyle = (position) => {
    const styles = {
      topLeft: { backgroundColor: '#ff7e8d' },
      topRight: { backgroundColor: '#ff5166' },
      bottomLeft: { backgroundColor: '#ffeaec' },
      bottomRight: { backgroundColor: '#ffb6bf' }
    };
    return styles[position];
  };

  const Arrow = ({ direction }) => {
    const arrowProps = { className: "w-8 h-8", strokeWidth: 3, color: "#000000" };
    switch(direction) {
      case 'up': return <ArrowUp {...arrowProps} />;
      case 'right': return <ArrowRight {...arrowProps} />;
      case 'down': return <ArrowDown {...arrowProps} />;
      case 'left': return <ArrowLeft {...arrowProps} />;
      default: return null;
    }
  };

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
          {/* Local Champions */}
          <div className="p-6 rounded-lg" style={getQuadrantStyle('topLeft')}>
            <h3 className="font-bold mb-4 text-black">Local Champions</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>• Strong local growth</li>
              <li>• Limited AI capability</li>
              <li>• Mobile-first approach</li>
              <li className="text-[#073763] font-semibold mt-4">Strategy: Local partnerships</li>
            </ul>
          </div>

          {/* Global Digital Renaissance */}
          <div className="p-6 rounded-lg" style={getQuadrantStyle('topRight')}>
            <h3 className="font-bold mb-4 text-black">Global Digital Renaissance</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>• AI personalization</li>
              <li>• Cross-platform innovation</li>
              <li>• Global-local content</li>
              <li className="text-[#073763] font-semibold mt-4">Strategy: Full expansion</li>
            </ul>
          </div>

          {/* Digital Divide */}
          <div className="p-6 rounded-lg" style={getQuadrantStyle('bottomLeft')}>
            <h3 className="font-bold mb-4 text-black">Digital Divide</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>• Heavy regulation limits AI</li>
              <li>• Infrastructure challenges</li>
              <li>• Traditional content focus</li>
              <li className="text-[#073763] font-semibold mt-4">Strategy: Cost efficiency</li>
            </ul>
          </div>

          {/* Tech Revolution */}
          <div className="p-6 rounded-lg" style={getQuadrantStyle('bottomRight')}>
            <h3 className="font-bold mb-4 text-black">Tech Revolution</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>• Low-cost AI content</li>
              <li>• Advanced market focus</li>
              <li>• Automated services</li>
              <li className="text-[#073763] font-semibold mt-4">Strategy: AI investment</li>
            </ul>
          </div>
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
