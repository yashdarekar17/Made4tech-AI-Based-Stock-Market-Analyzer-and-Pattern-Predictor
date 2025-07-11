import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const CryptoSummaryWithChart = ({ data }) => {
  const {
    name,
    symbol,
    logo,
    price,
    change24h,
    marketCap,
    volume24h,
    supply,
    sparkline,
    alert, // true if some alert (optional)
  } = data;

  // Color Logic
  const priceColor =
    alert === true
      ? "text-yellow-400"
      : change24h >= 0
      ? "text-green-400"
      : "text-red-400";

  const borderColor =
    alert === true
      ? "#FACC15"
      : change24h >= 0
      ? "#22C55E"
      : "#EF4444";

  const chartData = {
    labels: sparkline.map((_, i) => i),
    datasets: [
      {
        data: sparkline,
        borderColor,
        backgroundColor: "transparent",
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    elements: {
      line: { borderWidth: 2 },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="bg-[#1f2937] text-white rounded-2xl shadow-lg p-6 w-full max-w-3xl mx-auto border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt={`${name} logo`} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-400 uppercase">{symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-2xl font-bold ${priceColor}`}>${price}</p>
          <p className={`${priceColor}`}>{change24h}%</p>
        </div>
      </div>

      <div className="h-24">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mt-4">
        <div>
          <p className="font-semibold text-gray-400">Market Cap</p>
          <p>${marketCap.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-400">24h Volume</p>
          <p>${volume24h.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-400">Circulating Supply</p>
          <p>{supply.toLocaleString()} {symbol}</p>
        </div>
        <div className="col-span-2 flex justify-end gap-4 mt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl">Buy</button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default CryptoSummaryWithChart;
