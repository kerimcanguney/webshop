import React, {useState} from 'react';
import { AccordionContainer, AccordionContent } from './sidebarstyled';
const Accordion = ({items}) =>{
  const [active, setActive] = useState();

  const handleClick = (name)=>{
    setActive(name === active ? null : name);
  }

  return <AccordionContainer>
    {items.map(item=>{
      let isActive = active === item.name;
      return <AccordionContent onClick={() =>handleClick(item.name)}
      itemName={item.name} itemContent={item.content} isActive={isActive} />
    })}
  </AccordionContainer>
};

export default Accordion;