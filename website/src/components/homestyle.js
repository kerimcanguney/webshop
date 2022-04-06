import styled from 'styled-components'
import bg_img from '../images/background.png'
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

`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${bg_img});
    background-color: #EFEBEA;
`;

