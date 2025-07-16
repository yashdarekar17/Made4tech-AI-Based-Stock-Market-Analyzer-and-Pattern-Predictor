import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white px-6 py-10 border-t border-gray-800 ">
      <div className="max-w-[85vw] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* TRADING SUPPORT */}
        <div>
          <h2 className="font-semibold text-yellow-400 mb-3">TRADING SUPPORT</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-400">Account Help</a></li>
            <li><a href="#" className="hover:text-green-400">Withdraw Funds</a></li>
            <li><a href="#" className="hover:text-green-400">Platform Tutorials</a></li>
            <li><a href="#" className="hover:text-green-400">Security Guide</a></li>
            <li><a href="#" className="hover:text-green-400">Refund Policy</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h2 className="font-semibold text-yellow-400 mb-3">RESOURCES</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-green-400">Market News</a></li>
            <li><a href="#" className="hover:text-green-400">Trading Strategies</a></li>
            <li><a href="#" className="hover:text-green-400">Crypto Guide</a></li>
            <li><a href="#" className="hover:text-green-400">Stock Analysis</a></li>
            <li><a href="#" className="hover:text-green-400">Forex Education</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-semibold text-yellow-400 mb-3">COMPANY</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Careers</a></li>
            <li><a href="#" className="hover:text-green-400">Press & Media</a></li>
            <li><a href="#" className="hover:text-green-400">Legal Info</a></li>
            <li><a href="#" className="hover:text-green-400">Investor Relations</a></li>
          </ul>
        </div>

       
         <div>
          <h2 className="font-semibold text-yellow-400 mb-3">FOLLOW US</h2>
          <div className="flex space-x-4 text-xl mt-2">
            <a href="#" className="text-gray-300 hover:text-green-400"><FaGithub /></a>
            <a href="#" className="text-gray-300 hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-blue-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-green-400 font-semibold">Made4Tech</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
