import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0;
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
