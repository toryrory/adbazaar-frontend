import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 107%;
  margin: 0 -16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TabButton = styled.button`
  background: #2b364a;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  width: 50%;
  border: none;
  color: var(--white-text);
  border-style: solid;
  border-color: var(--light-grey);
`;

export const ActiveTabButton = styled.button`
  background: var(--product-background);
  display: flex;
  justify-content: center;
  padding: 8px 0;
  width: 50%;
  border: none;
  color: #ffffff;
`;

export const AboutContainer = styled.div`
  background: var(--product-background);
  display: flex;
  justify-content: center;
  padding: 24px 16px 32px;
  gap: 30px;
`;

export const StyledImg = styled(Image)`
  width: 70px;
  height: 100px;
  margin-left: 14px;
`;

export const Description = styled.p`
  color: var(--white-text);
  font-size: 13px;
  line-height: 1.15;
`;
