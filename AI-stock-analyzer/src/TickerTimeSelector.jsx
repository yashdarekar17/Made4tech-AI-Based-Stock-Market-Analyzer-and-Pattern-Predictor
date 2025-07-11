import React, { useState } from "react";

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
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="w-full md:w-40 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

export default TickerTimeSelector;
