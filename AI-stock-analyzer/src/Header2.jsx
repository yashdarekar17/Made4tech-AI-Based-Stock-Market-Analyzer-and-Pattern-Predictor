import React, { useState, useEffect } from 'react';
import stocklogo from './Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import profileuser from './profileuser.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [Active, setActive] = useState("Predictions");

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
    setMobileMenuOpen(false);
    updateActiveTab(path);
  };

  const updateActiveTab = (path = window.location.pathname) => {
    if (path.includes("Portfolio")) setActive("Portfolio");
    else if (path.includes("About")) setActive("About");
    else if (path.includes("dashboard")) setActive("Dashboard");
    else setActive("Predictions");
  };

  useEffect(() => {
    updateActiveTab();
    window.addEventListener("popstate", updateActiveTab);
    return () => window.removeEventListener("popstate", updateActiveTab);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="h-20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={stocklogo} alt="StockSense Logo" className="w-9 h-9" />
          <h1 className="text-2xl font-bold tracking-wide text-white">StockSense AI</h1>
        </div>

        <nav className="hidden md:flex space-x-6 text-white">
          <Link
            to="/dashboard"
            onClick={() => setActive("Dashboard")}
            className={`hover:transition ${Active === "Dashboard" ? "text-blue-500" : "text-white"}`}
          >
            Dashboard
          </Link>

          <Link
            to="/Predictions"
            onClick={() => setActive("Predictions")}
            className={`hover: transition ${Active === "Predictions" ? "text-blue-500" : "text-white"}`}
          >
            Predictions
          </Link>

          <Link
            to="/Portfolio"
            onClick={() => setActive("Portfolio")}
            className={`hover: transition ${Active === "Portfolio" ? "text-blue-500" : "text-white"}`}
          >
            Portfolio
          </Link>

          <Link
            to="/About"
            onClick={() => setActive("About")}
            className={`hover: transition ${Active === "About" ? "text-blue-500" : "text-white"}`}
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4 relative">
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
                className="block w-full text-left px-4 py-2"
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
            <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
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
            <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
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
              <div className="absolute bg-white text-black rounded-md shadow-lg z-50 w-32 mt-2">
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
