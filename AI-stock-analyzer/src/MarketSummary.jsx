import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
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
        backgroundColor: `${color}33`,
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
  const [marketData, setMarketData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyData = [
     {
    name: "Bitcoin",
    symbol: "BTC",
    price: "29750.55",
    change: "1.84",
    logo:  "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    color: "#22C55E",
    sparkline: [29100, 29250, 29400, 29350, 29500, 29650, 29750],
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "1850.80",
    change: "-0.94",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    color: "#EF4444",
    sparkline: [1880, 1875, 1860, 1855, 1850, 1845, 1850],
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "24.75",
    change: "2.55",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
    color: "#22C55E",
    sparkline: [23.5, 23.8, 24.1, 24.3, 24.6, 24.8, 24.75],
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "0.305",
    change: "-1.20",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    color: "#EF4444",
    sparkline: [0.32, 0.31, 0.305, 0.306, 0.308, 0.307, 0.305],
  },
  {
  name: "Ripple",
  symbol: "XRP",
  price: "0.648",
  change: "1.15",
  logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  color: "#22C55E",
  sparkline: [0.63, 0.635, 0.640, 0.645, 0.650, 0.648, 0.648],
}

    ];

    setMarketData(dummyData);
  }, []);

  return (
    <div className="bg-[#0f172a] p-4 rounded-2xl w-[95vw] mx-auto overflow-x-auto scrollbar-hide">
      <div data-aos="fade-down" className="flex justify-center gap-10 flex-wrap">
        {marketData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/chart/${item.symbol}`)}
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
