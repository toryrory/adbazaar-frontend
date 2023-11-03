import styled from "styled-components";
import Image from "next/image";
import { Bg404Frame, BgAdbazaar, BgFull } from "../../public/backgrounds";

export const BgImgStar = styled(Image)`
position: absolute;
top: 32px;
left:-65px;
  width: 166px;
  height: 166px;
  opacity: 0.4;
z-index: -1;
`;
export const BgImgFrame = styled(Image)`
  position: absolute;
  top: 98px;
  left: 0px;
  width: 390px;
  height: 378px;
  z-index: -1;
`;
export const BgImgTitle = styled(Image)`
  position: absolute;
  top: 496px;
  left: 16px;
  width: 180px;
  height: 25.412px;
  z-index: -1;
`;
export const PreviousBox = styled.button`
    display: flex;
    align-items: center;
    margin-top: 30px;
    border: none;
    background-color: transparent;
    &:focus {
        outline: none;
    }
`
export const PreviousText = styled.p`
  color: var(--light-text);
  font-size: 13px;
  line-height: 100%;
  padding: 10px 0px;
`;
export const ErrorCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-top: 200px;

`;
export const ErrorCodeText = styled.p`
  color: var(--light-text);
  margin-left: -58px;
  /* font-family: Helvetica Light; */
  font-size: 12px;
  line-height: 1.3; /* 15.6px */
  opacity: 0.9;
`;
export const ErrorCodeBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 60px;
  border-radius: 10px;
  border: 0.5px solid rgba(216, 233, 254, 0.15);
  background: var(--product-background);
`;
export const ErrorCode = styled.span`
  font-family: barlowCondensed, sans-serif;
  font-size: 40px;
  line-height: 1.3; /* 52px */
  background: var(
    --gradient,
    linear-gradient(89deg, #51c5ea 4.39%, #f18ff3 118.29%)
  );
  background-clip: text; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`;
export const ErrorText = styled.p`
  width: 266px;
  margin-top: 161px;
  padding-left: 16px;
  color: var(--hero-rose);
  /* font-family: Helvetica Light; */
  font-size: 18px;
  line-height: 1.2; /* 21.6px */
`;