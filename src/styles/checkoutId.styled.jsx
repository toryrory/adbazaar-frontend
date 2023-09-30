import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 16px 0;
`;

export const OrderContainer = styled.div`
  position: relative;
  margin-top: 28px;
  padding: 100px 0 32px;
  justify-content: center;
  background-color: var(--product-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.5px solid var(--light-grey);
`;

export const TextContainer = styled.div`
  width: 270px;
  text-align: center;
  color: var(--white-text);
  line-height: 1.5;
  letter-spacing: 0em;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  color: var(--brand-color);
`;

export const SecondText = styled.p`
  font-size: 14px;
  margin-top: 27px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const SmallText = styled.p`
  font-size: 12px;
  margin-bottom: 90px;
`;

export const CloseButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
`;
