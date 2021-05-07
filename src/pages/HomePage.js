import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/NavBar/NavBar';
import HeroSection from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/InfoSection';
import faqData from '../components/InfoSection/Faq/FaqData';
import { whoPage, reviewPage, faqPage, contactPage } from '../components/InfoSection/data';
import { reviews } from '../components/InfoSection/Reviews/ReviewsData';
import Services from '../components/Services/Services';
import Faq from '../components/InfoSection/Faq/Faq';
import Footer from '../components/Footer/Footer';

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
   <Faq {...faqPage} faqData={faqData} />
   {/* <InfoSection  /> */}

   <InfoSection reviews={reviews} {...reviewPage} />
   <InfoSection {...contactPage} />
   <Footer />
  </>
 );
};

export default HomePage;
