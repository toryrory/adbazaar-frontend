import styled, {keyframes} from "styled-components";
import {
  BgFrames,
  BgAdbazaar,
} from "../../public/backgrounds";
import Image from "next/image";

export const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`
export const SectionHero = styled.section`
  background-image: url(${BgAdbazaar.src}),
    url(${BgFrames.src});
  background-repeat: no-repeat;
  background-size: 340px 48px, 356px 378px, cover;
  background-position: top 170px left 16px, top -12px right 0;
  padding: 338px 16px 80px;
`;

export const TextHero = styled.h3`
position: absolute;
top: 259px;
  color: var(--hero-rose);
  font-size: 22px;
  font-weight: 400;
`;

export const HeroStar = styled(Image)`
  opacity: 17%;
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  top: 30px;
  left: -65px;
  width: 166px;
`;

export const HalfStarDark = styled(Image)`
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  top: 527px;
  right: 0;
  width: 100px;
  z-index: 1;
`;
export const NewestStar = styled(Image)`
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  top: 1112px;
  right: -47px;
  width: 100px;
  opacity: 0.6;
`;
export const ChildrenStar = styled(Image)`
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  top: 1682px;
  right: 16px;
  width: 100px;
  opacity: 0.6;
  z-index: -1;
`;
export const UsedStar = styled(Image)`
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  top: 2867px;
  right: 16px;
  width: 100px;
  opacity: 0.6;
  z-index: -1;
`;

export const DarkBg = styled.div`
  background-color: #131b2c91; //main background color with opacity
  position: absolute;
  top: 527px;
  right: 0;
  width: 100px;
  height: 62px;
  z-index: 2;
`;
export const DarkBgChil = styled.div`
  background-color: #131b2c;
  position: absolute;
  top: 1730px;
  right: 16px;
  width: 100px;
  height: 62px;
  z-index: -1;
`;
export const DarkBgUsed = styled.div`
  background-color: #131b2c91;
  position: absolute;
  top: 2832px;
  right: 16px;
  width: 100px;
  height: 62px;
  z-index: -1;
`;


