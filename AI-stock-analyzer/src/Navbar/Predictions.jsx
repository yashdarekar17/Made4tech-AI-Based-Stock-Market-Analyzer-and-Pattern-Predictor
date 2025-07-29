import React, { useState } from "react";
import axios from "axios";
import TrendPredictionPanel from '../TrendPredictionPanel'
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
import Header from "../Header2";
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
      
      <h2 className="text-2xl font-bold text-white text-center">
         Analyze Stock Trends
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter Ticker (e.g. AAPL)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="w-full md:w-40 px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
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
        className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-300 transition"
      >
         Analyze
      </button>
    </form>
  );
};

// Trend Card
const TrendCard = ({ ticker, trend, confidence, companyName }) => {
  const isUp = trend === "Uptrend";
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-8">
      <div className="text-yellow-400 font-semibold text-center mb-4">
         AI Trend Prediction
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

 const predictions = [
  { stock: "Apple (AAPL)", changePercent: "+3.06%", confidence: 92.5 },
  { stock: "Nvidia (NVDA)", changePercent: "+2.34%", confidence: 93.2 },
  { stock: "Google (GOOGL)", changePercent: "+1.92%", confidence: 89.1 },
  { stock: "Tesla (TSLA)", changePercent: "-2.14%", confidence: 86.4 },
  { stock: "Meta (META)", changePercent: "-1.68%", confidence: 81.2 },
  { stock: "Amazon (AMZN)", changePercent: "+2.98%", confidence: 88.9 },
  { stock: "Microsoft (MSFT)", changePercent: "+1.76%", confidence: 90.7 },
  { stock: "Netflix (NFLX)", changePercent: "-2.67%", confidence: 84.6 },
  { stock: "Intel (INTC)", changePercent: "+0.89%", confidence: 79.8 },
  { stock: "AMD (AMD)", changePercent: "+1.54%", confidence: 85.3 },
  { stock: "PayPal (PYPL)", changePercent: "-1.23%", confidence: 77.4 },
  { stock: "Qualcomm (QCOM)", changePercent: "+2.12%", confidence: 83.1 },
  { stock: "Boeing (BA)", changePercent: "-0.86%", confidence: 76.9 },
  { stock: "Coca-Cola (KO)", changePercent: "+0.45%", confidence: 74.2 },
  { stock: "PepsiCo (PEP)", changePercent: "+0.72%", confidence: 75.5 },
  { stock: "Walmart (WMT)", changePercent: "+1.11%", confidence: 80.6 },
  { stock: "Disney (DIS)", changePercent: "-0.94%", confidence: 78.3 },
  { stock: "Uber (UBER)", changePercent: "+2.76%", confidence: 82.9 },
];


  

  const fetchStockData = async ({ ticker, timeRange }) => {
  try {
    setLoading(true);
    setTrendInfo(null);

    const response = await axios.post("http://localhost:8080/api/predict", {
      ticker,
      timeRange,
    });

    const { stockData, trendInfo } = response.data;

    setStockData(stockData);
    setTrendInfo(trendInfo);
    setSelectedTicker(ticker);
  } catch (err) {
    console.error("Error fetching stock data from backend:", err);
    alert("Error fetching stock data: " + err.message);
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
      <Header />
      <div className="bg-gray-900  p-6 text-white">
        <TickerTimeSelector onSubmit={fetchStockData}/>

        {loading && <p className="text-center mt-6">⏳ Loading...</p>}

        {trendInfo && (
          <TrendCard
            ticker={selectedTicker}
            trend={trendInfo.trend}
            confidence={trendInfo.confidence}
            companyName={trendInfo.companyName}
          />
        )}

        {stockData.length > 0 && (
          <div className="mt-10 w-[95vw]  mx-auto">
            <h2 className="text-xl text-center font-semibold mb-4">
               Actual vs Predicted Trend for {selectedTicker}
            </h2>
            <div className="bg-black p-6 rounded-xl  mx-auto">
              <ResponsiveContainer width="100%" height={500}>
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
            
          </div>
        )}

        {stockData.length > 0 && (
          <div className="bg-gray-800 mt-10 p-6 rounded-xl max-w-3xl mx-auto text-white">
            <h2 className="text-xl font-bold mb-2"> Key Pattern Detected</h2>
            <p className="text-yellow-400 font-semibold">Double Bottom</p>
            <p className="text-sm mt-2 text-gray-300">
              A bullish reversal pattern typically seen after a prolonged downtrend.
            </p>
            <p className="mt-2">
              🔍 Pattern Accuracy Score: <span className="font-bold text-green-400">91%</span>
            </p>
          </div>
        )}

        {stockData.length > 0 && (
          <div className="bg-gray-800 mt-10 p-6 rounded-xl max-w-4xl mx-auto text-white">
            <h2 className="text-xl font-bold mb-4"> Sentiment Analysis</h2>
            <div className="flex flex-col md:flex-row gap-6">
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

              <div className="w-full md:w-1/2 bg-gray-700 p-4 rounded-md">
                <h3 className="font-semibold mb-2 text-yellow-300 text-center">Top Keywords</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {tagWords.map((word, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-900 text-white text-sm rounded-full shadow">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        )}

    <div className=" mb-4 border-b border-white pb-2 mt-6 max-w-[97vw] m-auto flex">
        <h1 className="text-2xl font-bold text-white hover:text-green-400"> Predictions </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
  <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
</svg>
    </div> 

<div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[85vw] m-auto">
      {predictions.map((p, idx) => (
        <TrendPredictionPanel
          key={idx}
          stock={p.stock}
          changePercent={p.changePercent}
          confidence={p.confidence}
        />
      ))}
      
    </div>
      </div>
      <div>
      
      </div>
      <Footer />
    </>
  );
};

export default Predictions;
