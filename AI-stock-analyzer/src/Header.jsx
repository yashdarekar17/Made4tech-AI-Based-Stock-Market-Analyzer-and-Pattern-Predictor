import React, { useState } from 'react';
import stocklogo from './stocklogo.png';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import profileuser from './profileuser.png';
// If you're using React Router in future, you can replace <a> with <Link>

const Header = () => {
  const navigate = useNavigate();
  const[Showdropdown,setShowdropdown] = useState(false);

  const handlenavigation = (path)=>{
    navigate(path);
    setShowdropdown(false);


  }
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-9xl h-20 mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <img src={stocklogo} alt="StockSense Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-wide text-green-400">StockSense AI</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-white">
          <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
          <Link to="/Predictions" className="hover:text-yellow-400 transition">Predictions</Link>
          <Link to="/Portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
          <Link to='/About' className="hover:text-yellow-400 transition">About</Link>
        </nav>
        <div className="flex items-center space-x-4 relative">

          {/* 👤 Profile Image (Click to toggle dropdown) */}
          
          <img
            src={profileuser}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer bg-white"
            onClick={()=> setShowdropdown(!Showdropdown)}
            
          />

          {Showdropdown && (
            <div className='absolute top-16 right-25 bg-white text-black rounded-md shadow-lg z-50 w-32'>
               <button onClick={()=>handlenavigation('/')} 
                className='block w-full text-left px-4 py-2 hover:bg-gray-100 '
               >
                Login
               </button>

               <button onClick={()=>handlenavigation('/Followingpage')}
               className='block w-full text-left px-4 py-2 hover:bg-gray-100'>
                Following
               </button>
            </div>
          )

          }

          

          {/* 🚀 Get Started Button */}
          <Link to='/Predictions'>
           <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
          </Link>
          
          <ThemeToggle />
        </div>
        

      </div>
    </header>
  );
};

export default Header;


