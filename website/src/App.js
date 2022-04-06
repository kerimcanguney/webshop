import React from 'react';
import Home from './pages/home.js'
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
        </Routes>
    </BrowserRouter>
  );
}

export default App;
