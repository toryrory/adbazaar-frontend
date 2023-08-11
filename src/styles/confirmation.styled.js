import styled from 'styled-components';
import Link from 'next/link';

export const Text = styled.p`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  padding-top: 24px;
  font-size: 18px;
  color: var(--light-text);
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

export const ErrorText = styled.p`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  color: var(--error-color);
  margin-bottom: 56px;
`;
