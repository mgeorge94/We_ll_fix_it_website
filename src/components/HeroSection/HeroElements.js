import styled from 'styled-components';

export const HeroContainer = styled.section`
 background: black;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 800px;
 position: relative;
 z-index: 1;
`;
export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
`;
export const VideoBg = styled.video`
 width: 100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit: cover;

 background-color: #232a34;
`;
export const HeroContent = styled.div`
 width: 80%;
 height: 80wh;
 position: absolute;
 z-index: 2;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: auto;
`;
export const HeroImg = styled.img`
 width: 50%;
 @media screen and (max-width: 900px) {
  width: 94%;
 }
`;

export const HeroCatchPhrase = styled.h4`
 color: white;
 font-weight: 100;
 font-size: 2vw;
 white-space: nowrap;
 overflow: hidden;

 @media screen and (max-width: 900px) {
  font-size: 4vw;
 }
`;
