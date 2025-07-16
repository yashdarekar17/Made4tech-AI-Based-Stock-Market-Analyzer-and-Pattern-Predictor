import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './Store/Store.jsx';
import { ToastContainer,Bounce } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
       />
     <App />
  </Provider>
   
  
)
