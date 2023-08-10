import styled from "styled-components";
import bgTop from "../../public/backgrounds/bg-account-top.png";
import bgBottom from "../../public/backgrounds/bg-account-bottom.png";

export const Container = styled.div`
  padding: 112px 16px 48px;
  background-image: url(${bgTop.src}), url(${bgBottom.src});
  background-repeat: no-repeat;
  background-position: top 0px left 0px, top 608px right 0px;
`;
export const Title = styled.h2`
    color: var(--brand-color);
    font-weight: 400;
    font-size: 24px;
    line-height: 0.87;
    margin-bottom: 52px;
`
export const LogOutBtn = styled.button`
margin-top: 80px;
margin-left: auto;
margin-right: auto;
padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--brand-color);
  line-height: 1.5;
`;