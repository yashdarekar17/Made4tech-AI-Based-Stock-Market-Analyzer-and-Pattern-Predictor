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
      <div className=" pb-2 mt-6 mb-6 border-b border-white max-w-[97vw] m-auto flex gap-0">
         <h2 className="text-2xl font-bold text-white hover:text-green-400">
      📈 Market Summary Analysis
      </h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white" className="">
  <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
</svg>
      </div>
     

      <div
        id="tv-chart-container"
        className="h-[500px] w-[100vw] overflow-hidden"
      />
    </div>
  );
};

export default StockChart;