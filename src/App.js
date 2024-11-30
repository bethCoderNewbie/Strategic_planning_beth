import { StrategicGrowthMatrix, UncertaintyMatrix } from './components/Dashboard';

function App() {
  return (
    <div className="p-4">
      <StrategicGrowthMatrix />
      <div className="h-8" />
      <UncertaintyMatrix />
    </div>
  );
}

export default App;
