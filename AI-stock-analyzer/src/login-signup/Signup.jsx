import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Stocksense3 from './Stocksense3.mp4';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/users/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      alert("Signup successful");
      navigate("/dashboard"); // redirect after signup
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-screen flex bg-[#0f172a] text-white">
      <div className="w-full md:w-1/2 hidden md:block">
        <video src={Stocksense3} autoPlay muted loop playsInline className="w-full h-[690px] object-cover shadow-lg" />
      </div>

      <Link to="/dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white cursor-pointer absolute top-4 right-4 hover:text-green-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </Link>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-3">
              <span className="text-gray-300">Full Name</span>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your name" className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md" />
            </label>

            <label className="block mb-3">
              <span className="text-gray-300">Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md" />
            </label>

            <label className="block mb-3">
              <span className="text-gray-300">Password</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Confirm Password</span>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="••••••••" className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md" />
            </label>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition">Sign Up</button>
          </form>

          <p className="text-sm text-center text-yellow-400 mt-6">
            Already have an account? <Link to="/" className="underline hover:text-green-400">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
