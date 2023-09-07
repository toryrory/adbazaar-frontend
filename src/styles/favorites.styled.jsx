import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 16px;
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
  background-color: var(--grey);
  border-top: 0.5px solid var(--brand-color);
  border-bottom: 0.5px solid var(--brand-color);
  padding: 0 16px 48px;
  margin-bottom: 80px;
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  color: var(--light-grey);
  background: transparent;
  border: none;
  font-size: 13px;
  line-height: 1.15;
  margin-left: auto;
  margin-right: auto;
`;
