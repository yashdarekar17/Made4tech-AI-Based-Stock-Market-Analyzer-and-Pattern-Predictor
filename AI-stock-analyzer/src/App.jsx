
import './App.css'
import Header from './Header'
import SummaryCards from './SummaryCards'
import StockChart from './StockChart'
import TrendPredictionPanel from './TrendPredictionPanel'
import Footer from './Footer'
import About from './Navbar/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard'
import Predictions from './Navbar/Predictions'
import Portfolio from './Navbar/Portfolio'




const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
       <Route path='/Predictions' element={<Predictions/>}></Route>
      <Route path='/Portfolio' element={<Portfolio/>}></Route>
      <Route path='/About' element={<About/>}></Route> 
    </Routes>
    </BrowserRouter>

    </>
    
  );
};

export default App;