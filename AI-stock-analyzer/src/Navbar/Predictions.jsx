import React, { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Header from "../Header";
import Footer from "../Footer";

// Ticker Input Form
const TickerTimeSelector = ({ onSubmit }) => {
  const [ticker, setTicker] = useState("");
  const [timeRange, setTimeRange] = useState("1M");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticker.trim()) {
      onSubmit({ ticker: ticker.toUpperCase(), timeRange });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto mt-10 space-y-4"
    >
      <h2 className="text-2xl font-bold text-yellow-400 text-center">
        📈 Analyze Stock Trends
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter Ticker (e.g. AAPL)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="w-full md:w-40 px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="1D">1 Day</option>
          <option value="1W">1 Week</option>
          <option value="1M">1 Month</option>
          <option value="3M">3 Months</option>
          <option value="1Y">1 Year</option>
          <option value="ALL">All Time</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
      >
        🔍 Analyze
      </button>
    </form>
  );
};

// Trend Card
const TrendCard = ({ ticker, trend, confidence, companyName }) => {
  const isUp = trend === "Uptrend";
  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-8">
      <div className="text-yellow-400 font-semibold text-center mb-4">
        📊 AI Trend Prediction
      </div>
      <div className="text-center">
        <p className="text-gray-400">Stock</p>
        <h1 className="text-2xl font-bold">
          {companyName} ({ticker})
        </h1>
      </div>
      <div className="flex justify-between mt-6 text-lg">
        <div className="flex items-center gap-2 text-green-400">
          {isUp ? "↗️" : "↘️"}
          <div>
            <p className="text-sm text-gray-400">Trend Direction</p>
            <p className="font-bold">{trend}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">AI Confidence</p>
          <p className="font-bold text-yellow-400">{confidence}%</p>
        </div>
      </div>
    </div>
  );
};

const Predictions = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [trendInfo, setTrendInfo] = useState(null);

  const fetchStockData = async ({ ticker, timeRange }) => {
    const intervalMap = {
      "1D": "1min",
      "1W": "15min",
      "1M": "1h",
      "3M": "1day",
      "1Y": "1day",
      "ALL": "1day",
    };

    const interval = intervalMap[timeRange] || "1day";
    const API_KEY = import.meta.env.VITE_TWELVE_DATA_API_KEY;

    try {
      setLoading(true);
      setTrendInfo(null);

      const stockRes = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=${interval}&outputsize=100&apikey=${API_KEY}`
      );

      const values = stockRes.data?.values;
      if (!values) throw new Error("Invalid stock data");

      const chartData = values.reverse().map((item, index) => {
        const actual = parseFloat(item.close);
        const predicted = actual * (1 + 0.01 * Math.sin(index / 5)); // Simulated prediction
        return {
          date: item.datetime,
          actual: actual,
          predicted: parseFloat(predicted.toFixed(2)),
        };
      });

      setStockData(chartData);
      setSelectedTicker(ticker);

      const metaRes = await axios.get(
        `https://api.twelvedata.com/symbol_search?symbol=${ticker}&apikey=${API_KEY}`
      );
      const companyName = metaRes.data?.data?.[0]?.name || "Unknown Company";

      const randomConfidence = Math.floor(Math.random() * 20) + 80;
      const trend =
        chartData[chartData.length - 1].actual > chartData[0].actual
          ? "Uptrend"
          : "Downtrend";

      setTrendInfo({ trend, confidence: randomConfidence, companyName });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  };

  const pieData = [
    { name: "Positive", value: 58 },
    { name: "Neutral", value: 26 },
    { name: "Negative", value: 16 },
  ];

  const COLORS = ["#4ade80", "#facc15", "#f87171"];

  const tagWords = [
    "bullish", "earnings", "Tesla", "buy", "AI", "growth", "market",
    "inflation", "volume", "sell", "demand", "forecast"
  ];

  return (
    <>
    <Header/>
  <div className="bg-gray-800 min-h-screen p-6 text-white">
      <TickerTimeSelector onSubmit={fetchStockData} />

      {loading && <p className="text-center mt-6">⏳ Loading...</p>}

      {trendInfo && (
        <TrendCard
          ticker={selectedTicker}
          trend={trendInfo.trend}
          confidence={trendInfo.confidence}
          companyName={trendInfo.companyName}
        />
      )}

      {/* Actual vs Predicted Chart */}
      {stockData.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-xl text-center font-semibold mb-4">
            📉 Actual vs Predicted Trend for {selectedTicker}
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" hide />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />
              <Line type="monotone" dataKey="actual" name="Actual" stroke="#facc15" strokeWidth={2} />
              <Line type="monotone" dataKey="predicted" name="Predicted" stroke="#38bdf8" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Key Pattern Detection */}
      {stockData.length > 0 && (
        <div className="bg-gray-800 mt-10 p-6 rounded-xl max-w-3xl mx-auto text-white">
          <h2 className="text-xl font-bold mb-2">📌 Key Pattern Detected</h2>
          <p className="text-yellow-400 font-semibold">Double Bottom</p>
          <p className="text-sm mt-2 text-gray-300">
            A bullish reversal pattern typically seen after a prolonged downtrend.
          </p>
          <p className="mt-2">
            🔍 Pattern Accuracy Score: <span className="font-bold text-green-400">91%</span>
          </p>
        </div>
      )}

      {/* Sentiment Analysis */}
      {stockData.length > 0 && (
        <div className="bg-gray-800 mt-10 p-6 rounded-xl max-w-4xl mx-auto text-white">
          <h2 className="text-xl font-bold mb-4">🧠 Sentiment Analysis</h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Pie Chart */}
            <div className="w-full md:w-1/2 bg-gray-700 p-4 rounded-md text-center">
              <h3 className="font-semibold mb-2 text-yellow-300">Sentiment Breakdown</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Tag Cloud */}
            <div className="w-full md:w-1/2 bg-gray-700 p-4 rounded-md">
              <h3 className="font-semibold mb-2 text-yellow-300 text-center">Top Keywords</h3>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {tagWords.map((word, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-900 text-white text-sm rounded-full shadow"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>

  );
};

export default Predictions;
