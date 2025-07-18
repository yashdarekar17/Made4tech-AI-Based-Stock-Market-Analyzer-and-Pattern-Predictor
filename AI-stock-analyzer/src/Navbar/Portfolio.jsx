import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header2 from "../Header2";
import Footer from "../Footer";

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171"];

const samplePortfolio = [
  { ticker: "AAPL", quantity: 10, buyPrice: 145, currentPrice: 190, type: "Stock" },
  { ticker: "GOOGL", quantity: 5, buyPrice: 1200, currentPrice: 1350, type: "Stock" },
  { ticker: "TSLA", quantity: 8, buyPrice: 650, currentPrice: 610, type: "Stock" },
  { ticker: "BND", quantity: 20, buyPrice: 85, currentPrice: 88, type: "Bond" },
];

const Portfolio= () => {
  const [portfolio, setPortfolio] = useState(samplePortfolio);

  const gainLoss = (item) => ((item.currentPrice - item.buyPrice) * item.quantity).toFixed(2);

  const riskScore = 68; // simulated score

  const investmentTypeData = [
    { name: "Stocks", value: 85 },
    { name: "Bonds", value: 15 },
  ];

  const rebalanceBefore = [
    { name: "Stocks", value: 85 },
    { name: "Bonds", value: 15 },
  ];

  const rebalanceAfter = [
    { name: "Stocks", value: 60 },
    { name: "Bonds", value: 30 },
    { name: "Gold", value: 10 },
  ];

  return (
    <>
      <Header2/>
       <div className="bg-gray-800 text-white min-h-screen p-8">
      <h1 className="text-3xl text-yellow-400 font-bold text-center mb-8">📊 Portfolio Analyzer</h1>

      {/* Portfolio Table */}
      <div className="overflow-x-auto bg-gray-900 p-6 rounded-xl shadow-md">
        <table className="w-full table-auto text-left">
          <thead className="text-yellow-400">
            <tr>
              <th>Ticker</th>
              <th>Qty</th>
              <th>Buy Price</th>
              <th>Current Price</th>
              <th>Gain/Loss</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item) => (
              <tr key={item.ticker} className="border-b border-gray-900">
                <td>{item.ticker}</td>
                <td>{item.quantity}</td>
                <td>${item.buyPrice}</td>
                <td>${item.currentPrice}</td>
                <td className={gainLoss(item) >= 0 ? "text-green-400" : "text-red-400"}>${gainLoss(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Risk Profile + Investment Pie */}
      <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">🧠 Risk Profile Analysis</h2>
          <p className="mb-2">Risk Score: <span className="text-yellow-400 font-bold">{riskScore}/100</span></p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={investmentTypeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {investmentTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* AI Suggestions */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">🤖 AI Suggestions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Reduce TSLA holdings to limit volatility</li>
            <li>Increase bond allocation to reduce risk</li>
            <li>Consider adding Gold ETF for diversification</li>
          </ul>
        </div>
      </div>

      {/* Rebalancing Visualization */}
      <div className="mt-10 bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-yellow-300 mb-4">🔁 Portfolio Rebalancing</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 text-center">
            <h3 className="mb-2">Before</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={rebalanceBefore}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={70}
                  label
                >
                  {rebalanceBefore.map((entry, index) => (
                    <Cell key={`bcell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full md:w-1/2 text-center">
            <h3 className="mb-2">After</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={rebalanceAfter}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={70}
                  label
                >
                  {rebalanceAfter.map((entry, index) => (
                    <Cell key={`acell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Portfolio;
