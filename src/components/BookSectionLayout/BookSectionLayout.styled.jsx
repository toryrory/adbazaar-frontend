import styled from "styled-components";
import { BgHalfBottom, BgHalfNewest, BgHalfUsed, BgHalfChildren } from "../../../public/backgrounds";

export const Container = styled.section`
  //сделать красивее используя свитчкейс
  padding: 40px 0px 48px 16px;
  background: ${(props) =>
    props.id === "bestsellers" ? "var(--dark-gradient)" : "transparent"};
  background-image: ${(props) =>
    props.id === "bestsellers" && `url(${BgHalfBottom.src})`};
  background-position: ${(props) =>
    props.id === "bestsellers" && "top 0 right 0"};
  background-image: ${(props) =>
    props.id === "newest" && `url(${BgHalfNewest.src})`};
  background-position: ${(props) =>
    props.id === "newest" && "top 27px right 0"};
  background-image: ${(props) =>
    props.id === "children" && `url(${BgHalfChildren.src})`};
  background-position: ${(props) =>
    props.id === "children" && "top 101px right 16px"};
  background-image: ${(props) =>
    props.id === "used" && `url(${BgHalfUsed.src})`};
  background-position: ${(props) =>
    props.id === "used" && "bottom 0 right 16px"};
  background-repeat: no-repeat;
`;
export const Title = styled.h2`
  color: var(--light-grey);
font-family: 'TrueHelvetica', sans-serif;
font-weight: 400;
  font-size: 32px;
  line-height: 1;
  margin-bottom: 16px;
`;
export const Text = styled.p`
  color: var(--brand-color);
  font-family: 'TrueHelvetica-light', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 32px;
  width: 270px;
`;
export const BtnSeeMore = styled.button`
  display: flex;
  padding: 2px 0px;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
margin-left: auto;
margin-right: 16px;
  color: var(--light-grey);
font-size: 13px;
`;
