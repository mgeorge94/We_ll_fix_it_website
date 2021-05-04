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
     <ServicesP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, praesentium</ServicesP>
    </ServicesCard>
    <ServicesCard>
     <ServicesIcon src={Icon2} />
     <ServicesH2>Reparam</ServicesH2>
     <ServicesP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, praesentium molestiae</ServicesP>
    </ServicesCard>
    <ServicesCard>
     <ServicesIcon src={Icon3} />
     <ServicesH2>Returnam</ServicesH2>
     <ServicesP>
      Lquatur eligendi quasi vel temporibus incidunt dolore, maiores minima eveniet, accusantium quis! Suscipit mollitia tempora
      laborum debitis dolores laudantium.
     </ServicesP>
    </ServicesCard>
   </ServicesWrapper>
  </ServicesContainer>
 );
};

export default Services;
