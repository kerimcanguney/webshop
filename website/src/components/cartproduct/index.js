import React from 'react'
import styled from 'styled-components'
const index = () => {
  return (
    <>
      <tbody style={{display: 'contents'}}>
        <Tr style={{display: 'contents'}}>
          <Td>
            <img src='https://via.placeholder.com/150' width={'85px'}/>
          </Td>
          <Td>
            <Wrapper>
              <h3>product name</h3>
              <p>size: 32</p>
            </Wrapper>
            
          </Td>
          <Td>
          <select>
              <option>1</option>
            </select>
          </Td>
          <Td>
            <button>x</button>
          </Td>
        </Tr>
      </tbody>

    </>
  )
}
const Tbody = styled.tbody`
  display:contents;
`
const Wrapper = styled.div`
  display:grid;
`

const Td = styled.td`
  justify-content:center;
  align-items:center;
  vertical-align: center;
  height: 85px;
  display:flex;
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
`
const Tr = styled.tr`
  text-align:center;
  &:nth-child(even) td{
    background: lightgray;
  }
`
export default index