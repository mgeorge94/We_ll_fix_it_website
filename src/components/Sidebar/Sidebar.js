import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLinks } from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
 return (
  <SidebarContainer isOpen={isOpen}>
   <Icon onClick={toggle}>
    <CloseIcon />
   </Icon>
   <SidebarWrapper>
    <SidebarLinks to='who-we-are' onClick={toggle}>
     {' '}
     Cine suntem
    </SidebarLinks>
    <SidebarLinks to='what-we-do' onClick={toggle}>
     {' '}
     Ce facem
    </SidebarLinks>

    <SidebarLinks to='reviews' onClick={toggle}>
     {' '}
     Recenzii
    </SidebarLinks>

    <SidebarLinks to='faq' onClick={toggle}>
     {' '}
     Întrebări frecvente{' '}
    </SidebarLinks>
    <SidebarLinks to='whyUs' onClick={toggle}>
     {' '}
     Nu te-ai convins?{' '}
    </SidebarLinks>
    <SidebarLinks to='contact' onClick={toggle}>
     {' '}
     Contact{' '}
    </SidebarLinks>
   </SidebarWrapper>
  </SidebarContainer>
 );
};

export default Sidebar;
