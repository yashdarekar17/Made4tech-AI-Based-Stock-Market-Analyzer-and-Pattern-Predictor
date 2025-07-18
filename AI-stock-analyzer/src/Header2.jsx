import React, { useState } from 'react';
import stocklogo from './stocklogo.png';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import profileuser from './profileuser.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className=" h-20 px-4 py-3 flex items-center justify-between">
       
        <div className="flex items-center space-x-2">
          <img src={stocklogo} alt="StockSense Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-wide text-green-400">StockSense AI</h1>
        </div>

        
        <nav className="hidden md:flex space-x-6 text-white">
          <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
          <Link to="/Predictions" className="hover:text-yellow-400 transition">Predictions</Link>
          <Link to="/Portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
          <Link to="/About" className="hover:text-yellow-400 transition">About</Link>
        </nav>

        {/* Right section (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* Profile Icon */}
          <img
            src={profileuser}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer bg-white"
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {showDropdown && (
            <div className="absolute top-16 right-25 bg-gray-800 text-white rounded-md shadow-lg z-50 w-32">
              <button
                onClick={() => handleNavigation('/')}
                className="block w-full text-left px-4 py-2 "
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('/Followingpage')}
                className="block w-full text-left px-4 py-2"
              >
                Following
              </button>
            </div>
          )}

          
          <Link to="/Predictions">
            <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Get Started
            </button>
          </Link>

         
          <ThemeToggle />
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

     
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-gray-800 text-sm font-medium">
          <Link to="/dashboard" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link to="/Predictions" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Predictions</Link>
          <Link to="/Portfolio" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/About" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>About</Link>

          
          <Link to="/Predictions" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-2 rounded-lg transition duration-300">
              Get Started
            </button>
          </Link>

          
          <div className="relative">
            <div
              className="flex items-center gap-3 py-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img src={profileuser} alt="Profile" className="w-10 h-10 rounded-full bg-white" />
              <span className="text-white font-medium">Profile</span>
            </div>

            {showDropdown && (
              <div className="absolute  bg-white text-black rounded-md shadow-lg z-50 w-32 mt-2">
                <button
                  onClick={() => handleNavigation('/')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                > 
                  Login
                </button>
                <button
                  onClick={() => handleNavigation('/Followingpage')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Following
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
