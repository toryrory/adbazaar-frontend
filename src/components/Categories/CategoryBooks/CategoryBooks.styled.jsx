import styled from 'styled-components';
import Image from 'next/image';

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

export const Ornament = styled.div`
  width: 100%;
  margin: 48px 0 80px;
`;

export const OrnamentImg = styled(Image)`
  width: 100%;
`;

export const NewestContainer = styled.div`
  padding: 40px 16px 48px;
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
