import logo from "./logo.svg";
import "./App.css";
import ChartsOverviewDemo from "./components/ChartsOverviewDemo";
import PieChartDemo from "./components/PieChartDemo";
import LineChartDemo from "./components/LineChartDemo";

function App() {
  return (
    <div>
      <ChartsOverviewDemo />
      <PieChartDemo />
      <LineChartDemo />
    </div>
  );
}

export default App;
