import styled from 'styled-components';
export const PageElement = styled.section`
 background-color: black;
 height: 100vh;
 width: 100vw;
 position: fixed;
 animation: slide 1s ease-in-out;
 @keyframes slide {
  0% {
   transform: translateX(-400%);
  }
  100% {
   transform: translateX(0);
  }
 }
 color: white;

 ul {
  list-style: none;
  position: relative;
  top: 0;
  padding: 10rem;
  width: 90%;
  height: 90%;
 }
 li {
  transition: all 5s ease;
  white-space: nowrap;
  position: absolute;

  :hover {
   color: var(--light-accent-color);
   transform: scale(2);
  }
 }
`;
export const ImageElement = styled.img`
 width: 20%;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 position: absolute;
`;
