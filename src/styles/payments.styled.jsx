import styled from 'styled-components';
import Image from 'next/image';
import { rotation } from '@/styles/index.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.15;
  color: var(--light-grey);
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.3;
  color: #ffffff;
  text-indent: 40px;
`;

export const Subtitle = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

export const NewPost = styled.a`
  font-size: 14px;
  line-height: 1.3;
  color: var(--brand-color);
  margin-left: 4px;
  margin-right: 4px;
`;

export const SmallStar = styled(Image)`
  opacity: 17%;
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  width: 100px;
  top: 1090px;
  right: 20px;
`;
