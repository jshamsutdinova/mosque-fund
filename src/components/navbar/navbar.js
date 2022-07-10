import React from "react";
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbar-elements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='./'>Мечеть города Свирска</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='documents'>Документы</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='plan'>План строительства</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='payInfo'>Реквизиты</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>

    </>
  )
};

export default Navbar;