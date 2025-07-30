import React, { useState, useEffect } from "react";
import Header2 from "../Header2";
import Footer from "../Footer";

const subTabs = ["All", "Working", "Inactive", "Filled", "Cancelled", "Rejected"];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("Orders");
    const [wallet, setWallet] = useState(null);
    const [orders, setOrders] = useState([]);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
            console.error("Authentication token not found.");
            // Optionally, redirect to login page
            return;
        }

        const headers = {
            'Authorization': `Bearer ${jwt}`
        };

        // Fetch wallet, orders, and positions data
        const fetchData = async () => {
            try {
                const [walletRes, ordersRes, positionsRes] = await Promise.all([
                    fetch("http://localhost:8081/api/wallet", { headers }),
                    fetch("http://localhost:8081/api/orders", { headers }),
                    fetch("http://localhost:8081/api/asset", { headers }),
                ]);

                if (!walletRes.ok || !ordersRes.ok || !positionsRes.ok) {
                    throw new Error('Failed to fetch portfolio data');
                }

                setWallet(await walletRes.json());
                setOrders(await ordersRes.json());
                setPositions(await positionsRes.json());

            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        };

        fetchData();
    }, []);

    // Dynamically create trading metrics from the fetched wallet data
    const tradingMetrics = wallet ? [
        { label: "Account Balance", value: `$${parseFloat(wallet.balance).toLocaleString()}` },
        { label: "Equity", value: `$${parseFloat(wallet.balance).toLocaleString()}` }, // Assuming equity is the same as balance for now
        { label: "Realized P&L", value: "$0.00" }, // Placeholder
        { label: "Unrealized P&L", value: "$0.00" },// Placeholder
        { label: "Account Margin", value: "0.00" },// Placeholder
        { label: "Available Funds", value: `$${parseFloat(wallet.balance).toLocaleString()}` },
        { label: "Orders Margin", value: "0.00" }, // Placeholder
    ] : Array(7).fill({ label: "Loading...", value: "..." });


    return (
        <>
            <Header2 />
            <div className="bg-gray-900 text-white min-h-screen p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 bg-gray-900 p-4 rounded-lg">
                    <div className="flex items-center gap-1">
                        <h2 className="text-2xl font-bold text-white">Trading Analysis</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">    
                            <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z" />
                        </svg>
                    </div>
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
                            <p className="text-green-400 font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Main Tabs */}
                <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4 text-sm">
                    {["Orders", "Positions", "History", "Account History", "Trading Journal"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-gray-400 hover:text-white ${activeTab === tab ? "border-b-2 text-white border-white" : ""
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Orders Tab Content */}
                {activeTab === "Orders" && (
                    <div className="overflow-x-auto text-sm">
                        <table className="w-full table-auto border-collapse text-left">
                            <thead className="bg-gray-800">
                                <tr>
                                    {["Symbol", "Side", "Type", "Qty", "Price", "Status", "Placing Time", "Order ID"].map((h) => (
                                        <th key={h} className="px-3 py-2 border-b border-gray-700">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length > 0 ? orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-3 py-2 border-b border-gray-700">{order.orderItem.coin.symbol}</td>
                                        <td className={`px-3 py-2 border-b border-gray-700 ${order.orderType === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>{order.orderType}</td>
                                        <td className="px-3 py-2 border-b border-gray-700">Limit</td>
                                        <td className="px-3 py-2 border-b border-gray-700">{order.orderItem.quantity}</td>
                                        <td className="px-3 py-2 border-b border-gray-700">{order.price}</td>
                                        <td className="px-3 py-2 border-b border-gray-700">{order.orderStatus}</td>
                                        <td className="px-3 py-2 border-b border-gray-700">{new Date(order.timestamp).toLocaleString()}</td>
                                        <td className="px-3 py-2 border-b border-gray-700">{order.id}</td>
                                    </tr>
                                )) : (
                                    <tr><td colSpan="8" className="text-center py-6 text-gray-500">You have no orders yet.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Positions Tab Content */}
                {activeTab === "Positions" && (
                     <div className="overflow-x-auto text-sm">
                     <table className="w-full table-auto border-collapse text-left">
                         <thead className="bg-gray-800">
                             <tr>
                                 {["Symbol", "Quantity", "Buy Price", "Current Price", "Value"].map((h) => (
                                     <th key={h} className="px-3 py-2 border-b border-gray-700">{h}</th>
                                 ))}
                             </tr>
                         </thead>
                         <tbody>
                             {positions.length > 0 ? positions.map((pos) => (
                                 <tr key={pos.id}>
                                     <td className="px-3 py-2 border-b border-gray-700 flex items-center gap-2">
                                         <img src={pos.coin.image} alt={pos.coin.name} className="w-6 h-6"/>
                                         {pos.coin.name} ({pos.coin.symbol})
                                     </td>
                                     <td className="px-3 py-2 border-b border-gray-700">{pos.quantity}</td>
                                     <td className="px-3 py-2 border-b border-gray-700">${pos.buyPrice.toFixed(2)}</td>
                                     <td className="px-3 py-2 border-b border-gray-700">${pos.coin.currentPrice.toFixed(2)}</td>
                                     <td className="px-3 py-2 border-b border-gray-700">${(pos.quantity * pos.coin.currentPrice).toFixed(2)}</td>
                                 </tr>
                             )) : (
                                 <tr><td colSpan="5" className="text-center py-6 text-gray-500">You have no open positions.</td></tr>
                             )}
                         </tbody>
                     </table>
                 </div>
                )}
                 {/* Placeholder for other tabs */}
                {activeTab !== "Orders" && activeTab !== "Positions" && (
                    <div className="text-center text-gray-400 py-10">No data available for this section yet.</div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Portfolio;