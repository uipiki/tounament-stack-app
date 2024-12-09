import React from 'react';
import './StackChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const customBackgroundPlugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#282c34';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

ChartJS.register(customBackgroundPlugin);

function StackChart({data, stepSize}) {
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    customBackground: {},
    scales: {
      y: {
        ticks: {
          stepSize: stepSize,
          color: 'white', // Y軸の数字を白に設定
        },
        grid: {
          color: 'gray',
          drawBorder: true,
        },
        min: 0
      },
    },
  };
  return (
  <div class="chart-area">
    <Line options={options} data={data} />
  </div>
  );
}

export default StackChart;