import React from 'react';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const TrendPredictionPanel = ({
  stock = "Tesla (TSLA)",
  trend = "Uptrend",
  confidence = 87.3,
}) => {
  const isUptrend = trend.toLowerCase() === "uptrend";

  return (
    <div className="bg-[#111827] text-white p-6 rounded-2xl shadow-md mt-6 w-full max-w-md mx-auto border border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-center text-yellow-400">
        📊 AI Trend Prediction
      </h3>

      {/* Stock Name */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-400">Stock</p>
        <p className="text-2xl font-bold">{stock}</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Trend Status */}
        <div className="flex items-center space-x-3">
          <div className={`text-3xl ${isUptrend ? "text-green-500" : "text-red-500"}`}>
            {isUptrend ? <ArrowUpRight size={32} /> : <ArrowDownRight size={32} />}
          </div>
          <div>
            <p className="text-sm text-gray-400">Trend Direction</p>
            <p className={`text-xl font-bold ${isUptrend ? "text-green-500" : "text-red-500"}`}>
              {trend}
            </p>
          </div>
        </div>

        {/* Confidence */}
        <div className="text-right">
          <p className="text-sm text-gray-400">AI Confidence</p>
          <p className="text-xl font-bold text-yellow-400">{confidence}%</p>
        </div>
      </div>
    </div>
  );
};

export default TrendPredictionPanel;
