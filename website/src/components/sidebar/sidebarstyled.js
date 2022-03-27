import styled from "styled-components";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

 const AccordionContainer = styled.div`
    margin-left: 2rem;
    overflow: hidden;
    width: 10.75rem;
    border-radius: 0.5rem;
    background-color: white;
    color: black;
`;

 const Inner = styled.div`
    position: absolute;
    padding: 1rem;
    color: black;

`;

 const Header = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1rem;
    text-align: left;
    background: white;
    color: inherit;
    cursor: pointer;

    appearance: none;
    border: none;
    outline: none;
`;

 const HeaderIcon = styled.span`
    transform: rotate(${props => props.isActive ? 90 : 0}deg);
    transition: all 0.3s;
`;

 const Content = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props =>{
        const inner = document.getElementById(props.itemName);
        return `${props.isActive && inner ? inner.clientHeight : 0}px`;
    }};
    transition: height 0.35s;
`;

const AccordionContent = ({onClick, itemName, itemContent, isActive}) => {
    return(
        <React.Fragment>
            <Header onClick={onClick}>
                {itemName}
                <HeaderIcon isActive={isActive}>
                    <IoIosArrowForward/>
                </HeaderIcon>
            </Header>
            <Content itemName={itemName} isActive={isActive}>
                <Inner id={itemName}>
                    {itemContent}
                </Inner>
            </Content>
        </React.Fragment>
    )
}

export {AccordionContainer, AccordionContent}