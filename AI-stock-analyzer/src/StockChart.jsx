import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const StockChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
    ],
    datasets: [
      {
        label: "Market",
        data: [6255, 6248, 6270, 6288, 6300, 6292, 6305, 6310, 6320, 6335, 6328, 6330, 6280, 6290],
        fill: true,
        borderColor: "#089981",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748b",
        },
      },
      y: {
        grid: {
          color: "#e2e8f0",
        },
        ticks: {
          color: "#64748b",
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-[#111827] p-4  shadow-md max-w-[99vw] m-auto mt-6">
      <h2 className="text-xl text-gray-900 dark:text-white font-semibold mb-4">Market summary Analysis</h2>
      <div className="h-[400px]">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default StockChart;
