import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter} from 'react-router-dom'
import store from './Redux/store'

import Footer from './Components/Footer';
import Navbar from './Components/Navbar'


function App() {
  // console.log(store.getState)
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
           <Navbar />
           <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
