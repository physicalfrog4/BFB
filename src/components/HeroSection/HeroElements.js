import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
background: #644117;
opacity 16%; //light ups brown
display: fllex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

`

export const heroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 0%;
overflow: hidden;`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
color: yellow;
font-size: 48px;
text-align: center;


@media screen and (maz-width: 768px){
    font-size: 40px;

}

@media screen and (media-width: 480px){
    font-size: 32px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
color: yellow;
text-align: cneter;
max-width: 600px;
@media screen and (maz-width: 768px){
    font-size: 24px;

}

@media screen and (media-width: 480px){
    font-size: 18px;
}
`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`


export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

