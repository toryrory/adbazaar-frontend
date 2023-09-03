import styled from "styled-components";
import Image from "next/image";
import { rotation } from "@/styles/index.styled";


export const Container = styled.div`
  background: var(--dark-gradient);
  padding: 24px 16px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const OrnamentImg = styled(Image)`
  /* padding: 48px 0 80px; */
  padding: ${props => props.distance === 'category' ? '48px 0 80px' : '19px 0 64px'};
`;

export const NewestContainer = styled.div`
  padding: 40px 16px 48px;
 position: relative;
`;

export const NewestStar = styled(Image)`
  position: absolute;
  top: -47px;
  right: 16px;
  width: 100px;
  animation: ${rotation} 10s linear infinite;
`;
export const DarkBgNewest = styled.div`
  position: absolute;
  top: -53px;
  right: 16px;
  width: 100px;
  height: 53px;
  background-color: #131b2c91;
`;

export const Title = styled.h3`
  color: var(--light-grey);
  font-size: 32px;
  line-height: 1;
  margin-bottom: 16px;
  font-weight: 400;
`;

export const Description = styled.p`
  color: var(--brand-color);
  font-size: 14px;
  line-height: 1.23;
  margin-bottom: 32px;
  width: 218px;
`;

export const NewestList = styled.ul`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  margin-bottom: 40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BtnSeeMore = styled.button`
  display: flex;
  padding: 2px 0px;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  margin-left: auto;
  color: var(--light-grey);
  font-size: 13px;
`;
