import React from 'react';
import stocklogo from './stocklogo.png';
 // If you're using React Router

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl h-20 mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <img src={stocklogo} alt="StockSense Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-wide">StockSense AI</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="#dashboard" className="hover:text-yellow-400 transition">Dashboard</a>
          <a href="#predictions" className="hover:text-yellow-400 transition">Predictions</a>
          <a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a>

          {/* If using React Router, use Link */}
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
