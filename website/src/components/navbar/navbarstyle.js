// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlineUser} from 'react-icons/ai';
import {RiShoppingBagLine} from 'react-icons/ri';
import {AiOutlineSearch} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa'
import {BsDot} from 'react-icons/bs';

export const DotIcon = styled(BsDot)`
  background: transparent;
  font-size: inherit;
  outline: none;
  color: red;
  margin-bottom: 20px;
`;
export const MenuIcon = styled(FaBars)`
  background: transparent;
  font-size: inherit;
  cursor: pointer;
  outline: none;
`;
export const UserIcon = styled(AiOutlineUser)`
  background: transparent;
  font-size: inherit;
  cursor: pointer;
  outline: none;
`;
export const ShoppingCartIcon = styled(RiShoppingBagLine)`
  background: transparent;
  font-size: inherit;
  cursor: pointer;
  outline: none;
  transition: .3s all;
  margin-right: 5px;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  background: transparent;
  font-size: inherit;
  cursor: pointer;
  outline: none;
  transition: .3s all;
  margin-right: 5px;
`;
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
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
`;
export const NavLogo = styled.a`
  color: black;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;
export const LogoSmallText = styled.p`
  margin-top: 20px;
  font-size: .625rem;
  color: black;
  text-align: center;
  
`;
export const LogoContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  display: grid;
  justify-content: center;
  justify-items: center;
`;
export const IconContainer = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  font-size: 18px;
`;
