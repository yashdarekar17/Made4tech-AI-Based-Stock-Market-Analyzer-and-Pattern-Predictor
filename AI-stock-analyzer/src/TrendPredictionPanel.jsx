import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { followStock,unfollowedStock } from './Store/Followslice';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';



const TrendPredictionPanel = ({

  stock = "Tesla (TSLA)",
   changePercent = "-0.64%",
  confidence = 87.3,

  
}) => {
  const dispatch = useDispatch();
  const followedStocks = useSelector(state => state.follow?.followedstocks ?? []);
  const isFollowed = followedStocks.some(s => s.stock === stock);
 

  const handlefollow = ()=>{
    const stockdata = { stock , changePercent ,confidence}
    if(isFollowed){
      dispatch(unfollowedStock(stockdata),
      toast.success(`unfollowed ${stock}`,{
        positon:'top-right',
        autoclose:1000,
        theme:'dark'
      })
    );
    }else{
      dispatch(followStock(stockdata),
    toast.success(`you started following ${stock}`,{
        positon:'top-right',
        autoclose:1000,
        theme:'dark'
      }));
    }
  }

  const navigate = useNavigate(); // 👈 ADD THIS

  const symbol = stock.match(/\(([^)]+)\)/)?.[1] || stock; // Extract TSLA from "Tesla (TSLA)"

  const handleCheckStock = () => {
    navigate(`/chart/${symbol}`);
  };

  return (
    <div  data-aos="fade-down" className=" bg-gray-800 backdrop-blur text-white p-6 rounded-2xl shadow-md mt-6 w-full max-w-md mx-auto border border-gray-700 ">

      <h3 className="text-lg font-semibold mb-4 text-center text-green-400">
         
      </h3>

      {/* Stock Name */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-400">Stock</p>
        <p className="text-2xl font-bold text-gray-100">{stock}</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Trend Status */}
        <div className="flex items-center space-x-3">
          
          <div>
            <p className="text-sm text-gray-400">Change (24h)</p>
            <p className={`text-xl font-bold ${changePercent.startsWith('-') ? 'text-red-400':'text-green-400'}`}>
              { changePercent }
            </p>
          </div>
        </div>

        {/* Confidence */}
        <div className="text-right">
          <p className="text-sm text-gray-400">AI Confidence</p>
          <p className="text-xl font-bold text-yellow-400">{confidence}%</p>
        </div>
      </div>
      <div className='mt-4'>
        <span className='flex gap-5'>
          <button
  id='followbtn'
  onClick={handlefollow}
  className={`w-1/2 h-10 p-0 max-w-md font-semibold rounded-md 
    ${isFollowed ? "bg-gray-900 text-white" :"bg-white hover:bg-gray-300 text-black "} 
    hover:opacity-90 transition duration-300 hover:scale-105 cursor-pointer ease-in-out transform `}
>
  {isFollowed ? 'Following' : 'Follow'}
</button>
     <button
            onClick={handleCheckStock}
            className="w-1/2 h-10 p-0 max-w-md font-semibold rounded-md bg-white text-black hover:bg-gray-300 transition duration-300 hover:scale-105 cursor-pointer ease-in-out transform">
            Check stocks
          </button>
        </span>
        

      </div>
    </div>
  );
};



export default TrendPredictionPanel;
