import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/navbar/index';
import Footer from '../components/Footer/index'
export default function Product(){
    const { id } = useParams();
    console.log(id)

    const [product,setProduct] = useState();
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
                    <Img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ebad848a-13b1-46d5-a85e-49b4b6a4953c/air-force-1-le-older-shoe-D59pRJ.png'/>
                    <TextWrapper>
                        <Header>{product.Name}</Header>
                            <DescriptionWrapper>
                                <p>The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine</p>
                            </DescriptionWrapper>
                        <BottomWrapper >
                            <label style={{margin: 'auto'}}>EU sizes</label>
                            <select style={{margin: 'auto'}}>
                                <option>43</option>
                                <option>42</option>
                                <option>41</option>
                            </select>
                            <Button>Add to cart</Button>
                        </BottomWrapper>
                    </TextWrapper>
                </Container>
                <Footer />
            </>
        }
        </>
    );
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