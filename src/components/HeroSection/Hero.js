import React from 'react';
import Video from '../../videos/hero-video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroImg, HeroCatchPhrase } from './HeroElements';
import Logo from '../../images/logo/logo-hero.png';

const Hero = () => {
 return (
  <HeroContainer>
   <HeroBg>
    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
   </HeroBg>
   <HeroContent>
    <HeroImg src={Logo}></HeroImg>
    <HeroCatchPhrase>Ridicăm | Reparăm | Returnăm</HeroCatchPhrase>
   </HeroContent>
  </HeroContainer>
 );
};

export default Hero;
