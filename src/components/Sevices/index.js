import React from "react";
import Icon1 from '../../images/teamUp.png';
import Icon2 from '../../images/teamUp.png';
import Icon3 from '../../images/teamUp.png';
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Title</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>first</ServicesH2>
            <ServicesP>paragrpah</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>second</ServicesH2>
            <ServicesP>paragrpah</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>third</ServicesH2>
            <ServicesP>paragrpah</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
