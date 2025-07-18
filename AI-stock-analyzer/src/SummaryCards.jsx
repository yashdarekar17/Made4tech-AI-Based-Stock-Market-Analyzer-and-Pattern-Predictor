import React from "react";
import "./App.css"; // Make sure this includes the animation CSS

const SummaryCards = () => {
  const summaryData = [
    {
      title: 'Market Sentiment',
      value: 'Bullish',
      icon: '📊',
      color: 'text-green-500'
    },
    {
      title: 'Portfolio Value',
      value: '₹2,15,000',
      icon: '💰',
      color: 'text-white'
    },
    {
      title: 'Gains/Losses',
      value: '+₹12,350',
      icon: '📈',
      color: 'text-green-500'
    },
    {
      title: 'Risk Index',
      value: 'Moderate (52%)',
      icon: '⚠️',
      color: 'text-yellow-400'
    },
    {
      title: 'Top Gainer',
      value: 'TCS +5.2%',
      icon: '🚀',
      color: 'text-green-400'
    },
    {
      title: 'Top Loser',
      value: 'Zomato -3.8%',
      icon: '📉',
      color: 'text-red-500'
    },
    {
      title: 'Volatility Index',
      value: 'Low (18.3)',
      icon: '🌪️',
      color: 'text-blue-400'
    },
    {
      title: 'Cash Reserve',
      value: '₹45,000',
      icon: '🏦',
      color: 'text-white'
    },
  ];

  return (
    <div className="overflow-hidden w-full bg-[#0f172a] py-6 px-4 rounded-2xl">
      <div className="flex gap-6 custom-scroll-animation w-max">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] text-white rounded-2xl shadow-md p-5 min-w-[250px] flex items-center justify-between hover:shadow-lg transition duration-300 border border-gray-700 hover:scale-105 cursor-pointer ease-in-out transform"
          >
            <div>
              <h4 className="text-sm text-gray-400">{item.title}</h4>
              <p className={`text-xl font-bold mt-1 ${item.color}`}>
                {item.value}
              </p>
            </div>
            <span className="text-3xl">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
