 import React, { useEffect, useState } from "react";

const StockChart = () => {
  const [Active, setActive] = useState("Crypto");
  const [selectedSymbol, setSelectedSymbol] = useState("BITSTAMP:BTCUSD");
  const [interval, setInterval] = useState("D");

 const data = [
  {
    name: "Bitcoin",
    price: 64890.25,
    change: 2.34,
    logo: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    symbol: "BITSTAMP:BTCUSD",
     symbol2:"BTC",
    type: "Crypto",
  },
  {
    name: "Ethereum",
    price: 3450.67,
    change: 1.89,
    logo: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    symbol: "BITSTAMP:ETHUSD",
     symbol2:"ETH",
    type: "Crypto",
  },
  {
    name: "Solana",
    price: 172.34,
    change: -0.72,
    logo: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
    symbol: "BINANCE:SOLUSDT",
     symbol2:"SOL",
    type: "Crypto",
  },
  {
    name: "Ripple (XRP)",
    price: 0.634,
    change: 1.25,
    logo: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
    symbol: "BINANCE:XRPUSDT",
     symbol2:"XRP",
    type: "Crypto",
  },
  {
    name: "Cardano",
    price: 0.458,
    change: 0.97,
    logo: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
    symbol: "BINANCE:ADAUSDT",
     symbol2:"ADA",
    type: "Crypto",
  },

   {
    name: "Apple.",
    price: 234.56,
    change: 1.28,
    logo: "https://logo.clearbit.com/apple.com",
    symbol: "NASDAQ:AAPL",
    symbol2:"AAPL",
    type: "Stocks",
  },
  {
    name: "Microsoft.",
    price: 422.13,
    change: 0.95,
    logo: "https://logo.clearbit.com/microsoft.com",
    symbol: "NASDAQ:MSFT",
     symbol2:"MSFT",
    type: "Stocks",
  },
  {
    name: "Amazon.com.",
    price: 189.87,
    change: -0.54,
    logo: "https://logo.clearbit.com/amazon.com",
    symbol: "NASDAQ:AMZN",
     symbol2:"AMZN",
    type: "Stocks",
  },
  {
    name: "Tesla.",
    price: 278.41,
    change: -1.13,
    logo: "https://logo.clearbit.com/tesla.com",
    symbol: "NASDAQ:TSLA",
     symbol2:"TSLA",
    type: "Stocks",
  },
  {
    name: "Alphabet.",
    price: 149.12,
    change: 0.73,
    logo: "https://logo.clearbit.com/google.com",
    symbol: "NASDAQ:GOOGL",
     symbol2:"GOOGL",
    type: "Stocks",
  },
];


  useEffect(() => {
  const container = document.getElementById("tv-chart-container");
  if (container && selectedSymbol) {
    container.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: selectedSymbol,
      interval: interval, // Use selected interval here
      timezone: "Etc/UTC",
      theme: "light",
      style: "3",
      hide_top_toolbar: true,
      save_image: false,
      support_host: "https://www.tradingview.com",
    });
    container.appendChild(script);
  }
}, [selectedSymbol, interval]); // add interval as dependency


  return (
    <div className="bg-gray-900 w-[99vw] overflow-x-hidden px-0">
      {/* Header */}
      <div className="pb-2 mt-6 mb-6 border-b border-white max-w-[97vw] m-auto flex gap-2 items-center">
        <h2 className="text-2xl font-bold text-white hover:text-green-400">
          Market Summary Analysis
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z" />
        </svg>
      </div>

      

      {/* Tabs */}
      <div className="mb-5 ml-8 mr-8 flex gap-2">
        <button
          onClick={() => {
            setActive("Crypto");
            setSelectedSymbol("BITSTAMP:BTCUSD");
          }}
          className={`w-20 h-10 text-lg font-semibold ${
            Active === "Crypto"
              ? "bg-gray-700 text-white border-black rounded-xl"
              : "bg-gray-900 text-white"
          }`}
        >
          Crypto
        </button>
        <button
          onClick={() => {
            setActive("Stocks");
            setSelectedSymbol("NASDAQ:AAPL");
           
          }}
          className={`w-20 h-10 text-lg font-semibold ${
            Active === "Stocks"
              ? "bg-gray-700 text-white border-black rounded-xl"
              : "bg-gray-900 text-white"
          }`}
        >
          Stocks
        </button>
      </div>

      {/* Boxes */}
      <div className="flex flex-wrap justify-between gap-6 p-6">
  {data
    .filter((item) => item.type === Active)
    .map((item, index) => (
      <button
        key={index}
        onClick={() => setSelectedSymbol(item.symbol)}
        className={`bg-gray-800 rounded-full p-4 w-64 flex items-center gap-4 shadow-lg border border-gray-700 transition duration-200 ${
          selectedSymbol === item.symbol ? "ring-2 ring-green-500" : ""
        }`}
      >
        <img
          src={item.logo}
          alt={item.name}
          className="w-12 h-12 rounded-full object-contain"
        />
        <div className="flex justify-between items-center w-full">
          <div>
            <a href={`/chart/${item.symbol2}`}><h3 className="text-white font-semibold text-sm md:text-base">{item.name}</h3></a>
             <p className="text-green-400 text-sm">${item.price.toLocaleString()}</p>
          </div>
          <p
            className={`text-sm font-medium ${
              item.change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {item.change >= 0 ? "+" : ""}
            {item.change}%
          </p>
        </div>
      </button>
    ))}
</div>


      {/* Chart */}
      <div
        id="tv-chart-container"
        className="h-[500px] w-[100vw] overflow-hidden"
      />
    </div>
  );
};

export default StockChart;
