import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

const MarketCard = ({ item }) => {
  const {
    name,
    symbol,
    price,
    change,
    logo,
    color,
    sparkline,
  } = item;

  const chartData = {
    labels: sparkline.map((_, i) => i),
    datasets: [
      {
        data: sparkline,
        borderColor: color,
        backgroundColor: `${color}33`, // 20% transparent
        pointRadius: 0,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    elements: { line: { borderWidth: 2 } },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const colorClass =
    color === "#FACC15"
      ? "text-yellow-400"
      : color === "#EF4444"
      ? "text-red-400"
      : "text-green-400";

  return (
    <div className="bg-[#111827] text-white rounded-xl shadow p-4 min-w-[220px] mr-4 border border-gray-700">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <img src={logo} alt={symbol} className="w-6 h-6" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-400">{symbol}</p>
        </div>
      </div>
      <p className="text-lg font-bold">{price} USD</p>
      <p className={`text-sm ${colorClass}`}>{change}%</p>
      <div className="h-16 mt-2">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

const MarketSummary = () => {
    const data = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          price: 64890.25,
          change: 2.34,
          logo: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
          color: "#22C55E",
          sparkline: [64000, 64200, 64500, 64800, 65000, 64890, 64600, 64250, 64000],
        },
        {
            name: "SPDR S&P 500",
            symbol: "SPY",
            price: 625.82,
            change: 0.28,
            logo: "https://cdn-icons-png.flaticon.com/512/6840/6840478.png", // Chart/stocks icon
            color: "#22C55E",
            sparkline: [620, 622, 624, 625.8, 626, 624, 623, 625.2, 625.82],
        },
        {
          name: "Vanguard Total",
          symbol: "VTI",
          price: 308.32,
          change: 0.27,
          logo: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
          color: "#22C55E",
          sparkline: [306, 307, 307.5, 308.32, 309, 308.5],
        },
        {
          name: "Invesco QQQ",
          symbol: "QQQ",
          price: 555.45,
          change: -0.14,
          logo: "https://cdn-icons-png.flaticon.com/512/3602/3602123.png",
          color: "#EF4444",
          sparkline: [560, 558, 556, 555.45, 554.5, 555.2],
        },
        {
          name: "Gold Trust",
          symbol: "GLD",
          price: 306.2,
          change: 0.22,
          logo: "https://cdn-icons-png.flaticon.com/512/2086/2086735.png",
          color: "#FACC15",
          sparkline: [304, 305, 306, 306.2, 306.1],
        },
      ];
      

  return (
    <div className="bg-[#0f172a] p-4 rounded-2xl w-[95vw] mx-auto overflow-x-auto scrollbar-hide">
  <div className="flex justify-center gap-10 flex-wrap">
    {data.map((item, idx) => (
      <div
        key={idx}
        className="hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer"
      >
        <MarketCard item={item} />
      </div>
    ))}
  </div>
</div>


  );
};

export default MarketSummary;