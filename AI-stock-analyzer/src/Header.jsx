import React from 'react';
import stocklogo from './stocklogo.png';
import { Link } from 'react-router-dom';
import About from './Navbar/About'
// If you're using React Router in future, you can replace <a> with <Link>

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl h-20 mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <img src={stocklogo} alt="StockSense Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-wide text-green-400">StockSense AI</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-white">
          <Link to="/" className="hover:text-yellow-400 transition">Dashboard</Link>
          <Link to="/Predictions" className="hover:text-yellow-400 transition">Predictions</Link>
          <Link to="/Portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
          <Link to='/About' className="hover:text-yellow-400 transition">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
