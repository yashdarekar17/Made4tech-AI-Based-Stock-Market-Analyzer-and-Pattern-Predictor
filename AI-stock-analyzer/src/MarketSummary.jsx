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
    const [marketData, setMarketData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllCoinData = async () => {
            try {
                // 1. Fetch the list of top coins
                const coinListResponse = await fetch("http://localhost:8081/coins?page=1");
                const coinList = await coinListResponse.json();

                // 2. For each coin, fetch its market chart data
                const detailedCoinData = await Promise.all(
                    coinList.map(async (coin) => {
                        const chartResponse = await fetch(`http://localhost:8081/coins/${coin.id}/chart?days=7`);
                        const chartData = await chartResponse.json();
                        
                        // Extract just the prices for the sparkline
                        const sparkline = chartData.prices.map(p => p[1]);

                        return {
                            name: coin.name,
                            symbol: coin.symbol.toUpperCase(),
                            price: coin.current_price,
                            change: coin.price_change_percentage_24h.toFixed(2),
                            logo: coin.image,
                            color: coin.price_change_percentage_24h >= 0 ? "#22C55E" : "#EF4444",
                            sparkline: sparkline,
                        };
                    })
                );
                setMarketData(detailedCoinData);

            } catch (error) {
                console.error("Failed to fetch market data:", error);
            }
        };

        fetchAllCoinData();
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