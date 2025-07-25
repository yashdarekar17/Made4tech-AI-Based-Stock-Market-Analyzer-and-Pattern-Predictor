// src/pages/CheckStocksChart.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header2";
import Footer from "./Footer";

const CheckStocksChart = () => {
 const stockDetailsMap = {
  AAPL:  { name: "Apple Inc.", slug: "apple", price: 213.44, change: "+1.26", changePercent: "+0.59%" },
  NVDA:  { name: "NVIDIA Corporation", slug: "nvidia", price: 128.14, change: "+2.73", changePercent: "+2.18%" },
  GOOGL: { name: "Alphabet Inc.", slug: "alphabet", price: 193.62, change: "+0.91", changePercent: "+0.47%" },
  TSLA:  { name: "Tesla, Inc.", slug: "tesla", price: 244.23, change: "-1.58", changePercent: "-0.64%" },
  META:  { name: "Meta Platforms, Inc.", slug: "meta", price: 378.94, change: "-0.72", changePercent: "-0.19%" },
  AMZN:  { name: "Amazon.com, Inc.", slug: "amazon", price: 183.12, change: "+1.05", changePercent: "+0.58%" },
  MSFT:  { name: "Microsoft Corporation", slug: "microsoft", price: 433.66, change: "+0.87", changePercent: "+0.20%" },
  NFLX:  { name: "Netflix, Inc.", slug: "netflix", price: 640.28, change: "-0.94", changePercent: "-0.15%" },
  INTC:  { name: "Intel Corporation", slug: "intel", price: 34.21, change: "+0.52", changePercent: "+1.54%" },
  AMD:   { name: "Advanced Micro Devices, Inc.", slug: "advanced-micro-devices", price: 161.90, change: "+1.31", changePercent: "+0.82%" },
  PYPL:  { name: "PayPal Holdings, Inc.", slug: "paypal", price: 64.38, change: "-1.10", changePercent: "-1.68%" },
  QCOM:  { name: "Qualcomm Incorporated", slug: "qualcomm", price: 171.21, change: "+0.76", changePercent: "+0.45%" },
  BA:    { name: "The Boeing Company", slug: "boeing", price: 184.57, change: "-2.04", changePercent: "-1.09%" },
  KO:    { name: "The Coca-Cola Company", slug: "coca-cola", price: 63.49, change: "+0.18", changePercent: "+0.28%" },
  PEP:   { name: "PepsiCo, Inc.", slug: "pepsico", price: 170.55, change: "+0.33", changePercent: "+0.19%" },
  WMT:   { name: "Walmart Inc.", slug: "walmart", price: 69.73, change: "+0.82", changePercent: "+1.19%" },
  DIS:   { name: "The Walt Disney Company", slug: "walt-disney", price: 92.67, change: "-0.47", changePercent: "-0.50%" },
  UBER:  { name: "Uber Technologies, Inc.", slug: "uber", price: 71.13, change: "+1.58", changePercent: "+2.27%" },

  // Crypto
  BTC: { name: "Bitcoin", slug: "crypto/XTVCBTC", price: 64890.25, change: "+456.23", changePercent: "+0.71%" },
  ETH: { name: "Ethereum", slug: "crypto/XTVCETH", price: 3467.82, change: "-23.41", changePercent: "-0.67%" },
  SOL: { name: "Solana", slug: "crypto/XTVCSOL", price: 145.78, change: "+2.15", changePercent: "+1.50%" },
  BNB: { name: "Binance Coin", slug: "crypto/XTVCBNB", price: 587.63, change: "+6.22", changePercent: "+1.07%" },
  XRP: { name: "Ripple", slug: "crypto/XTVCXRP", price: 0.637, change: "-0.008", changePercent: "-1.24%" },
  DOGE: { name: "Dogecoin", slug: "crypto/XTVCDOGE", price: 0.153, change: "+0.004", changePercent: "+2.63%" },
  ADA: { name: "Cardano", slug: "crypto/XTVCADA", price: 0.418, change: "+0.006", changePercent: "+1.46%" }
};




  const { symbol } = useParams();
  const stockInfo = stockDetailsMap[symbol] || {name: symbol};

  useEffect(() => {
    const container = document.getElementById("tv-symbol-chart-container");
    if (container && symbol) {
      container.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "3",
        hide_top_toolbar: false,
        save_image: false,
        enable_publishing: false,
        support_host: "https://www.tradingview.com",
      });
      container.appendChild(script);
    }
  }, [symbol]);

  return (
    <>
      <Header />
      <div className="bg-[#0f172a] min-h-screen text-white p-6">
        <div className="flex justify-between items-center px-6 py-4">
  
  <div className="flex gap-6 items-center">
    <img
      src={`https://s3-symbol-logo.tradingview.com/${stockDetailsMap[symbol]?.slug}--big.svg`}
      alt={stockInfo.name}
      className="w-32 h-32 object-contain rounded-full"
    />

    <div>
      <h1 className="text-4xl font-semibold">{stockInfo.name}</h1>

      <div className="flex items-end justify-end gap-2 mt-4">
       <div className="flex items-end gap-1">
       <span className="text-5xl font-semibold">{stockDetailsMap[symbol]?.price}</span>
      <span className=" font-medium mb-1">USD</span>
      </div>
        <div className="flex gap-2 ml-2">
       <span
    className={`text-2xl font-medium ${
      stockDetailsMap[symbol]?.change?.startsWith('-') ? 'text-red-500' : 'text-green-500'
    }`}
  >{stockDetailsMap[symbol]?.change}</span>

        <span className={`text-2xl font-medium ${stockDetailsMap[symbol]?.changePercent?.startsWith('-')? 'text-red-500':'text-green-500'}`}>{stockDetailsMap[symbol]?.changePercent}</span>
      </div>
      </div>
      
    </div>
  </div>

  {/* Right section: Button */}
  <div>
    <a href={`https://www.tradingview.com/chart/?symbol=${symbol}`}>
      <button className="bg-white  text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-300 transition">
      Full Charts
    </button>
    </a>
    
  </div>
</div>

<div className=" mt-7 border-b border-white max-w-[97vw] "></div>

          
          
        
          
        
          <div className="mb-5 mt-20 ml-4 flex">
             <h1 className="text-2xl font-bold" >{symbol} chart</h1>
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
  <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
</svg>
          </div>
         

      
        <div
          id="tv-symbol-chart-container"
          className="h-[600px] w-full bg-black rounded-xl overflow-hidden"
        ></div>

        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-6">
          <a
            href={`https://www.tradingview.com/chart/?symbol=${symbol}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg w-40">
              Buy
            </button>
          </a>
          <a
            href={`https://www.tradingview.com/chart/?symbol=${symbol}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg w-40">
              Sell
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckStocksChart;
