import styled from 'styled-components';
export const FaqWrapper = styled.aside`
 width: 30vw;
 height: 30vw;
 margin: 5rem 0;
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 1000px) {
  height: 50vw;
  width: 40vw;
 }
 @media screen and (max-width: 760px) {
  width: 80vw;
  height: 70vw;
 }
 @media screen and (max-width: 500px) {
  width: 80vw;
  height: 80vw;
 }
`;
export const FaqCard = styled.div`
 width: 100%;

 flex: 1;
 position: relative;
 background: #e9e9e9;
 padding: 1rem;
 border-radius: 10px;
 margin-bottom: 5px;
 transition: all 0.5s ease;
 @media screen and (max-width: 900px) {
  /* font-size: 0.8rem; */
  padding: 10px;
 }

 &:hover {
  background: #d4d4d4;
  margin-left: 2rem;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.45);
  flex: 2;
 }

 &:hover .question {
  font-size: 1rem;
  transition: all 0.2s ease-in;
  color: var(--light-accent-color);
  div {
   background: lime;
  }
 }
 &:hover .answer {
  display: block;
  padding-top: 18px;
  transition: all 0.2 ease;
  animation: text-animation 0.4s linear;
  font-weight: 200;
  p {
   display: inline-block;
   color: var(--light-accent-color);
   cursor: pointer;
   font-weight:300
   
   }
  }
 }
 @keyframes text-animation {
  0% {
   font-size: 1px;
  }
  100% {
   font-size: 13px;
  }
 }
`;
export const FaqQuestion = styled.h4`
 font-size: 1rem;
 color: var(--dark-accent-color);
 position: relative;
 cursor: default;
`;
export const FaqAnswer = styled.p`
 position: relative;
 color: black;
 /* font-size: 13px; */
 display: none;
 transition: all 1 ease;
 cursor: default;
`;
