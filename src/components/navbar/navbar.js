import React, {useState, useEffect} from "react";
import { FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { animateScroll } from "react-scroll";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,
  NavLinks } from './navbar-elements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 200) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='./' onClick={toggleHome}>Мечеть города Свирска</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu> 
            <NavItem>
              <NavLinks
                to='documents'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Документы
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='plan'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  План строительства
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='payInfo'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Реквизиты
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
};

export default Navbar;