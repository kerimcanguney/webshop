import React from 'react';
import Home from './pages/home.js'
import Shop from './pages/shop.js'
import Login from './pages/login.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
import useToken from './useToken'

function App() {
  const { token, setToken } = useToken();
  if (token){
    return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Home />} />
        </Routes>
    </BrowserRouter>
    )
  }
  if (!token)
  {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login  setToken={setToken}/>} />
        </Routes>
    </BrowserRouter>
  );
  }
}

export default App;
