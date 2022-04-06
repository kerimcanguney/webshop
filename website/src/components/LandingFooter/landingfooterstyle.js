import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

`
export const Box = styled.div`
    justify-content: center;
    display:flex;
    margin:auto;
`;

export const LeftSection = styled.div`
    justify-content:center;

`

export const RightSection = styled.div`
    display:inline-block;

`

export const MiddleSection = styled.div`
    display:inline-block;
    align-items: center;
`


export const Header = styled.a`
    font-size: 0.75rem;
    margin: 0 1rem;
    font-family: proxima-nova, sans-serif;
    cursor: pointer;
    display: flex;
    position: relative;
    justify-content: center;
    width: 125px;
    &:after{
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: radial-gradient(farthest-corner at 40px 40px,
      #f35 0%, #43e 100%);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover::after{
        width: 100%; 
        left: 0; 
    }
`;

