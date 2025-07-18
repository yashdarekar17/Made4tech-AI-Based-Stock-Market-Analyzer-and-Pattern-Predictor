import Footer from "../Footer";
import Header from "../Header2";

const AboutAIPage = () => {
  return (
    <>
      <Header/>

      <div className="bg-gray-800 min-h-screen text-white py-12 px-6 md:px-16 w-full mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          How Our AI Predicts Market Trends
        </h1>

        <section className="space-y-10 text-lg leading-relaxed text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">LSTM Models for Time-Series Forecasting</h2>
            <p>
              Our platform uses Long Short-Term Memory (LSTM) networks — a type of recurrent neural network (RNN) designed to handle time-series data effectively. These models excel at identifying long-term dependencies and patterns within historical stock prices, making them a strong foundation for forecasting market trends.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Technical Indicators Integration</h2>
            <p>
              To improve prediction accuracy, we integrate a variety of technical indicators into our models. These include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><span className="text-white font-medium">Moving Averages (MA)</span> – Used to smooth out price data and identify overall trends.</li>
              <li><span className="text-white font-medium">Relative Strength Index (RSI)</span> – Measures recent price changes to assess overbought or oversold conditions.</li>
              <li><span className="text-white font-medium">MACD</span> – Helps track momentum by analyzing the relationship between two moving averages.</li>
              <li><span className="text-white font-medium">Bollinger Bands</span> – Indicates price volatility and potential breakout points.</li>
            </ul>
            <p className="mt-2">
              These indicators are factored into our models to provide deeper context on price action and market behavior.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Model Backtesting and Validation</h2>
            <p>
              Before deployment, each AI model undergoes rigorous backtesting against historical data. This process involves:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Running predictions on past market scenarios and comparing them to actual outcomes.</li>
              <li>Tuning model parameters for optimal accuracy.</li>
              <li>Ensuring only consistently high-performing models are used in live environments.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Sentiment Analysis on Market News</h2>
            <p>
              In addition to price data, we incorporate real-world sentiment signals using Natural Language Processing (NLP). Our models analyze:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Financial news articles and earnings reports.</li>
              <li>Public sentiment from platforms like Twitter, Reddit, and investor forums.</li>
              <li>Statements from company executives and official press releases.</li>
            </ul>
            <p className="mt-2">
              These insights help determine whether the market sentiment is trending positively, negatively, or remaining neutral—factors that can significantly influence short-term movements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">An Integrated AI Framework</h2>
            <p>
              Our approach combines all elements—time-series modeling, technical analysis, sentiment evaluation, and rigorous testing—into a single, unified AI system. This comprehensive pipeline enables us to deliver timely and actionable market predictions, giving users an edge in their trading and investment decisions.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutAIPage;