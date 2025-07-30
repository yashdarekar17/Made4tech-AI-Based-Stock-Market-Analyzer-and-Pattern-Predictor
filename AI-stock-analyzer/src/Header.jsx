import React, { useEffect, useState } from 'react';
import stocklogo from './Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import profileuser from './profileuser.png';
import { Menu, X } from 'lucide-react';


const Header = () => {
  
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [Active, setActive]= useState("Dashboard");
   const navigate = useNavigate();
    const[showlogout,setshowlogout] = useState(false);
  const [islogin,setislogin] = useState(
    
     localStorage.getItem("islogin")===true
  );

  const toggleLogout = () =>{
    setshowlogout(!showlogout);
  }

  const logout = ()=>{
    localStorage.removeItem("jwt");
    localStorage.removeItem("islogin","false");
    setislogin(false);
    setshowlogout(false);
    window.dispatchEvent(new Event("loginStatusChanged"));
    navigate("/dashboard");

  }

  useEffect(()=>{
    const updateloginstatus = ()=>{
      setislogin(localStorage.getItem("islogin")=== "true");
    }

    updateloginstatus();
    window.addEventListener("loginStatusChanged",updateloginstatus);

    return ()=>{
      window.removeEventListener("loginStatusChanged",updateloginstatus);
    }
  },[])

  const userIntial = localStorage.getItem("userEmail")
  ? localStorage.getItem("userEmail")[0].toUpperCase()
  :"U";

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <>

     
       <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95vw] text-white shadow-md rounded-xl hover:bg-gray-900 z-50 transition duration-300 mt-6">

      <div className=" h-20 px-4 py-3 flex items-center justify-between">
       
        <div className="flex items-center space-x-2">
          <img
  src={stocklogo}
  alt="StockSense Logo"
  className="w-9 h-9 bg-transparent"
/>


          <h1 className="text-2xl font-bold tracking-wide text-white">StockSense AI</h1>
        </div>

        
        <nav className="hidden md:flex space-x-6 text-white">
 <Link
    to="/dashboard"
    onClick={() => setActive("Dashboard")}
    className={`hover:text-gray-300 transition ${Active === "Dashboard" ? "text-blue-500" : "text-white"}`}
  >
    Dashboard
  </Link>
          <Link to="/Predictions" className="hover:text-gray-300 transition">Predictions</Link>
          <Link to="/Portfolio" className="hover:text-gray-300 transition">Portfolio</Link>
          <Link to="/About" className="hover:text-gray-300 transition">About</Link>
        </nav>

        {/* Right section (Desktop only) */}
       <div className="hidden md:flex items-center space-x-4 relative">
  {/* Profile Icon */}
  <div className="relative">
    {islogin ? (
      <div
        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {userIntial}
      </div>
    ) : (
      <img
        src={profileuser}
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer bg-white"
        onClick={() => setShowDropdown(!showDropdown)}
      />
    )}

    {showDropdown && (
      <div className="absolute top-12 right-0 bg-white text-black rounded-md shadow-lg z-50 w-40">
        {islogin ? (
          <>
            <button
              onClick={() => handleNavigation('/Followingpage')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Following
            </button>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleNavigation('/')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Login
            </button>
            {/* <button
              onClick={() => handleNavigation('/Followingpage')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Following
            </button> */}
          </>
        )}
      </div>
    )}
  </div>

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
          <Link to="/dashboard" className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link to="/Predictions" className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Predictions</Link>
          <Link to="/Portfolio" className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/About" className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>About</Link>

          
          <Link to="/Predictions" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-white hover:bg-green-400 text-black font-semibold py-2 rounded-lg transition duration-300">
              Get Started
            </button>
          </Link>

          
            <div className="relative">
            {sh}
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
    </>

  );
};

export default Header;

