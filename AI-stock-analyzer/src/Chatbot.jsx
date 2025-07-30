import Chatbot2 from './Chatbot.png';
import { useState } from 'react';

function Chatbot() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <img
          onClick={() => setOpen(!isOpen)}
          src={Chatbot2}
          alt="Chatbot"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover cursor-pointer shadow-lg"
        />
      </div>

      
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[1000px] h-[500px] bg-white shadow-2xl rounded-2xl z-50 p-4 border border-gray-200">
         
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          >
            ✕
          </button>

          
          <h2 className="text-lg font-semibold mb-4">Ask me anything</h2>
          <div className="h-[370px] overflow-y-auto border p-2 rounded bg-gray-50 text-sm">
           
            <p className="text-gray-600">Hi! I'm charlie. How can I help?</p>
          </div>

         
          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow px-3 py-2 border rounded-l-lg text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
