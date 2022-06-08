import React from 'react';
import Home from './pages/home.js'
import Shop from './pages/shop.js'
import Login from './pages/login.js';
import Checkout from './pages/checkout.js';
import Product from './pages/product.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
import useToken from './useToken'

function App() {
  const { token, setToken } = useToken(null);
  
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  logged={token}/>} />
          <Route path="/shop" element={<Shop />} />
          { token == undefined &&(
            <Route path="/login" element={<Login setToken={setToken}/>} />
          )}
          <Route path="/login" element={<Home logged={token}/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
