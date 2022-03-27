import Navbar from './components/navbar/index'
import Home from './pages/home.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
import Accordion from './components/sidebar/index';
import {items} from './components/sidebar/data'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Accordion items={items} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
