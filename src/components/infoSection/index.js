import React from "react";
import {ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from "./infoElements";
import { Button } from "../ButtonElement";
const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  TopLine<Heading> Heading</Heading>
                  <Subtitle>Subtitle</Subtitle>
                  <BtnWrap>
                    <Button to="home"/>
                  </BtnWrap>
                </TopLine>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap> <Img />
            </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
