import styled from 'styled-components';

export const TabContainer = styled.div`
  padding: 24px 16px 106px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TabButton = styled.button`
  background: var(--main-background);
  padding: 0;
  width: 50%;
  border: none;
  border-style: solid;
  border-color: var(--light-grey);
  color: var(--brand-color);
  font-size: 16px;
  line-height: 1.15;
  height: 44px;
`;
