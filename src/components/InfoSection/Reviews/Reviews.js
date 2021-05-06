import React, { useState } from 'react';
import { Subtitle } from '../InfoElements';
import { ArrowRight, ReviewContainer, Quote, Author, Product, Stars } from './ReviewsElements';
import { FaCaretRight, FaQuoteRight } from 'react-icons/fa';
import BeautyStars from 'beauty-stars';

const Ratings = ({ reviews, darkText }) => {
 //index
 let [index, setIndex] = useState(1);

 // rating Star
 let [rating, setRating] = useState(reviews[0].rating);
 const paintRating = () => {
  setRating(reviews[index].rating);
 };
 //produs
 let [product, setProduct] = useState(reviews[0].product);
 const paintProduct = () => {
  setProduct(reviews[index].product);
 };
 //review author name
 let [name, setName] = useState(reviews[0].author);
 const paintName = () => {
  setName(reviews[index].author);
 };
 //review text

 let [review, setReview] = useState(reviews[0].review);
 const paintNextReview = () => {
  const review = document.querySelector('.review');
  review.classList.remove('new');
  review.classList.add('old');

  index >= reviews.length ? (index = 0) : (index = index);

  setTimeout(() => {
   review.classList.remove('old');
   review.classList.add('new');
   setReview(reviews[index].review);
   paintName();
   paintProduct();
   paintRating();
   setIndex(index + 1);
  }, 300);
 };
 return (
  <>
   <ReviewContainer className='review new'>
    {/* <ArrowLeft>
     <FaCaretLeft />
    </ArrowLeft> */}

    <div>
     <Quote>
      <FaQuoteRight />
     </Quote>
     <Author>
      {name}
      <Stars>
       <BeautyStars size={20} inactiveColor='var(--dark-accent-color)' value={rating} />
      </Stars>
     </Author>
     <Product>Produs: {product}</Product>
     {/* rating */}
     <Subtitle className='reviewText' darkText={darkText}>
      {review}
     </Subtitle>
    </div>
    <ArrowRight onClick={paintNextReview}>
     <FaCaretRight />
    </ArrowRight>
   </ReviewContainer>
  </>
 );
};

export default Ratings;
