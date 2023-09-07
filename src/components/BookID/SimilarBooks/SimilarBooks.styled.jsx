import styled from 'styled-components';
import Image from 'next/image';
import { rotation } from '@/styles/index.styled';

export const Container = styled.div`
position: relative;
  padding: 228px 0 40px;
`;

export const StarSimilar = styled(Image)`
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  width: 100px;
  top: 630px;
  left: -43px;
  opacity: 0.8;
`;
export const DarkBgSimilar = styled.div`
  background-color: #131b2c91;
  position: absolute;
  width: 80px;
  height: 40px;
  top: 690px;
  left: -20px;
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
  margin-bottom: 40px;
  width: 218px;
`;

export const List = styled.ul`
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
