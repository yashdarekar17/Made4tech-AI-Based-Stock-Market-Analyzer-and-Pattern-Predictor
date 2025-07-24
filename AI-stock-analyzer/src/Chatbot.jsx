import Chatbot2 from './Chatbot.png';

function Chatbot() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg">
        <img
          src={Chatbot2}
          alt="Chatbot"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </>
  );
}

export default Chatbot;

