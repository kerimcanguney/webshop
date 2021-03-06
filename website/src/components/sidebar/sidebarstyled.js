import styled from "styled-components";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

 const AccordionContainer = styled.div`
    overflow: hidden;
    width: 200px;
    background-color: white;
    color: black;
    display: grid;
    /* margin-left: 24px; */
    align-items: center;
`;

 const Inner = styled.div`
    position: absolute;
    padding-left: 1rem;
    padding-bottom: 5px;
    vertical-align: text-bottom;
    color: black;
`;

 const Header = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1.2rem;
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