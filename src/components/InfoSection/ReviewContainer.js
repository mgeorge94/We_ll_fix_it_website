import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from './InfoElements';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import Subtitle from './InfoSection';
const ReviewContainer = (reviews, darkText) => {
 let [index, setIndex] = useState(0);
 let [review, setReview] = useState('some state');
 const paintNextReview = () => {
  const review = document.querySelector('.review');
  review.classList.remove('active');
  review.classList.add('old');
  index >= reviews.length ? (index = 0) : (index = index);

  setTimeout(() => {
   review.classList.remove('old');
   review.classList.add('active');
   setReview(reviews[index]);
   setIndex(index + 1);
  }, 1);
 };
 return (
  <>
   <ArrowLeft>
    <FaCaretLeft />
   </ArrowLeft>

   <Subtitle className='review active' darkText={darkText}>
    {review}
   </Subtitle>
   <ArrowRight onClick={paintNextReview}>
    <FaCaretRight />
   </ArrowRight>
  </>
 );
};

export default ReviewContainer;
