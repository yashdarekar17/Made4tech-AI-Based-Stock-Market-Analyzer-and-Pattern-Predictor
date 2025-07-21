// CheckstocksChart.jsx
// src/pages/CheckStocksChart.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import Header from './Header2';
import Footer from './Footer';

const CheckStocksChart = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const res = await axios.get(`https://api.twelvedata.com/time_series`, {
          params: {
            symbol,
            interval: '1month',
            outputsize: 12,
            apikey: 'f323836bb7854ee8b6062cbfd995a0ac',
          },
        });

        if (res.data?.values) {
          const reversed = res.data.values.reverse();
          setChartData(reversed);
          setError(null);

          const openPrice = parseFloat(reversed[0]?.open);
          const closePrice = parseFloat(reversed[reversed.length - 1]?.close);
          const percentageChange = ((closePrice - openPrice) / openPrice) * 100;

          setSummary({
            openPrice,
            closePrice,
            percentageChange,
            trend: closePrice > openPrice ? "Uptrend 📈" : "Downtrend 📉",
          });
        } else {
          setError(res.data.message || 'Invalid data format');
          console.error("API Error:", res.data);
        }
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError('Failed to fetch stock data');
      }
    };

    fetchStockData();
  }, [symbol]);

  return (
    <>
      <Header />
      <div className="bg-[#0f172a] min-h-screen text-white p-4">
        <h1 className="text-2xl font-bold mb-10 mt-8 text-center">
          📈 Stock Mountain Chart for {symbol}
        </h1>

        {error && (
          <p className="text-red-400 text-center mb-4">{error}</p>
        )}

        {chartData.length > 0 ? (
          <div className="bg-black p-4 rounded-xl shadow-lg">
            <svg width="0" height="0">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="mountainGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff3b3b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff3b3b" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="datetime"
                  tick={{ fill: '#94a3b8' }}
                  tickFormatter={(str) => dayjs(str).format('MMM')}
                />
                <YAxis tick={{ fill: '#94a3b8' }} />
                <CartesianGrid stroke="#1e293b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#ff3b3b' }}
                  labelStyle={{ color: '#f8fafc' }}
                  itemStyle={{ color: '#ff3b3b' }}
                />
                <Area
                  type="monotone"
                  dataKey="close"
                  stroke="#ff3b3b"
                  strokeWidth={2}
                  fill="url(#mountainGradient)"
                  dot={false}
                  style={{ filter: "url(#glow)" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : (
          !error && <p className="text-center text-gray-300 mt-10">Loading data...</p>
        )}
<div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-6">
  {/* Summary Box - Left */}
  {summary && (
    <div className="p-6 bg-gray-800 rounded-xl text-gray-200 shadow-lg w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mb-4">📊 Summary for {symbol}</h2>
      <ul className="space-y-2 text-lg">
        <li>🟢 Opening Price (12 months ago): ₹{summary.openPrice.toFixed(2)}</li>
        <li>🔵 Closing Price (now): ₹{summary.closePrice.toFixed(2)}</li>
        <li>
          📈 Change: {summary.percentageChange.toFixed(2)}% ({summary.trend})
        </li>
      </ul>
    </div>
  )}

  {/* Buy and Sell Buttons - Right */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 mt-10">
  <a href={`https://www.tradingview.com/chart/?symbol=${symbol}`}><button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg w-40">
      Buy
    </button></a>
    
    <a href={`https://www.tradingview.com/chart/?symbol=${symbol}`}><button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg w-40">
      Sell
    </button></a>
    
  </div>
</div>

        
      </div>
      <Footer />
    </>
  );
};

export default CheckStocksChart;
