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
    <div className="bg-white dark:bg-[#111827] text-black dark:text-white w-screen overflow-x-hidden px-0 ">
      <h2 className="text-2xl text-white font-bold tracking-tight mb-6 mt-6 border-b border-gray-700 pb-2 w-[98vw] m-auto">
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
