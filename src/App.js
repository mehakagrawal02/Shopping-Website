import './App.css';
import Header from './Header'; 
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Product from './Product';

function App() {
  const[cart,setCart]=useState([]);
  const addtobasket=(item)=>{
      setCart([...cart,item]);
      
  };
  return (
    <Router>
      <div className="app">
       <Routes>    
        <Route path="/" element={<Home addtobasket={addtobasket}/>}/>
        <Route path="/Checkout" element={<Checkout cart={cart}/>}/>
           
      </Routes>
      </div>
    </Router>
  );
}

export default App; 
