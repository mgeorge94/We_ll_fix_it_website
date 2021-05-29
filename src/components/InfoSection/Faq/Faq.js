import React from 'react';
import { Button } from '../../ButtonElements';
import { FaqWrapper, FaqCard, FaqQuestion, FaqAnswer } from './FaqElements';
import { Link as LinkR } from 'react-router-dom';

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

 buttonLabel,
 img,
 alt,
 to,
 dark,
 dark2,
 faqData,
}) => {
 // populate faq
 //create jsx

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
            <FaqQuestion key={element.alt} className='question'>
             {element.question}
             {element.link !== undefined ? (
              <FaqAnswer className='answer'>
               {element.answer}
               <a href={element.link} rel='noreferrer' target='_blank'>
                <p className='all-electronics'>{element.span}</p>
               </a>
               <span>{element.continue}</span>
              </FaqAnswer>
             ) : element.answer.includes('Tesla') ? (
              <FaqAnswer className='answer'>
               {element.answer}
               <LinkR to='/AllElectronicsPage'>
                <p className='all-electronics'>aici</p>
               </LinkR>
               .
              </FaqAnswer>
             ) : (
              <FaqAnswer className='answer'>{element.answer}</FaqAnswer>
             )}
            </FaqQuestion>
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
