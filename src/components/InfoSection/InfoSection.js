import React from 'react';
import { Button, ButtonR } from '../ButtonElements';
import {
 InfoContainer,
 InfoWrapper,
 InfoRow,
 Column1,
 Column2,
 TextWraper,
 TopLine,
 Heading,
 Subtitle,
 BtnWrap,
 ImgWrap,
 Img,
} from './InfoElements';
const InfoSection = ({
 lightBg,
 id,
 imgStart,
 topLine,
 lightText,
 headline,
 darkText,
 description,
 buttonLabel,
 img,
 alt,
 to,
 dark,
 dark2,
}) => {
 return (
  <>
   <InfoContainer lightBg={lightBg} id={id}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Column1>
       <TextWraper>
        <TopLine>{topLine}</TopLine>
        <Heading lightText={lightText}>{headline}</Heading>
        {description.map((paragraph) => {
         return <Subtitle darkText={darkText}>{paragraph}</Subtitle>;
        })}
        <BtnWrap>
         {to.includes('http') ? (
          //  go to external link
          <ButtonR
           href={to}
           smooth={true}
           duration={500}
           spy={true}
           exact='true'
           offset={-80}
           dark={dark ? 1 : 0}
           dark2={dark2 ? 1 : 0}
          >
           {' '}
           {buttonLabel}
          </ButtonR>
         ) : (
          //  jump to page section
          <Button
           to={to}
           smooth={true}
           duration={500}
           spy={true}
           exact='true'
           offset={-80}
           dark={dark ? 1 : 0}
           dark2={dark2 ? 1 : 0}
          >
           {buttonLabel}
          </Button>
         )}
        </BtnWrap>
       </TextWraper>
      </Column1>
      <Column2>
       <ImgWrap>
        <Img src={img} alt={alt} />
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 );
};

export default InfoSection;
