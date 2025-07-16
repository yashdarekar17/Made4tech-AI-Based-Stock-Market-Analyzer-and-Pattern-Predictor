import React from "react";
import Coverpage from './Coverpage.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stocksense3 from './Stocksense3.mp4'


const LoginPage = () => {
    const [email,setEmail] =useState('');
    const[password,setPassword]=useState('');
    const Navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault(); // ✅ Uncomment this to prevent page reload
        alert(`Successfully logged in`);
        console.log("Email:",email , "password:",password);
        Navigate('/dashboard'); // ✅ lowercase function
      };

    
  return (
    <div className="min-h-screen w-screen flex bg-[#0f172a] text-white">
      {/* LEFT SIDE - IMAGE */}
      <div className="w-full md:w-1/2 hidden md:block">
  <video
    src={Stocksense3}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-[690px] object-cover  shadow-lg"
  />
</div>
    <a href="/dashboard">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-7 h-7 text-white cursor-pointer absolute top-4 right-4 hover:text-green-400 transition"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="3"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>
    </a>



    
         
      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div>
      
      </div>
        <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Login to Your Account</h2>

          <form onSubmit={handlelogin}>
            <label className="block mb-3">
              <span className="text-gray-300">Email</span>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="you@example.com"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Password</span>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="••••••••"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
              />
            </label>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-yellow-400 mt-6">
            ⚠️ Don’t have an account? <a href="/Signup" className="underline hover:text-green-400">Sign up</a>
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default LoginPage;
