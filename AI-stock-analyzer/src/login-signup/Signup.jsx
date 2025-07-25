import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import stocklogo from "../Logo.png";

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
      navigate("/dashboard");
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 relative">

      {/* Header with logo and close button */}
      <div className="absolute top-6 left-0 w-full px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={stocklogo} alt="Logo" className="w-7 h-7" />
          <div className="text-white font-bold text-xl tracking-wide">StocksenseAI</div>
        </div>

        <Link to="/dashboard">
          <X size={28} color="white" className="hover:opacity-70" />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-10 mt-24 text-center">Create Your Account</h1>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Username</label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Name"
            className="w-full px-5 py-3 bg-gray-800 border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-5 py-3 bg-gray-800 border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-5 py-3 bg-gray-800 border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            className="w-full px-5 py-3 bg-gray-800 border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition duration-300"
        >
          Sign Up
        </button>
      </form>

      {/* Login Link */}
      <p className="text-sm text-center text-gray-400 mt-6">
        Already have an account?{" "}
        <Link to="/" className="underline hover:text-white">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
