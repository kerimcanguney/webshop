import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/navbar/index';
import Footer from '../components/Footer/index'
export default function Product(){
    const { id } = useParams();

    const [product,setProduct] = useState();
    const [currentSize, setSize] = useState();
    useEffect(() =>{
        // fetch(`http://localhost:3001/products/${id}`)
        fetch(`http://localhost:3001/products/${id}`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            setProduct(data)
            console.log(data)
        })
    }, [])


    return (
        <>
        { product !== undefined &&
            <>
                <Navbar />
                <Container>
                    <Img src={product.imgUrl}/>
                    <TextWrapper>
                        <Header>{product.Name}</Header>
                            <DescriptionWrapper>
                                <p>The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine</p>
                            </DescriptionWrapper>
                        <BottomWrapper >
                            <label style={{margin: 'auto'}}>EU sizes</label>
                            <select style={{margin: 'auto'}} onChange={(e) => setSize(e.target.value)}>
                                <option disabled selected value> -- select shoe size -- </option>
                                {
                                    product.sizes.map((size) =>{
                                        if (size.stock > 0){
                                            return (<option>{size.size}</option>)
                                        }
                                        else{
                                            return (<option disabled>{size.size}</option>)
                                        }
                                        }
                                    )
                                }
                            </select>
                            <Button onClick={() => addToCart(id,currentSize)}>Add to cart</Button>
                        </BottomWrapper>
                    </TextWrapper>
                </Container>
                <Footer />
            </>
        }
        </>
    );
}

function addToCart(id,size){
    if (size == null) return;

    var product = JSON.stringify({
        id: id,
        size: size,
        amount: 1
    })
    window.localStorage.setItem("product",product)
    
}

const Container = styled.div`
    display: flex;
    grid-template-columns: 1fr, 1fr;
    min-width: 500px;
    max-width: 900px;
    height: 500px;
    margin:auto;
    margin-bottom: 8em;
    margin-top: 4em;
`

const Img = styled.img`
    width: 50%;
    height: 100%;
`

const TextWrapper = styled.div`
    width:50%;
`
const Header = styled.h1`
    font-weight:bold;
    font-size: 2.5em;
    text-align:center;
`

const DescriptionWrapper = styled.div`
    width: 80%;
    display:flex;
    margin:auto;

`

const Button = styled.button`
    margin:auto;
    border-radius: 15px;
    border:none;
    padding: 15px;
    cursor: pointer;
    transition: .15s;
    &:hover{
        background: #e4e4e4;
    }
    &:active{
        background: darkgray;
    }
`
const BottomWrapper = styled.div`
    margin-top: 50px;
    gap: 20px;
    display:grid;
`