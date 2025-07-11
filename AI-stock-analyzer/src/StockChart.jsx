import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StockChart = () => {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const priceData = [150, 152, 149, 155, 158];
  const volumeData = [5000, 7000, 6500, 8000, 9000];
  const patternOverlay = [null, null, 149, null, null]; // AI pattern point

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: priceData,
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        tension: 0.3,
        yAxisID: 'y',
      },
      {
        label: 'Volume',
        data: volumeData,
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96, 165, 250, 0.2)',
        tension: 0.3,
        yAxisID: 'y1',
      },
      {
        label: 'AI Pattern',
        data: patternOverlay,
        pointRadius: 6,
        pointBackgroundColor: '#facc15',
        type: 'line',
        borderColor: 'transparent',
        showLine: false,
        yAxisID: 'y',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        ticks: {
          color: '#fff',
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#fff',
        },
      },
      x: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-md  max-w-[95vw] m-auto">
      <h2 className="text-white text-lg font-semibold mb-4">Stock Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
