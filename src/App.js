import React from 'react';
import { 
  StrategicGrowthMatrix, 
  UncertaintyMatrix,
  ScenarioPlanning,
  PestelAnalysis
} from './components/Dashboard';

function App() {
  return (
    <div className="p-4 space-y-8">
      <StrategicGrowthMatrix />
      <UncertaintyMatrix />
      <ScenarioPlanning />
      <PestelAnalysis />
    </div>
  );
}

export default App;
