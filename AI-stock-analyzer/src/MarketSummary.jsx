import React from "react";
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
    name: "Ethereum",
    symbol: "ETH",
    price: 3430.82,
    change: 1.12,
    logo: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    color: "#22C55E",
    sparkline: [3400, 3410, 3425, 3430.82, 3440, 3435, 3420, 3415],
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 168.5,
    change: -0.45,
    logo: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
    color: "#EF4444",
    sparkline: [170, 169.5, 168.5, 167, 168, 168.5],
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: 0.421,
    change: 0.37,
    logo: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
    color: "#22C55E",
    sparkline: [0.41, 0.415, 0.418, 0.421, 0.42, 0.419],
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.125,
    change: -0.23,
    logo: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png",
    color: "#EF4444",
    sparkline: [0.12, 0.124, 0.126, 0.125, 0.124, 0.123],
  },
];

      const navigate = useNavigate(); 

      
   
  
      

  return (
    <div className="bg-[#0f172a] p-4 rounded-2xl w-[95vw] mx-auto overflow-x-auto scrollbar-hide">
  <div className="flex justify-center gap-10 flex-wrap">
    {data.map((item, idx) => (
      <div
        key={idx}
        onClick={()=> navigate(`/chart/${item.symbol}`)}
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