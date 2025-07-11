import React from "react";

const SummaryCards = () => {

    const summaryData = [
        { title: 'Market Sentiment', value: 'Bullish', icon: '📊', color: 'text-green-500' },
        { title: 'Portfolio Value', value: '₹2,15,000', icon: '💰', color: 'text-blue-500' },
        { title: 'Gains/Losses', value: '+₹12,350', icon: '📈', color: 'text-emerald-500' },
        { title: 'Risk Index', value: 'Moderate (52%)', icon: '⚠️', color: 'text-yellow-400' },
      ];

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-4">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition"
            >
              <div>
                <h4 className="text-sm text-gray-400">{item.title}</h4>
                <p className={`text-xl font-bold mt-1 ${item.color}`}>{item.value}</p>
              </div>
              <span className="text-3xl">{item.icon}</span>
            </div>
          ))}
        </div>
      );
}

export default SummaryCards;