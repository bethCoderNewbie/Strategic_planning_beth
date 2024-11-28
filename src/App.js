import React from 'react';
import RegionalDashboard from './components/StrategicGrowthScenarios';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Netflix Strategic Growth Planning
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <StrategicGrowthScenarios />
        </div>
      </main>
    </div>
  );
}

export default App;
