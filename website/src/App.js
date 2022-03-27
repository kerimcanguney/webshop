import React, {useState} from 'react';
import Navbar from './components/navbar/index'
import Home from './pages/home.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AccordionContainer, AccordionContent } from './components/sidebar/sidebarstyled';
import './app.css'

const Accordion = ({items}) =>{
  const [active, setActive] = useState();

  const handleClick = (name)=>{
    setActive(name === active ? null : name);
  }

  return <AccordionContainer>
    {items.map(item=>{
      let isActive = active ===item.name;
      return <AccordionContent onClick={() =>handleClick(item.name)}
      itemName={item.name} itemContent={item.content} isActive={isActive} />
    })}
  </AccordionContainer>
};

const items = [
  {
    name: "Women",
    content: <div>
      <li>
        <a href=''>a</a>
      </li>
      <li>
        <a href=''>a</a>
      </li>
    </div>
  },
  {
    name: "Men",
    content: <div>
      <li>
        <a href=''>a</a>
      </li>
      <li>
        <a href=''>a</a>
      </li>
    </div>
  },
  {
    name: "All",
    content: <div>
      <li>
        <a href=''>a</a>
      </li>
      <li>
        <a href=''>a</a>
      </li>
    </div>
  },
]

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
