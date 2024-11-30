import { useState } from 'react';
import { Building, TrendingUp, Users, Cpu, Leaf, Scale } from './Icons';

const PestelAnalysis = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  const sections = [
    {
      title: "Political",
      icon: Building,
      color: "#073763",
      lightColor: "rgba(7,55,99,0.1)",
      points: [
        "Regulatory challenges in different markets",
        "Content censorship considerations",
        "Government policies on streaming services"
      ]
    },
    {
      title: "Economic",
      icon: TrendingUp,
      color: "#6aa84f",
      lightColor: "rgba(106,168,79,0.1)",
      points: [
        "Global economic fluctuations",
        "Streaming market competition",
        "Consumer spending patterns"
      ]
    },
    {
      title: "Social",
      icon: Users,
      color: "#cc0000",
      lightColor: "rgba(204,0,0,0.1)",
      points: [
        "Changing entertainment consumption habits",
        "Cultural content preferences",
        "Demographic shifts"
      ]
    },
    {
      title: "Technological",
      icon: Cpu,
      color: "#ffd966",
      lightColor: "rgba(255,217,102,0.1)",
      points: [
        "Streaming technology advancements",
        "AI and machine learning developments",
        "Cybersecurity challenges"
      ]
    },
    {
      title: "Environmental",
      icon: Leaf,
      color: "#6aa84f",
      lightColor: "rgba(106,168,79,0.1)",
      points: [
        "Sustainability in content production",
        "Energy consumption of data centers",
        "Carbon footprint considerations"
      ]
    },
    {
      title: "Legal",
      icon: Scale,
      color: "#073763",
      lightColor: "rgba(7,55,99,0.1)",
      points: [
        "Intellectual property rights",
        "Data privacy regulations",
        "Content licensing agreements"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-8" style={{ backgroundColor: '#ffffff' }}>
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>
        Environmental Analysis (PESTEL)
      </h2>
      
      <div className="grid grid-cols-3 gap-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.title;
          
          return (
            <div 
              key={section.title}
              className="relative p-4 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: isActive ? section.lightColor : 'rgba(0,0,0,0.05)',
                border: isActive ? `2px solid ${section.color}` : '2px solid transparent'
              }}
              onClick={() => setActiveSection(isActive ? null : section.title)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon 
                  className="w-5 h-5"
                  style={{ color: section.color }} 
                />
                <h3 className="font-semibold" style={{ color: '#000000' }}>
                  {section.title}
                </h3>
              </div>
              
              <ul className={`space-y-2 text-sm ${isActive ? 'block' : 'hidden md:block'}`}>
                {section.points.map((point, index) => (
                  <li key={index} style={{ color: '#000000' }}>
                    • {point}
                  </li>
                ))}
              </ul>
              
              {!isActive && (
                <div className="md:hidden text-sm mt-2" style={{ color: '#073763' }}>
                  Click to expand
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PestelAnalysis;
