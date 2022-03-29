import styled from 'styled-components'

export const Container = styled.div`
    height: 650px;
    z-index: 1;
    max-width: 1200px;
    padding: 0 24px;
    display: flex;
    align-items: flex-start;

    /* background: rgba(0,0,0,.1); */
    margin-left: 10%;
    margin-right: 10%;
    
    @media screen and (max-width: 1200px) {
        margin-left: 0%;
        margin-right: 0%;
    }

`
