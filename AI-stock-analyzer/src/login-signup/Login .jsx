import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { X } from "lucide-react";
import axios from "axios";
import stocklogo from '../Logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // src/login-signup/Login .jsx

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    // The endpoint is now /auth/signIn
    const response = await axios.post("http://localhost:8081/auth/signIn", {
      email,
      password,
    });

    // If login is successful, the backend sends a JWT token
    if (response.data.jwt) {
      localStorage.setItem('jwt', response.data.jwt); // Store the token
      alert("Successfully logged in");
      navigate("/dashboard");
    } else {
      // Handle cases like two-factor auth if you implement it
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
    alert(error.response?.data?.message || "Login failed. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 relative">

      {/* Top Logo and Close */}
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
      <h1 className="text-3xl font-semibold mb-10 mt-24 text-center">Login to Your Account</h1>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-5 py-3 bg-gray-800 border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-5 py-3 bg-gray-800 border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition duration-300"
        >
          Sign In
        </button>
      </form>

      {/* Signup Link */}
      <p className="text-sm text-center text-gray-400 mt-6">
        Don’t have an account?{" "}
        <Link to="/Signup" className="underline hover:text-white">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
