// Footer.jsx
import React from "react";

// import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-[85vw] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* TRADING SUPPORT */}
        <div>
          <h2 className="font-semibold mb-3">TRADING SUPPORT</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Account Help</a></li>
            <li><a href="#">Withdraw Funds</a></li>
            <li><a href="#">Platform Tutorials</a></li>
            <li><a href="#">Security Guide</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h2 className="font-semibold mb-3">RESOURCES</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Market News</a></li>
            <li><a href="#">Trading Strategies</a></li>
            <li><a href="#">Crypto Guide</a></li>
            <li><a href="#">Stock Analysis</a></li>
            <li><a href="#">Forex Education</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-semibold mb-3">COMPANY</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & Media</a></li>
            <li><a href="#">Legal Info</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>

        {/* FOLLOW US */}
        {/* <div>
          <h2 className="font-semibold mb-3">FOLLOW US</h2>
          <div className="flex space-x-4 text-xl text-white mt-2">
            <a href="#"><FaGithub className="hover:text-gray-400" /></a>
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
          </div>
        </div> */}
         <div className="text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Made4Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
