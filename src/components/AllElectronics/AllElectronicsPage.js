import React from 'react';
import { PageElement, ImageElement } from './AllElectronicsElements';
import Image from '../../images/photos/all-electronics.svg';
import { Electronice } from './ElectronicsData';
const AllElectronics = () => {
 //arrays of css styles
 const styles = {
  fontSize: ['2rem', '1rem', '1.2rem', '1.4rem', '1.6rem'],
  fontFamily: ['Sonsie One', 'Caveat', 'Fira Mono', 'Goblin One', 'Oswald', 'Pathway Gothic One'],
 };

 //randomise
 let trigger = false;
 (function randomise(styles) {
  // get dom elements
  const words = document.querySelectorAll('.word');

  const canvas = document.querySelector('.page-canvas');

  let index = 0;
  words.forEach((word) => {
   index++;
   word.style.top = (canvas.clientHeight - 100) * Math.random() + 'px';
   word.style.left = (canvas.clientWidth - 100) * Math.random() + 'px';
   word.style.fontSize = styles.fontSize[index];

   word.style.fontFamily = styles.fontFamily[index];
   for (let key in styles) {
    if (index > key.length) index = 0;
   }
  });
  if (trigger === false) {
   setTimeout(() => {
    randomise(styles);
   }, 0);
   trigger = true;
  } else {
   setTimeout(() => {
    randomise(styles);
   }, 10000);
  }
 })(styles);

 return (
  <PageElement className='page-canvas'>
   <ImageElement src={Image}></ImageElement>

   <ul>
    {Electronice.map((element) => {
     return <li className='word'>{element}</li>;
    })}
   </ul>
  </PageElement>
 );
};

export default AllElectronics;
