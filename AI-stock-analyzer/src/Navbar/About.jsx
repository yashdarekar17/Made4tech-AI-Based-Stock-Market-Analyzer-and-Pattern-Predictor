import Footer from "../Footer";
import Header from "../Header";

const AboutAIPage = () => {
    return (
      <>
      <Header/>

     <div className="bg-gray-800 min-h-screen text-white py-12 px-6 md:px-16 w-full mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          📊 How Our AI Predicts Market Trends
        </h1>
  
        <section className="space-y-10 text-lg leading-relaxed text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">🔁 LSTM (Long Short-Term Memory) Models</h2>
            <p>
              We utilize <span className="font-semibold text-white">LSTM networks</span>, a type of recurrent neural network (RNN) ideal for sequence prediction tasks like stock price forecasting.
              LSTMs are capable of learning long-term dependencies and understanding the context of time-series data, which is essential when analyzing historical stock price movements.
              Our AI models are trained on multiple years of stock data to identify emerging patterns and predict future trends.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">📊 Technical Indicators Integration</h2>
            <p>
              We enhance our prediction accuracy by integrating widely-used <span className="font-semibold text-white">technical indicators</span> into our models. These include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><span className="text-white font-medium">Moving Averages (MA)</span> – Tracks the average price over time to spot trends.</li>
              <li><span className="text-white font-medium">Relative Strength Index (RSI)</span> – Measures the speed and change of price movements to determine overbought or oversold conditions.</li>
              <li><span className="text-white font-medium">MACD</span> – Shows the relationship between two moving averages to detect momentum shifts.</li>
              <li><span className="text-white font-medium">Bollinger Bands</span> – Indicates price volatility and potential breakouts.</li>
            </ul>
            <p className="mt-2">
              These indicators are used as inputs to our AI models, giving them a technical understanding of market behavior.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">🧪 Backtesting for Accuracy</h2>
            <p>
              Before any prediction is delivered, our models are validated using extensive <span className="font-semibold text-white">backtesting</span>. This means:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>We run the model on past market data and compare predictions with actual results.</li>
              <li>This helps us fine-tune model parameters and evaluate prediction accuracy.</li>
              <li>Only high-performing models are used for real-time predictions, ensuring quality and trustworthiness.</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">📰 Sentiment Analysis on News & Social Media</h2>
            <p>
              Beyond numbers, our AI also understands the emotions driving the market through <span className="font-semibold text-white">sentiment analysis</span>. We analyze:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Financial news headlines and articles for sentiment trends.</li>
              <li>Public opinions from platforms like <span className="font-semibold text-white">Twitter, Reddit (r/stocks), and investor forums</span>.</li>
              <li>Quarterly earnings reports, press releases, and CEO interviews.</li>
            </ul>
            <p className="mt-2">
              These sources are processed using NLP (Natural Language Processing) techniques to evaluate whether the sentiment is positive, negative, or neutral — influencing the AI's final prediction.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">🤖 A Unified AI System</h2>
            <p>
              Our prediction engine combines all these layers — LSTM sequence modeling, technical indicators, historical backtesting, and sentiment analysis — into a unified AI pipeline.
              The result is a smarter, more accurate trend prediction system that empowers traders and investors with real-time, data-driven insights.
            </p>
          </div>
        </section>
      </div>

      <Footer/>

      </>

    );
  };
  
  export default AboutAIPage;
  