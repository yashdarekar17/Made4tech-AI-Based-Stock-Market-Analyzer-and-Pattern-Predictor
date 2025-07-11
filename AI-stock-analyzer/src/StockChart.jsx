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
        borderColor: '#22c55e', // Green for upward trend
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'Volume',
        data: volumeData,
        borderColor: '#60a5fa', // Blue
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        tension: 0.3,
        yAxisID: 'y1',
      },
      {
        label: 'AI Pattern',
        data: patternOverlay,
        pointRadius: 6,
        pointBackgroundColor: '#facc15', // Yellow
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
          color: '#fff', // White labels
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
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
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
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="bg-[#111827] p-6 rounded-2xl shadow-md max-w-[95vw] m-auto mt-6">
      <h2 className="text-white text-xl font-semibold mb-4">📈 Stock Performance Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
