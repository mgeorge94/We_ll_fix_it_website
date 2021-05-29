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
     <ServicesP>
      Din confortul casei tale, ne contactezi iar noi venim să ridicăm echipamentul defect in cel mai scurt timp.
     </ServicesP>
    </ServicesCard>
    <ServicesCard>
     <ServicesIcon src={Icon2} />
     <ServicesH2>Reparam</ServicesH2>
     <ServicesP>
      Aparatul tău electronic va ajunge într-un service specializat și va fi reparat in cel mai profesionist mod.
     </ServicesP>
    </ServicesCard>
    <ServicesCard>
     <ServicesIcon src={Icon3} />
     <ServicesH2>Returnăm</ServicesH2>
     <ServicesP>
      Te sunăm pentru a stabili împreună ziua și ora la care se va preda aparatul, totul într-un timp scurt și la un preț
      competitiv.
     </ServicesP>
    </ServicesCard>
   </ServicesWrapper>
  </ServicesContainer>
 );
};

export default Services;
