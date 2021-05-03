import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/NavBar/NavBar';
import HeroSection from '../components/HeroSection/Hero';

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
  </>
 );
};

export default HomePage;
