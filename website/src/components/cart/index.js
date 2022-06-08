import React from 'react'
import styled from 'styled-components'
import Cartproduct from '../cartproduct/index'
const index = () => {
  return (
    <>
        <Card>
            <HeaderWrapper>
                <Header>Shopping Cart</Header>
            </HeaderWrapper>
            <Form>
                <Cartproduct/>
            </Form>
        </Card>
    </>
  )
}


const Card = styled.div`
    width:500px;
    height:500px;
    background: #eee;
    justify-self:center;    
    margin:auto;
    margin-top: 50px;

    border: 1px solid black;
`;
const Header = styled.h1`
    font-weight:bold;
    font-size: 2em;
`
const HeaderWrapper = styled.div`
    text-align: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid black;
`
const Form = styled.table`
    min-width: 100%;
    display:grid;
    position:relative;
    grid-template-columns: 
        minmax(150px, 1fr)
        minmax(150px, 1.67fr)
        minmax(150px, 1.67fr);
`
export default index