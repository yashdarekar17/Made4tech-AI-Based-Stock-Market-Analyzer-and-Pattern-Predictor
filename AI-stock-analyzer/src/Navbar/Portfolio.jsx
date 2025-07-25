import React, { useState } from "react";
import Header2 from "../Header2";
import Footer from "../Footer";

const tradingMetrics = [
  { label: "Account Balance", value: "99,887.39" },
  { label: "Equity", value: "99,887.39" },
  { label: "Realized P&L", value: "-112.61", negative: true },
  { label: "Unrealized P&L", value: "0.00" },
  { label: "Account Margin", value: "0.00" },
  { label: "Available Funds", value: "99,887.39" },
  { label: "Orders Margin", value: "0.00" },
];

const subTabs = ["All", "Working", "Inactive", "Filled", "Cancelled", "Rejected"];

const Portfolio = () => {
  const [Active, setActive] = useState("Orders");

  return (
    <>
      <Header2 />
      <div className="bg-gray-900 text-white min-h-screen p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 bg-gray-900 p-4 rounded-lg">
  {/* Left section: Title + Icon */}
  <div className="flex items-center gap-1">
    <h2 className="text-2xl font-bold text-white">Trading Analysis</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
    </svg>
  </div>

  {/* Right section: Login button */}
  <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
    Login
  </button>
</div>

        <div className="max-w-[97vw] border-b border-white mt-5"></div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6 mt-6 text-sm">
          {tradingMetrics.map((item, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg">
              <p className="text-gray-400">{item.label}</p>
              <p className={`${item.negative ? "text-red-400" : "text-green-400"} font-semibold`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main Tabs */}
        <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4 text-sm">
          {["Orders", "Positions", "History", "Account History", "Trading Journal"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-gray-400 hover:text-white ${
                Active === tab ? "border-b-2 text-white border-white" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sub Tabs */}
        {Active === "Orders" && (
          <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4 text-sm">
            {subTabs.map((tab, i) => (
              <button key={i} className={`text-gray-300 hover:text-yellow-400`}>
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Tab Content */}
        {Active === "Orders" && (
          <div className="overflow-x-auto text-sm">
            <table className="w-full table-auto border-collapse text-left">
              <thead className="bg-gray-800">
                <tr>
                  {[
                    "Symbol",
                    "Side",
                    "Type",
                    "Qty",
                    "Limit Price",
                    "Stop Price",
                    "Fill Price",
                    "Take Profit",
                    "Stop Loss",
                    "Instruction",
                    "Status",
                    "Placing Time",
                    "Order ID",
                    "Expiry",
                    "Leverage",
                  ].map((heading, index) => (
                    <th key={index} className="px-3 py-2 border-b border-gray-700">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={15} className="text-center py-6 text-gray-500">
                    There is no trading data here yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Placeholder Content for Other Tabs */}
        {Active === "Positions" && (
          <>
          <div className=" overflow-x-auto text-sm">
            <table className="w-full table-auto border-collapse text-left">
              <thead className="bg-gray-800">
                <tr>
                  {
                    [
                    "Symbol",
                    "Side",
                    "Type",
                    "Qty",
                    "Limit Price",
                    "Stop Price",
                    "Fill Price",
                    "Take Profit",
                    "Stop Loss",
                    "Instruction",
                    "Status",
                    "Placing Time",
                    "Order ID",
                    "Expiry",
                    "Leverage",
                  ].map((heading,index)=>{
                    return(
                      <th key={index} className="px-3 py-2 border-b border-gray-700">
                        {heading}
                      </th>
                    )
                  })
                  }
                </tr>

              </thead>
            </table>

          </div>
          <div className="text-center text-gray-400 py-10">No open positions available.</div>
          </>
        )}
        {Active === "History" && (
          <>
          <div className="overflow-x-auto text-sm">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-800">
                <tr>
                  {["Symbol",
                    "Side",
                    "Qty",
                    "Limit price",
                    "Stop price",
                    "Fill price",
                    "Status",
                    "Leverage",
                    "Margin",
                    "Placing Time",
                    "Closing Time"
                  ].map((heading,index)=>{
                    return(
                      <th key={index} className="px-3 py-2 border-b border-gray-700">
                        {heading}
                      </th>
                    )
                  })}
                </tr>
              </thead>
            </table>
          </div>
          <div className="text-center text-gray-400 py-10">No historical data found.</div>
          </>
          
        )}
        {Active === "Account History" && (
          <>
          <div className="overflow-x-auto text-sm">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-800">
                <tr>
                  {["Time",
                    "Balance Before",
                    "Balance After",
                    "Realized P&L",
                    "Action",
                    
                  ].map((heading,index)=>{
                    return(
                      <th key={index} className="px-3 py-2 border-b border-gray-700">
                        {heading}
                      </th>
                    )
                  })}
                </tr>
              </thead>
            </table>
          </div>
          <div className="text-center text-gray-400 py-10">No account activity recorded.</div>
          </>
          
        )}
        {Active === "Trading Journal" && (
          <>
          <div className="overflow-x-auto text-sm">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-800">
                <tr>
                  {["Time",
                    "Text",
                  ].map((heading,index)=>{
                    return(
                      <th key={index} className="px-3 py-2 border-b border-gray-700">
                        {heading}
                      </th>
                    )
                  })}
                </tr>
              </thead>
            </table>
          </div>
           <div className="text-center text-gray-400 py-10">No journal entries yet.</div>
          </>
         
        )}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
