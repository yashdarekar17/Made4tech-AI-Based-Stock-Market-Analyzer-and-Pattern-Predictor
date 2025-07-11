import './App.css'
import Header from './Header'
import SummaryCards from './SummaryCards'
import StockChart from './StockChart'
import TrendPredictionPanel from './TrendPredictionPanel'
import Footer from './Footer'


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

const Dashboard = () => {
  return (
    <>
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
    <Footer/>
    
    </>
    
  );
};

export default Dashboard;