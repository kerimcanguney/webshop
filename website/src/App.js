import Navbar from './components/navbar/index'
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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
