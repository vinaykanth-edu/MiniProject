import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter} from 'react-router-dom'
import store from './Redux/store'

import Footer from './Components/Footer';

function App() {
  // console.log(store.getState)
  return (
    <div>
    <Footer/>
    </div>
  );
}

export default App;
