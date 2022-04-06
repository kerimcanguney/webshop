import { Link } from "react-router-dom"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import styled from "styled-components"
const items = () => {
  return (
      <>
        <li style={{marginBottom: "20px"}}>
            <Slink to='/'>
                <span>Eshop <Arrow/></span>
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
      </>
    
  )
}

export const Slink = styled(Link)`
  text-decoration: none;
  color:black;
  margin-top: 20px;
    margin-bottom: 20px;
`
export const Arrow = styled(MdOutlineArrowForwardIos)`
  font-size: 13px;
`


export default items