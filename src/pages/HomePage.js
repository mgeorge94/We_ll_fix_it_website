import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/NavBar/NavBar';
import HeroSection from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/InfoSection';
import { whoPage, reviewPage, faqPage, contactPage } from '../components/InfoSection/data';
import Services from '../components/Services/Services';

const HomePage = () => {
 const [isOpen, setIsOpen] = useState(false);
 const toggle = () => {
  setIsOpen(!isOpen);
 };
 return (
  <>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <NavBar toggle={toggle} />
   <HeroSection />
   <InfoSection {...whoPage} />
   <Services />
   <InfoSection {...faqPage} />

   <InfoSection {...reviewPage} />
   <InfoSection {...contactPage} />
  </>
 );
};

export default HomePage;
