import { Link } from "react-router-dom"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import styled from "styled-components"

const items = () => {
  return (
      <div style={{fontFamily: 'Merriweather Sans'}}>
        <li style={{marginBottom: "20px"}}>
            <Slink to='/'>
                <span>Eshop</span>
            </Slink>
        </li>
        <li style={{marginTop: "15px"}}>
            <Slink to='/'>
                <span style={{marginLeft: "70px"}}>NEW ARRIVALS <Arrow/> </span>
            </Slink>
        </li>
        <li style={{marginTop: "15px"}}>
            <Slink to='/'>
                <span style={{marginLeft: "70px"}}>MEN <Arrow/> </span>
            </Slink>
        </li>
        <li style={{marginTop: "15px"}}>
            <Slink to='/'>
                <span style={{marginLeft: "70px"}}>WOMEN <Arrow/> </span>
            </Slink>
        </li>

        <li style={{marginTop: "50px"}}>
            <Slink to='/'>
                <span>BLOG</span>
            </Slink>
        </li>
        <li style={{marginTop: "15px"}}>
            <Slink to='/'>
                <span>SUPPORT</span>
            </Slink>
        </li>

        <li style={{marginTop: "400px"}}>
            <Slink to='/'>
                <span>© 2022 Sneakerstock</span>
            </Slink>
        </li>
        
      </div>
    
  )
}

export const Slink = styled(Link)`
    text-decoration: none;
    color:black;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: .875rem;
    font-weight: bold;
    line-height: 2;
    transition: .2s;
    &:hover{
        color:white;
    }
`

export const Arrow = styled(MdOutlineArrowForwardIos)`
     font-size: .6rem;
`


export default items