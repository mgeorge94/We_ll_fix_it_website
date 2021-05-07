import React from 'react';
import { Logo } from '../NavBar/NavbarElements';
import { FooterContainer, LinkR } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import LogoImg from '../../images/logo/logo-hero.png';
import AllElectronicsPage from '../AllElectronics/AllElectronicsPage';

const Footer = () => {
 return (
  <FooterContainer>
   <div>
    <LinkR to='/AllElectronicsPage'>
     <p className='all-electronics'>Vezi lista completă de electronice pe care le reparăm</p>
    </LinkR>
    {/* <ul>
     <LinkR>
      <li>Termeni și condiții</li>
     </LinkR>

     <LinkR>
      <li> Politica de confidențialitate</li>
     </LinkR>
    </ul> */}
   </div>
   <p className='copiright'> &copy; We'll fix it {new Date().getFullYear()}. Toate drepturile sunt rezervate</p>
  </FooterContainer>
 );
};

export default Footer;
