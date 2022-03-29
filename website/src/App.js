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
import {Container} from './components/homestyle'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Accordion items={items} />
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
