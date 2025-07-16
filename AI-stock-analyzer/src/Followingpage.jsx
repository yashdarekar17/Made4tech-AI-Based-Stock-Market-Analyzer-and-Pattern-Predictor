import { useSelector,useDispatch } from "react-redux";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { unfollowedStock } from "./Store/Followslice";
import { toast } from "react-toastify";
function Followingpage() {
  const followstocks = useSelector(state => state.follow?.followedstocks ?? []);
  const dispatch =useDispatch();

  const handleUnfollow=(stock)=>{
    dispatch(unfollowedStock(stock),
      toast.success(`unfollowed ${stock.stock}`,{
        position: 'top-right',
        autoclose:1000,
        theme: 'dark'
      })
    );
  }

  return (
    <>
    <div className="bg-gray-800">
       <Header/>
       <div className="p-6  ">
      <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-700 pb-2" >
        📌 Your Followed Stocks
      </h2>

      {followstocks.length === 0 ? (
        <p className="text-center text-gray-400">No stocks followed yet.</p>
      ) : (
        followstocks.map((stock, index) => {
          const isUptrend = stock.trend.toLowerCase() === "uptrend";

          return (
            <div key={index} className="bg-gray-900 text-white p-4 rounded-md mb-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-bold">{stock.stock}</p>
                <div className={`text-2xl ${isUptrend ? "text-green-400" : "text-red-500"}`}>
                  {isUptrend ? <ArrowUpRight size={28} /> : <ArrowDownRight size={28} />}
                </div>
              </div>
              <p className="text-sm text-gray-400">Trend Direction</p>
              <p className={`text-xl font-bold ${isUptrend ? "text-green-400" : "text-red-500"} mb-2`}>
                {stock.trend}
              </p>
              <p className="text-sm text-gray-400">AI Confidence</p>
              <p className="text-lg font-bold text-yellow-400">{stock.confidence}%</p>
             <div className="flex justify-center">
                <button
                  className="w-40 h-10 font-semibold rounded-md bg-yellow-300 text-black hover:bg-yellow-400 transition"
                  onClick={() => handleUnfollow(stock)}
                >
                  Unfollow
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
    <div className="mt-50 mb-0 ">
        <Footer/>
    </div>
    </div>
       
    </>
    
  );
}

export default Followingpage;
