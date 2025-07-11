import './App.css'
import Header from './Header'
import SummaryCards from './SummaryCards'
import StockChart from './StockChart'
import TrendPredictionPanel from './TrendPredictionPanel'
import Footer from './Footer'
import CryptoSummaryWithChart from "./CryptoSummaryWithChart";
import MarketSummary from './MarketSummary'


const predictions = [
  { stock: "Apple (AAPL)", trend: "Uptrend", confidence: 92.5 },
  { stock: "Tesla (TSLA)", trend: "Downtrend", confidence: 86.4 },
  { stock: "Amazon (AMZN)", trend: "Uptrend", confidence: 78.9 },
  { stock: "Google (GOOGL)", trend: "Uptrend", confidence: 89.1 },
  { stock: "Meta (META)", trend: "Downtrend", confidence: 81.2 },
  { stock: "Reliance (RELI)", trend: "Uptrend", confidence: 90.7 },
  { stock: "Infosys (INFY)", trend: "Downtrend", confidence: 84.3 },
  { stock: "HDFC Bank (HDFCB)", trend: "Uptrend", confidence: 88.5 },
  { stock: "Nvidia (NVDA)", trend: "Uptrend", confidence: 93.2 },
];
const dummyCrypto = {
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    price: 64890.25,
    change24h: -2.34,
    marketCap: 1270000000000,
    volume24h: 34000000000,
    supply: 19400000,
    alert: false,
    sparkline: [64000, 64200, 64500, 64800, 65000, 64890, 64600, 64250, 64000],
  };
  

const Dashboard = () => {
  return (
    <>
    <div className='bg-gray-800'>
    <Header/>
    <SummaryCards/>
    <StockChart/>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {predictions.map((p, idx) => (
        <TrendPredictionPanel
          key={idx}
          stock={p.stock}
          trend={p.trend}
          confidence={p.confidence}
        />
      ))}
    </div>
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
  <main className="flex-grow px-4 pt-4 pb-2 gap-17">
  <h1 className="text-2xl text-white font-bold tracking-tight mb-4 border-b border-gray-700 pb-2">
  📈 Crypto Market Summary
</h1>

    <MarketSummary />
  </main>
  <Footer />
</div>
    </div>
    
    
    </>
    
  );
};

export default Dashboard;