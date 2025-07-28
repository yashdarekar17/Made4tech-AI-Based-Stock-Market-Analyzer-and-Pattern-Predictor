import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import stocklogo from './Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      {/* Top Support Row */}
      <div className="max-w-[97vw] mx-auto flex flex-col md:flex-row items-center justify-between px-6 pb-6 border-b border-gray-700">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white">Here when you need us</h2>
          <p className="text-gray-400 text-sm">Our support team is on hand 24/5 to answer any of your questions.</p>
        </div>
        
      </div>

      {/* Grid Section */}
      <div className="max-w-[97vw] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 min-h-[65vh]">
        {/* Left Branding */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="flex gap-3 mb-3">
              <img src={stocklogo} alt="" className="w-10 h-10 " />
          <h1 className="text-4xl font-extrabold text-white mb-3">StockSenseAI</h1>
          </div>

          <div className="flex gap-5 text-xl">
          <FaFacebookF className="hover:text-green-400 cursor-pointer" />
          <FaInstagram className="hover:text-green-400 cursor-pointer" />
          <FaTwitter className="hover:text-green-400 cursor-pointer" />
          <FaLinkedin className="hover:text-green-400 cursor-pointer" />
          <FaYoutube className="hover:text-green-400 cursor-pointer" />
        </div>
          
    
        </div>

        {/* Right Links - 12 Sections */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 text-sm">
          {[
  {
    title: "Trading",
    links: ["Overview", "Markets", "Instruments", "Fees"]
  },
  {
    title: "Platforms",
    links: ["Web App", "Mobile App", "API Access", "Updates"]
  },
  {
    title: "Learn",
    links: ["Tutorials", "Webinars", "Articles", "Glossary"]
  },
  {
    title: "Insights",
    links: ["Market News", "Reports", "Analyst Picks", "Trends"]
  },
  {
    title: "Promos",
    links: ["Offers", "Referral Program", "Bonuses", "Competitions"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"]
  },
  {
    title: "Security",
    links: ["Encryption", "2FA", "Account Protection", "Bug Bounty"]
  },
  {
    title: "Support",
    links: ["Help Center", "Chat", "Tickets", "FAQs"]
  },
  {
    title: "Resources",
    links: ["Blog", "Documentation", "Guides", "Community"]
  },
  {
    title: "Partners",
    links: ["Affiliates", "IBs", "White Label", "Resellers"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Licenses", "Compliance"]
  },
  {
    title: "Tools",
    links: ["Calculators", "Screeners", "Calendar", "Alerts"]
  }
].map((section, idx) => (
  <div key={idx}>
    <h3 className="text-white font-bold mb-2">{section.title}</h3>
    <ul className="space-y-1 text-gray-300">
      {section.links.map((link, linkIdx) => (
        <li key={linkIdx} className="hover:text-green-400 cursor-pointer">{link}</li>
      ))}
    </ul>
  </div>
))}

        </div>
      </div>

      {/* Social Media Row */}
      <div className="max-w-[97vw] mx-auto px-6 border-t border-gray-700 pt-6 pb-4">
        <div className="flex justify-center gap-6 text-xl mb-4">
          <FaFacebookF className="hover:text-green-400 cursor-pointer" />
          <FaInstagram className="hover:text-green-400 cursor-pointer" />
          <FaTwitter className="hover:text-green-400 cursor-pointer" />
          <FaLinkedin className="hover:text-green-400 cursor-pointer" />
          <FaYoutube className="hover:text-green-400 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Policies + Tagline */}
      <div className="max-w-[97vw] mx-auto px-6 text-sm text-gray-400 pb-12">
        <div className="flex flex-wrap justify-center gap-4 text-center mb-4">
          <a href="#" className="hover:text-green-400">Privacy Policy</a>
          <a href="#" className="hover:text-green-400">Cookie Policy</a>
          <a href="#" className="hover:text-green-400">Terms of Use</a>
          <a href="#" className="hover:text-green-400">Risk Disclosures</a>
          <a href="#" className="hover:text-green-400">Client Policy</a>
        </div>

        {/* Tagline */}
        <p className="text-center font-bold text-5xl text-white mt-4">
          Let AI Read The Market. You Read The Gain.
        </p>

        <p className="text-center text-gray-500 max-w-4xl mx-auto text-xs mt-4">
          <strong className="text-white">Risk Warning:</strong> Trading involves significant risk of loss and is not suitable for all investors. Make sure you fully understand all risks before investing.
        </p>
        <p className="text-center mt-2 text-xs text-gray-500">
          © {new Date().getFullYear()} StockSense Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
