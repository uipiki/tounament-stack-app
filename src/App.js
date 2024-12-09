import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useMemo } from 'react';
import StackChart from "./StackChart";
import StackInput from "./StackInput";

function App() {
  const [chartData, setChartData] = useState([0]);
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const stepSize = useMemo(() => {
    const maxData = Math.max(...chartData);
    return maxData ? Math.ceil(maxData / 4) : 1; 
  }, [chartData]);

  const formattedData = {
      labels: labels.slice(0, chartData.length),
      datasets: [
          {
              label: 'UIPIKI',
              data: chartData,
              borderColor: '#6a4c9c',
              backgroundColor: 'rgba(106, 76, 156, 0.5)', 
          },
      ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <StackInput updateData={setChartData}/>
        <StackChart data={formattedData} stepSize={stepSize}/>
      </header>
    </div>
  );
}

export default App;
