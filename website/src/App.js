import React from 'react';
import Home from './pages/home.js'
import Shop from './pages/shop.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
