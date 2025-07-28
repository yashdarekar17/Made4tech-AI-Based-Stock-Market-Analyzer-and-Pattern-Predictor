import { useSelector,useDispatch } from "react-redux";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Header from "./Header2";
import Footer from "./Footer";
import { unfollowedStock } from "./Store/Followslice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Followingpage() {
  const followstocks = useSelector(state => state.follow?.followedstocks ?? []);
  const dispatch =useDispatch();

  useEffect(()=>{
    localStorage.setItem("followstocks",JSON.stringify(followstocks));
  },[followstocks])

  const handleUnfollow=(stock)=>{
    dispatch(unfollowedStock(stock),
      toast.success(`unfollowed ${stock.stock}`,{
        position: 'top-right',
        autoclose:1000,
        theme: 'dark'
      })
    );
  }
  // Extract TSLA from "Tesla (TSLA)"
  const navigate = useNavigate();
  
  const handlecheckstokes=(stock)=>{
    const symbol = stock.match(/\(([^)]+)\)/)?.[1] || stock; 
    navigate(`/chart/${symbol}`);
  }

  return (
    <>
    <div className="bg-gray-800">
       <Header/>
       <div className="p-6  ">
        <div className="flex gap-0">
            <h2 className="text-2xl font-bold text-white hover:text-green-400 mb-4 pb-2" >
         Your Followed Stocks
      </h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
  <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"/>
</svg>
        </div>
        <div className="border-b border-white mb-4"></div>
      

      {followstocks.length === 0 ? (
        <p className="text-center text-gray-400">No stocks followed yet.</p>
      ) : (
        followstocks.map((stock, index) => {
         

          return (
            <div key={index} className="bg-gray-900 text-white p-4 rounded-md mb-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-bold">{stock.stock}</p>
                
              </div>
              <div>
            {/* Change % */}
<p className="text-sm text-gray-400">Change (24h)</p>
<p className={`text-xl font-bold ${
  typeof stock.changePercent === "string"
    ? stock.changePercent.startsWith("-")
      ? "text-red-400"
      : "text-green-400"
    : "text-gray-400"
}`}>
  {stock.changePercent !== undefined && stock.changePercent !== null
    ? stock.changePercent
    : "N/A"}
</p>


          </div>
              <p className="text-sm text-gray-400">AI Confidence</p>
              <p className="text-lg font-bold text-yellow-400">{stock.confidence}%</p>
             <div className="flex justify-center gap-2">
                <button
                  className="w-40 h-10 font-semibold rounded-md bg-white text-black hover:bg-gray-400 transition"
                  onClick={() => handleUnfollow(stock)}
                >
                  Unfollow
                </button>
                <button
                  className="w-40 h-10 font-semibold rounded-md bg-white text-black hover:bg-gray-400 transition"
                  onClick={ () =>handlecheckstokes(stock.stock)}
                >
                  check stokes
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
