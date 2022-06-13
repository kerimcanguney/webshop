import React from 'react'
import styled from 'styled-components'
import {FaShoppingBag} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const index = ({item}) => {
  return (
    <Link to={'/product/'+item._id} style={{textDecoration: 'none', color: 'black'}}>
        <Card>
            <img  
            src={item.imgUrl}
            width={"100%"}
            height={'85%'}
            />
            <TextContainer>
            <Title>{item.name}</Title>
            </TextContainer>
        </Card>
    </Link>
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
    };
    cursor: pointer;
    
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