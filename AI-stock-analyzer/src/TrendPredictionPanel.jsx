import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { followStock,unfollowedStock } from './Store/Followslice';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from "react-toastify";



const TrendPredictionPanel = ({

  stock = "Tesla (TSLA)",
  trend = "Uptrend",
  confidence = 87.3,

  
}) => {
  const dispatch = useDispatch();
  const followedStocks = useSelector(state => state.follow?.followedstocks ?? []);
  const isFollowed = followedStocks.some(s => s.stock === stock);
  const isUptrend = trend.toLowerCase() === "uptrend";

  const handlefollow = ()=>{
    const stockdata = { stock , trend ,confidence}
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

  return (
    <div className="bg-[#111827] text-white p-6 rounded-2xl shadow-md mt-6 w-full max-w-md mx-auto border border-gray-700 ">

      <h3 className="text-lg font-semibold mb-4 text-center text-green-400">
        📊 AI Trend Prediction
      </h3>

      {/* Stock Name */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-400">Stock</p>
        <p className="text-2xl font-bold text-gray-100">{stock}</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Trend Status */}
        <div className="flex items-center space-x-3">
          <div className={`text-3xl ${isUptrend ? "text-green-400" : "text-red-500"}`}>
            {isUptrend ? <ArrowUpRight size={32} /> : <ArrowDownRight size={32} />}
          </div>
          <div>
            <p className="text-sm text-gray-400">Trend Direction</p>
            <p className={`text-xl font-bold ${isUptrend ? "text-green-400" : "text-red-500"}`}>
              {trend}
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
    ${isFollowed ? "bg-gray-800 text-white" :"bg-yellow-400 text-black hover:bg-yellow-300"} 
    hover:opacity-90 transition duration-300 hover:scale-105 cursor-pointer ease-in-out transform `}
>
  {isFollowed ? 'Following' : 'Follow'}
</button>
     <button className='w-1/2 h-10 p-0 max-w-md font-semibold rounded-md bg-yellow-400  text-black hover:bg-yellow-300 
     transition duration-300 hover:scale-105 cursor-pointer ease-in-out transform'>Check stocks</button>
        </span>
        

      </div>
    </div>
  );
};



export default TrendPredictionPanel;
