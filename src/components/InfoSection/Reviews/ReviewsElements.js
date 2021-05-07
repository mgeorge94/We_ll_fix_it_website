import styled from 'styled-components';
export const Author = styled.h3`
 padding-bottom: 5px;
 font-size: 2.2rem;
 display: flex;
 @media screen and (max-width: 900px) {
  font-size: 1.5rem;
 }
`;
export const Product = styled.h4`
 padding-bottom: 10px;
`;
export const ArrowLeft = styled.div`
 position: relative;
 color: var(--light-accent-color);
 font-size: 3rem;
 height: 2rem;
 width: 2rem;
 left: -2rem;

 &:hover {
  filter: brightness(130%);
  cursor: pointer;
 }
`;
export const ArrowRight = styled.div`
 position: relative;
 color: var(--light-accent-color);
 font-size: 3rem;
 right: 0rem;
 height: 2rem;
 width: 2rem;
 &:hover {
  filter: brightness(130%);
  cursor: pointer;
 }
`;
export const ReviewContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 padding-top: 2rem;
 margin: 3rem 0;

 transform: rotateX(0);
 width: 600px;
 @media screen and (max-width: 1200px) {
  width: 50vw;
 }
 @media screen and (max-width: 900px) {
  width: 60vw;
 }
 @media screen and (max-width: 750px) {
  width: 90vw;
  margin: 5rem 0;
 }

 &.old {
  transform: rotateX(180deg);
  transition: all 0.5s ease-in-out;
 }
 &.new {
  transform: rotateX(360deg);
  transition: all 0.5s ease-in-out;

  transition: transform 0.9s ease-out;
 }
 height: 20rem;

 transition: all 1s ease;
`;
export const Quote = styled.div`
 position: absolute;
 color: var(--light-accent-color);
 opacity: 0.4;
 font-size: 5rem;
 right: 2rem;
 bottom: 1rem;
`;
export const Stars = styled.div`
 padding-left: 2rem;
 padding-top: 7px;
`;
