import styled from 'styled-components';
import Link from 'next/link';

export const ConfirmationPage = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
`;

export const ConfirmationContainer = styled.div`
  position: relative;
  padding: 12px 16px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const Title = styled.h2`
  color: var(--brand-color);
  margin-top: 24px;
  margin-bottom: 116px;
  font-size: 32px;
  font-weight: 700;
  line-height: 0.625;
`;

export const Text = styled.p`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  color: var(--light-text);
  margin-bottom: 8px;
`;
export const AdditionalText = styled.p`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  color: var(--light-text);
  margin-bottom: 56px;
`;

export const Email = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: var(--light-text);
`;

export const ResendLink = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 1.14;
  color: var(--light-text);
  text-decoration: underline;
  margin-bottom: 110px;
`;

export const MainButton = styled.button`
  font-size: 16px;
  line-height: 1.25;
  padding: 12px 80px;
  border-radius: 10px;
  border: none;
  background: var(--gradient);
  margin-bottom: 32px;
`;

export const ErrorText = styled.p`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  color: var(--error-color);
  margin-bottom: 56px;
`;
