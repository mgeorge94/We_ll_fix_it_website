import React from 'react';
import Icon1 from '../../images/photos/collect.svg';
import Icon2 from '../../images/photos/repair.svg';
import Icon3 from '../../images/photos/return.svg';
import {
 ServicesContainer,
 ServicesH1,
 ServicesWrapper,
 ServicesCard,
 ServicesIcon,
 ServicesH2,
 ServicesP,
} from './ServicesElements';
const Services = () => {
 return (
  <ServicesContainer id='what-we-do'>
   <ServicesH1>Ce facem?</ServicesH1>
   <ServicesWrapper>
    <ServicesCard>
     <ServicesIcon src={Icon1} />
     <ServicesH2>Ridicam</ServicesH2>
     <ServicesP>Din comfortul casei tale ne contactezi, iar noi venim să ridicăm echipamentul stricat cât ai clipi.</ServicesP>
    </ServicesCard>
    <ServicesCard>
     <ServicesIcon src={Icon2} />
     <ServicesH2>Reparam</ServicesH2>
     <ServicesP>Ducem aparatura ta la service-urile cu care colaborăm, pentru ai reda gloria de altădată.</ServicesP>
    </ServicesCard>
    <ServicesCard>
     <ServicesIcon src={Icon3} />
     <ServicesH2>Returnam</ServicesH2>
     <ServicesP>Aducem aparatura înapoi la tine reparat, într-un timp foarte scurt, totul la un preț competitiv.</ServicesP>
    </ServicesCard>
   </ServicesWrapper>
  </ServicesContainer>
 );
};

export default Services;
