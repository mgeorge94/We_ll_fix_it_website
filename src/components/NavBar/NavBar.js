import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, Logo, MobileIcon, NavLinks, NavItem, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import LogoImg from '../../images/logo/logo.png';
const NavBar = ({ toggle }) => {
 const [scrollNav, setScrollNav] = useState(false);
 const changeNav = () => {
  if (window.scrollY >= 700) {
   setScrollNav(true);
  } else {
   setScrollNav(false);
  }
 };
 useEffect(() => {
  window.addEventListener('scroll', changeNav);
 }, []);
 // function to scroll to top
 const scrollTop = () => {
  scroll.scrollToTop();
 };
 return (
  <>
   <Nav scrollNav={scrollNav}>
    <NavbarContainer>
     <Logo src={LogoImg} onClick={scrollTop} to='/' />
     <MobileIcon onClick={toggle}>
      <FaBars />
     </MobileIcon>
     <NavMenu>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to='who-we-are'>
        Cine suntem
       </NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to='what-we-do'>
        Ce facem
       </NavLinks>
      </NavItem>

      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to='faq'>
        Întrebări frecvente
       </NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to='reviews'>
        Recenzii
       </NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to='whyUs'>
        Nu te-ai convins?
       </NavLinks>
      </NavItem>
     </NavMenu>
     <NavBtn>
      <NavBtnLink smooth={true} duration={500} spy={true} exact='true' offset={-80} to='contact'>
       Contact
      </NavBtnLink>
     </NavBtn>
    </NavbarContainer>
   </Nav>
  </>
 );
};

export default NavBar;
