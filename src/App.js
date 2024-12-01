import React from 'react';
import { 
  StrategicGrowthMatrix, 
  UncertaintyMatrix,
  ScenarioPlanning,
  PestelAnalysis,
  Presentation,
  AIIntegrationDashboard
} from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Strategic Analysis Section */}
      <section className="p-4 space-y-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Strategic Analysis Dashboard</h1>
          <p className="text-gray-600 mb-8">Comprehensive market analysis and strategic planning tools</p>
          
          <div className="grid grid-cols-1 gap-8">
            <AIIntegrationDashboard />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <StrategicGrowthMatrix />
                <PestelAnalysis />
              </div>
              <div className="space-y-8">
                <UncertaintyMatrix />
                <ScenarioPlanning />
              </div>
            </div>
            
            <Presentation />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
