import React from 'react'
import styled from 'styled-components'
import Cartproduct from '../cartproduct/index'
const index = ({imgUrl,Size}) => {
  return (
    <>
        <Card>
            <HeaderWrapper>
                <Header>Shopping Cart</Header>
            </HeaderWrapper>
            <Form>
                { imgUrl ?
                    <Cartproduct imgUrl={imgUrl} Size={Size}/>
                    : null
                }
            </Form>
        </Card>

        <Checkout onClick={() => checkavailability()}>
            checkout
        </Checkout>
    </>
  )
}
function checkavailability(){
    var item = JSON.parse(window.localStorage.getItem("product"))
    if (item == null) return null;

    const res = fetch('http://localhost:3001/products/' + item.id)
    .then(response => response.json())
    .then(data => {
        var sizes = data.sizes
        for (let index = 0; index < sizes.length; index++) {
            if (sizes[index].size == item.size && sizes[index].stock >= 1){
                return console.log("instock")
            }
        }
        return removeProductFromCart()
    })
}

function removeProductFromCart(){
    window.localStorage.removeItem('product')
    window.location.reload()
}
const Checkout = styled.button`
    margin:auto;
    margin-top:20px;
    display:flex;
    width: fit-content;
    font-weight:bold;
    padding: 10px 223px 10px 223px;
    border:none;
    background: black;
    color:white;
    transition: .2s;
    cursor:pointer;
    &:hover{
        color:lightgray;
    }
    &:active{
        color: darkslategrey;
        background:lightgray;
    }
`

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
        minmax(0px, 1.67fr)
        minmax(0px, 1.67fr);
`
export default index