import styled from 'styled-components';
export const PageElement = styled.section`
 background-color: black;
 height: 100vh;
 width: 100vw;
 display: grid;
 color: white;
 grid-template-columns: 1fr 2fr 1fr;
 grid-template-rows: 1fr 1fr 1fr 1fr;

 ul {
  list-style: none;
  position: fixed;
  top: 0;
 }
 li {
  position: absolute;
  transition: all 5s ease;
  white-space: nowrap;
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
export const ListLeft = styled.div`
 /* background: lime; */
 grid-row-start: 1;
 grid-row-end: 5;
 display: flex;
 justify-items: center;
 align-items: center;
 flex-direction: column;
`;
export const ListRight = styled.div`
 /* background: red; */
 flex-direction: column;

 display: flex;
 justify-items: center;
 align-items: center;
 grid-column-start: 3;
 grid-row-start: 1;
 grid-row-end: 5;
`;
export const ListTop = styled.div`
 /* background: blue; */
 grid-column-start: 2;
 grid-column-end: 3;
 display: flex;
 justify-items: center;
 align-items: center;
 ul {
  display: flex;
 }
 li {
  padding-left: 2rem;
 }
`;
export const ListBottom = styled.div`
 /* background: yellow; */
 grid-column-start: 2;
 grid-row: 4;
 grid-column-end: 3;
 display: flex;
 justify-items: center;
 align-items: center;
 ul {
  display: flex;
 }
 li {
  padding-left: 2rem;
 }
`;
