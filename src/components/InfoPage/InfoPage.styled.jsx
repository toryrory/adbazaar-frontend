import styled from 'styled-components';
import Image from 'next/image';
import { rotation } from '@/styles/index.styled';

export const Container = styled.div`
  padding: 16px 16px 88px;
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
  line-height: 1.3;
  margin-bottom: 40px;
  color: var(--brand-color);
`;

export const OrnamentContainer = styled.div`
  width: 107%;
  margin: 100px -16px 0;
`;

export const OrnamentImg = styled(Image)`
  width: 100%;
`;
