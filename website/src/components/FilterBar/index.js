import React from 'react'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
const index = () => {
  return (
    <Bar>
        <Title>Mens</Title>
        <Button/>
    </Bar>
  )
}


const Bar = styled.div`
    background: white;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    height: 50px;
    display:flex;
    position:sticky;
    top:0;
    justify-content: space-between;
    align-items: center;
`


const Button = styled(FaBars)`
    font-size: 1.5rem;
    padding: 0px;
    margin-right: 15px;
    cursor: pointer;
`

const Title = styled.h1`
    font-size: 1.75rem;
    padding: 0px;
    margin-left: 15px;

`
export default index