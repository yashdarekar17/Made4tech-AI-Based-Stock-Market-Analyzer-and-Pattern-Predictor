import React from "react";
import Coverpage from './Coverpage.png';
import { Link } from "react-router-dom";


const SignupPage = () => {
  return (
    <div className="min-h-screen w-screen flex bg-[#0f172a] text-white">
      {/* LEFT SIDE - IMAGE */}
      <div className="w-1/2 hidden md:block">
        <img
          src={Coverpage}
          alt="Signup Visual"
          className="object-cover w-full h-full"
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

      {/* RIGHT SIDE - SIGNUP FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Create Your Account</h2>

          <form>
            <label className="block mb-3">
              <span className="text-gray-300">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </label>

            <label className="block mb-3">
              <span className="text-gray-300">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </label>

            <label className="block mb-3">
              <span className="text-gray-300">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Confirm Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-yellow-400 mt-6">
            Already have an account? <Link to="/Login" className="underline hover:text-green-400">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
