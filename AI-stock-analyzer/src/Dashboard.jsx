import './App.css'
import Header from './Header'
import SummaryCards from './SummaryCards'
import StockChart from './StockChart'
import TrendPredictionPanel from './TrendPredictionPanel'
import Footer from './Footer'
import CryptoSummaryWithChart from "./CryptoSummaryWithChart";
import MarketSummary from './MarketSummary'
import {Link} from 'react-router-dom'
import Chatbot from './Chatbot'
import homepagevideo from './homepage2.mp4'
import Homepage4 from './Homepage4.mp4'
import Laptop from './Laptop.jpg'
import Dash from './Dash.jpg'
import laptop5 from './laptop5.jpg';
import Phoneimg from './Phoneimg.jpg'


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
    <div className='bg-gray-900 '>
      
    <Header/>
  <div className="relative w-full aspect-video">
  <video
    src={homepagevideo}
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
</div>


      
   
    <Chatbot/>
    <SummaryCards/>
    <StockChart/>
 <div className="relative">
  {/* Background Image */}
  <video
  src={Homepage4}
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[700px] mt-10 object-cover"
>
  Your browser does not support the video tag.
</video>

  {/* <video
    src={Homepage4}
    alt="Background"
    
  /> */}

  {/* Content Section */}
  <div className="absolute top-[20%] right-[8%] flex flex-row-reverse items-start gap-4">
    
    {/* Main Laptop with Dash overlay */}
    <div className="relative w-full max-w-[600px]">
      <img src={Laptop} alt="Laptop" className="w-full rounded-t-2xl" />
      <img
        src={Dash}
        alt="Dashboard"
        className="absolute top-[4%] left-[1%] w-[98.5%] h-[83.5%] shadow-lg "
      />
    </div>

    {/* Laptop5 with Phone overlay */}
    <div className="absolute top-20 right-0 w-[200px] h-[400px] rounded-2xl overflow-hidden">
      <img
        src={laptop5}
        alt="Laptop Side View"
        className="w-full h-full object-cover rounded-2xl"
      />
      <img
        src={Phoneimg}
        alt="Phone on Laptop"
        className="absolute top-0 left-0 w-[201px] h-full object-cover rounded-2xl"
      />
    </div>
  </div>
</div>







   
    <span className='  pb-2 mt-10 mb-2  border-b border-white max-w-[97vw] m-auto flex'>
      <h1 className="text-2xl font-bold text-white hover:text-green-400 ">📈 High Predictions Stocks</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
  <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
</svg>

       
    </span> 
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {predictions.map((p, idx) => (
        <TrendPredictionPanel
          key={idx}
          stock={p.stock}
          trend={p.trend}
          confidence={p.confidence}
        />
      ))}
      
    </div>
    <div className='flex flex-col items-center justify-center mt-5 text-center'>
        <p className='text-white font-semibold text-center'>Want to see more Predictions?Click below</p>
       <Link to='/Predictions'> <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 mb-6'>More Predictions</button></Link>
       
      </div>
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
  <main className="flex-grow px-4 pt-4 pb-2 gap-17">
    <div className='mb-4 pb-2 flex border-b border-white max-w-[97vw] m-auto'>
       <h1 className="text-2xl font-bold text-white hover:text-green-400 ">
  📈 Crypto Market Summary
</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
  <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
</svg>
    </div>
 

    <MarketSummary />
  </main>
  <Footer />
</div>
    </div>
    
    
    </>
    
  );
};

export default Dashboard;