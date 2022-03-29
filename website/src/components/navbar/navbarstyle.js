// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaUserAlt} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';

export const UserIcon = styled(FaUserAlt)`
  position: relative;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;
export const ShoppingCartIcon = styled(FaShoppingCart)`
  position: relative;
  background: transparent;
  font-size: 1.5rem;
  right: .5rem;
  cursor: pointer;
  outline: none;
`;

export const Nav = styled.nav`
  background: rgba(0,0,0,.0);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
    
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

`;

export const NavLogo = styled.a`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

`;

export const IconContainer = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
`;
