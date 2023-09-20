import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 16px 90px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5.5px 0;
  color: var(--light-text);
  background: transparent;
  border: none;
  margin-bottom: 68px;
  font-size: 13px;
  line-height: 1;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.15;
  font-weight: 400;
  margin-bottom: 16px;
  color: var(--light-grey);
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 1;
  margin-bottom: 16px;
  color: var(--brand-color);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
