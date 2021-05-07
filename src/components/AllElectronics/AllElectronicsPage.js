import React from 'react';
import { PageElement, ImageElement, ListLeft, ListRight, ListTop, ListBottom } from './AllElectronicsElements';
import Image from '../../images/photos/all-electronics.svg';
import { Electronice } from './ElectronicsData';
const AllElectronics = () => {
 //arrays of css styles
 const styles = {
  padding: ['0.5rem', '1rem', '1.5rem'],
  fontSize: ['2rem', '0.8rem', '1rem', '1.2rem', '1.4rem', '1.6rem'],
  fontFamily: ['Sonsie One', 'Caveat', 'Fira Mono', 'Goblin One', 'Oswald', 'Pathway Gothic One'],
 };
 let trigger = false;
 //randomise
 const randomise = (styles) => {
  // get dom elements
  const words = document.querySelectorAll('.word');
  const canvas = document.querySelector('.page-canvas');
  console.log(canvas);

  words.forEach((word) => {
   for (let key in styles) {
    let index = Math.floor(Math.random() * key.length);
    console.log(key);
    word.style.top = (canvas.clientHeight - 100) * Math.random() + 'px';
    word.style.left = (canvas.clientWidth - 100) * Math.random() + 'px';
    word.style.padding = styles.padding[index];
    word.style.fontSize = styles.fontSize[index];
    if (trigger === false) {
     word.style.fontFamily = styles.fontFamily[index];
     trigger = true;
    }
   }
  });
  const reRender = setTimeout(() => {
   randomise(styles);
  }, 10000);
 };

 return (
  <PageElement className='page-canvas'>
   <ImageElement onclick={randomise(styles)} src={Image}></ImageElement>

   <ul>
    {Electronice.map((element) => {
     return <li className='word'>{element}</li>;
    })}
   </ul>
  </PageElement>
 );
};

export default AllElectronics;
