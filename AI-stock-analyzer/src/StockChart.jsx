 import React, { useEffect } from "react";

const StockChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true, // this must stay true
      symbol: "BITSTAMP:BTCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "3",
      hide_top_toolbar: true,
      save_image: false,
      support_host: "https://www.tradingview.com",
    });

    const container = document.getElementById("tv-chart-container");
    if (container) {
      container.innerHTML = ""; // Clear old
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-gray-900 w-[99vw] overflow-x-hidden px-0 ">
      <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-700 pb-2 mt-6 mb-6 max-w-[97vw] m-auto">
      📈 Market Summary Analysis
      </h2>

      <div
        id="tv-chart-container"
        className="h-[500px] w-[100vw] overflow-hidden"
      />
    </div>
  );
};

export default StockChart;