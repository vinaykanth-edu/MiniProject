import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter} from 'react-router-dom'
import store from './Redux/store'
import Routes from './Routes/Routes'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'

import Home from './Components/Home';

function App() {
  // console.log(store.getState)
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
           <Navbar />
           <Routes />
           <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
