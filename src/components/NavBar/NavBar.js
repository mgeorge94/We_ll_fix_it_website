import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavItem, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import Logo from '../../images/logo/logo-hero.png';
const NavBar = ({ toggle }) => {
 return (
  <>
   <Nav>
    <NavbarContainer>
     <NavLogo src={Logo} to='/' />
     <MobileIcon onClick={toggle}>
      <FaBars />
     </MobileIcon>
     <NavMenu>
      <NavItem>
       <NavLinks to='who-we-are'> Cine suntem</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks to='what-we-do'> Ce facem</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks to='reviews'> Recenzii</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks to='faq'> Întrebări frecvente </NavLinks>
      </NavItem>
      {/* <NavItem>
                            <NavLinks to="contact"> Contact </NavLinks>
                            </NavItem> */}
     </NavMenu>
     <NavBtn>
      <NavBtnLink to='contact'>Contact</NavBtnLink>
     </NavBtn>
    </NavbarContainer>
   </Nav>
  </>
 );
};

export default NavBar;
