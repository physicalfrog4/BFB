import React, { useState } from "react";
import {
  HeroContainer,
  heroBg,
  HeroH1,
  HeroP,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
        <HeroContent>
          <HeroH1>UPS APP PUNCH LINE</HeroH1>
          <HeroP>
            Find other UPSers to help with your projects or to teach you new
            skills to succeed!
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="getStarted"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true" dark="true">
              Get Started
              {hover ? <ArrowForward /> : <ArrowRight />};
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
