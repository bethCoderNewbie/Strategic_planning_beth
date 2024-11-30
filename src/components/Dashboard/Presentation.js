import { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart, TrendingUp, AlertTriangle } from './Icons';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Netflix India Market Analysis",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 italic">Strategic Growth Analysis 2024-2026</p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Key Historical Milestones</h3>
            <ul className="space-y-2">
              <li>• Dec 2021: 20-60% price reduction</li>
              <li>• 30% YoY engagement increase</li>
              <li>• 24% revenue growth in 2022</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-3">Current Market</h3>
            <div className="space-y-2">
              <p>425M smartphone users</p>
              <p>25% streaming penetration</p>
              <p>$7.31 APAC ARM (Q4 2023)</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">2026 Target</h3>
            <div className="space-y-2">
              <p>40% market penetration</p>
              <p>25M subscribers</p>
              <p>$1.23B total revenue</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Revenue Projections",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2024 Projections</h3>
              <ul className="space-y-2 text-sm">
                <li>• Subscribers: 12M</li>
                <li>• Subscription Revenue: $432M</li>
                <li>• Ad Revenue: $48M</li>
                <li>• Total: $480M</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2026 Projections</h3>
              <ul className="space-y-2 text-sm">
                <li>• Subscribers: 25M</li>
                <li>• Subscription Revenue: $1.05B</li>
                <li>• Ad Revenue: $180M</li>
                <li>• Total: $1.23B</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Analytics-Driven Strategy",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <BarChart className="w-6 h-6 mb-2 text-purple-700" />
              <h3 className="font-semibold text-purple-900">Personalization</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Regional preferences</li>
                <li>• Language analysis</li>
                <li>• Viewing patterns</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <TrendingUp className="w-6 h-6 mb-2 text-blue-700" />
              <h3 className="font-semibold text-blue-900">Pricing</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Price elasticity</li>
                <li>• A/B testing</li>
                <li>• Regional analysis</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <AlertTriangle className="w-6 h-6 mb-2 text-green-700" />
              <h3 className="font-semibold text-green-900">Content</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>• ROI analysis</li>
                <li>• Performance metrics</li>
                <li>• Cross-cultural appeal</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Success Metrics & Risk Management",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Key Success Metrics</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ul className="text-sm space-y-2">
                <li>• Engagement rates</li>
                <li>• Revenue per user</li>
                <li>• Content ROI</li>
                <li>• Customer LTV</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Risk Mitigation</h3>
            <div className="bg-orange-50 p-4 rounded-lg">
              <ul className="text-sm space-y-2">
                <li>• Currency hedging</li>
                <li>• Infrastructure scaling</li>
                <li>• Local partnerships</li>
                <li>• Payment systems</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="min-h-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{slides[currentSlide].title}</h2>
        {slides[currentSlide].content}
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <button 
          onClick={prevSlide}
          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>
        
        <div className="text-sm text-gray-500">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button 
          onClick={nextSlide}
          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          disabled={currentSlide === slides.length - 1}
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
