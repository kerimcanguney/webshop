import styled from 'styled-components'

export const Container = styled.div`
    width:  100vw;
    height: 100vh;
    margin-bottom:20px;
    flex: wrap;
    
`


export const ProductsContainer = styled.div`
    display: grid;
    width: 70%;
    border: 1px solid black;
    border-top: 0;
    margin:auto;
    row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    overflow-y: visible;
    z-index: 1000;
`