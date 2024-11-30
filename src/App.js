import React from 'react';
import { 
  StrategicGrowthMatrix, 
  UncertaintyMatrix,
  ScenarioPlanning,
  PestelAnalysis,
  Presentation
} from './components/Dashboard';

function App() {
  return (
    <div className="p-4 space-y-8">
      <StrategicGrowthMatrix />
      <UncertaintyMatrix />
      <ScenarioPlanning />
      <PestelAnalysis />
      <Presentation />
    </div>
  );
}

export default App;
