import React from 'react'
import styled from 'styled-components'
import {FaShoppingBag} from 'react-icons/fa'
const index = ({title}) => {
  return (
    <Card>
        <img  
        src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ebad848a-13b1-46d5-a85e-49b4b6a4953c/air-force-1-le-kinderschoen-D59pRJ.png'
        width={"100%"}
        height={'85%'}
        />
        <TextContainer>
        <Title>{title}</Title>
        <Button/>
        </TextContainer>
    </Card>
  )
}

export const Card = styled.form`
    transition: 0.1s;
    width: 250px;
    height: 350px;
    background: white;
    justify-content: center;
    text-align: center;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    
`;

export const Button = styled(FaShoppingBag)`
    cursor: pointer;
    
    font-size: 1em;
    transition: .1s;
    &:hover{
        color: gray;
    }
`;
export const Title = styled.h1`
    font-size: 2rem;
`;
export const TextContainer = styled.div`
    display: flex;
    height: 15%;
    grid-column: auto;
    justify-content:center;
`;
export default index