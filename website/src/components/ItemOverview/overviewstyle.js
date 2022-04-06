import styled from 'styled-components'

export const Container = styled.div`
    background: gray;
    width:  70vw;
    height: 90%;
    margin-right: 10vw;
    flex: wrap;
    display: flex;
    justify-content: space-around;
`
export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 225px;
    height: 200px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
`