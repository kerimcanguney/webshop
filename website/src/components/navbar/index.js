import {IconContainer, Nav, NavbarContainer, NavLogo,UserIcon, ShoppingCartIcon} from './navbarstyle.js'

const index = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>SneakerStock</NavLogo>
          <IconContainer>
            <UserIcon/>
            <ShoppingCartIcon/>
          </IconContainer>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default index