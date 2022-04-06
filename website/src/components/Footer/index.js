import React from 'react'
import {
  Box,
  Container,
  Row,
  Column,
  Link,
  Title,
} from "./footerstyle";
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
const index = () => {
  return (
    <Box>
        <Container>
            <Row>
                <Column>
                    <Title>About us</Title>
                    <Link href="#">Aim</Link>
                    <Link href="#">Vision</Link>
                    <Link href="#">Testimonials</Link>
                </Column>
                <Column>
                    <Title>Contact us</Title>
                    <Link href="#">Limburg,Roermond</Link>
                    <Link href="#">0689897070</Link>
                    <Link href="#">Sneakerstock@hotmail.com</Link>
                </Column>
                <Column>
                    <Title>Social Media</Title>
                    <Link href="#">Facebook <AiFillFacebook style={{ marginLeft: "10px" }} /></Link>
                    <Link href="#">Instagram <AiOutlineInstagram style={{ marginLeft: "10px" }}/></Link>
                    <Link href="#">Twitter <AiOutlineTwitter style={{ marginLeft: "10px" }}/></Link>
                </Column>
                
            </Row>
        </Container>
    </Box>
  )
}

export default index