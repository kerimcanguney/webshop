import React, {useState} from 'react';
import Items from './sidenavdata'
import {Link} from 'react-router-dom';
import {
  IconContainer,
  Nav,
  NavbarContainer,
  NavLogo,
  UserIcon,
  MenuIcon,
  LogoSmallText,
  LogoContainer,
  DotIcon,
  ShoppingCartIcon,
} from "./navbarstyle.js";
import './sidenav.css'
import {GrFormClose} from 'react-icons/gr';
import Login from '../../pages/login';

function GetCurrentDay(number){
  switch (number) {
  case 0:
    return  "Sunday";
  case 1:
    return"Monday";
  case 2:
    return"Tuesday";
  case 3:
    return"Wednesday";
  case 4:
    return"Thursday";
  case 5:
    return "Friday";
  case 6:
    return"Saturday";
  default:
    return"N/A";
  }
}
function GetCurrentMonth(number){
  switch (number) {
    case 0:
      return  "January";
    case 1:
      return"February";
    case 2:
      return"March";
    case 3:
      return"April";
    case 4:
      return"May";
    case 5:
      return"June";
    case 6:
      return"July";
    case 7:
      return"August";
    case 8:
      return"September";
    case 9:
      return"October";
    case 10:
      return"November";
    case 11:
      return"December";
    default:
      return"N/A";
  }
}
function GetCurrentMinute(number){
  if (number<10){
    return "0"+number;
  }
  return number;
}
function GetDateForText(){
  var date = new Date();

  let City = "Roermond";
  let Day = date.getDay();
  let DayinMonth = date.getDate();
  let Hour = date.getHours();
  let Minute = date.getMinutes();
  let Year = date.getFullYear();
  let Month = date.getMonth();

  let CurrentDate = GetCurrentDay(Day) + "," + GetCurrentMonth(Month) + " " + DayinMonth + "," + Year;
  let CurrentTime = Hour +":"+ GetCurrentMinute(Minute);

  var fullstring = City + " | " + CurrentDate + " | " + CurrentTime;
  return fullstring;
}

function Navbar ({logged}) {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <Nav style={{fontFamily: "Lato"}}>
      <NavbarContainer>
        <IconContainer>
          <MenuIcon to='#' className={sidebar ? 'close' : 'open'}  onClick={showSidebar}/>
        </IconContainer>
        <LogoContainer>
          <NavLogo href='/'>Sneakerstock</NavLogo>
          <LogoSmallText>{GetDateForText()}</LogoSmallText>
        </LogoContainer>
        <IconContainer>
            <Link style={{color: "black"}} to={'/login'}>
              <UserIcon/>
            </Link>
          <DotIcon  logged={logged}/>
            <Link style={{color: "black"}} to={'/checkout'}>
              <ShoppingCartIcon/>
            </Link>
            <DotIcon  style={{display: 'none'}}/>
        </IconContainer>
      </NavbarContainer>
    </Nav>
    <nav style={{zIndex:1}} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <GrFormClose className={sidebar ? 'icon-open' : 'icon-close'}  onClick={showSidebar}/>
            </Link>
          </li>
          <Items/>
        </ul>
      </nav>
    </>
  )
}

export default Navbar