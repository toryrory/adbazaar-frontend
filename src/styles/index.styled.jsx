import styled from "styled-components";
import { BgName, BgTop, BgFrames, BgHalfTop } from "../../public/backgrounds";

export const SectionHero = styled.section`
  background-image: url(${BgName.src}), url(${BgTop.src}), url(${BgFrames.src}),
    url(${BgHalfTop.src});
  background-repeat: no-repeat;
  background-size: 340px 90px, 101px 166px, 356px 378px, 100px, cover;
  background-position: top 170px left 16px, top 0 left 0, top -12px right 0,
    bottom 0 right 0;
  padding: 338px 16px 36px;
`;


