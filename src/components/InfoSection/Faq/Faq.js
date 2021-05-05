import React from 'react';
import { Button } from '../../ButtonElements';
import { FaqWrapper, FaqCard, FaqQuestion, FaqAnswer } from './FaqElements';
import faqData from './FaqData';
import {
 InfoContainer,
 InfoWrapper,
 InfoRow,
 Column1,
 Column2,
 TextWraper,
 TopLine,
 Heading,
 BtnWrap,
 ImgWrap,
 Img,
} from '../InfoElements';

const Faq = ({
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
 faqData,
}) => {
 // populate faq

 return (
  <>
   <InfoContainer lightBg={lightBg} id={id}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Column1>
       <TextWraper>
        <TopLine>{topLine}</TopLine>
        <Heading lightText={lightText}>{headline}</Heading>
        <FaqWrapper>
         {faqData.map((element) => {
          return (
           <FaqCard className=' faqCard'>
            <FaqQuestion className='question'>{element.question}</FaqQuestion>
            <FaqAnswer className='answer'>{element.answer}</FaqAnswer>
           </FaqCard>
          );
         })}
        </FaqWrapper>
        {/* <Subtitle darkText={darkText}>cacat</Subtitle>; */}
        <BtnWrap>
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
        </BtnWrap>
       </TextWraper>
      </Column1>
      <Column2>
       <ImgWrap>
        <Img className='faqImg' src={img} alt={alt} />
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 );
};

export default Faq;
