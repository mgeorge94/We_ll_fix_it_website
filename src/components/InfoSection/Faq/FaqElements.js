import styled from 'styled-components';
export const FaqWrapper = styled.aside`
 width: 30vw;
 height: 35vw;
 position: relative;

 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 margin: auto;
 @media screen and (max-width: 1000px) {
  height: 40vw;
  width: 40vw;
 }
 @media screen and (max-width: 760px) {
  width: 80vw;
  height: 60vw;
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
  flex: 3;
  @media screen and (max-width: 900px) {
   flex: 2;
  }
 }

 &.active .question {
  font-size: 1rem;
  transition: all 0.2s ease-in;
  color: var(--light-accent-color);
 }
 &.active .answer {
  display: block;
  padding-top: 18px;
  margin-bottom: 18px;
  transition: all 0.2 ease;
  @media screen and (max-width: 900px) {
   /* font-size: 0.8rem; */
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
 display: none;
 transition: all 1 ease;
 cursor: default;
`;
