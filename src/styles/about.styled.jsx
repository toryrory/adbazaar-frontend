import styled from 'styled-components';
import Image from 'next/image';
import { rotation } from '@/styles/index.styled';

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 16px;
  color: #ffffff;
  text-indent: 40px;
`;

export const SmallStar = styled(Image)`
  opacity: 17%;
  animation: ${rotation} 10s linear infinite;
  position: absolute;
  width: 100px;
  top: 260px;
  right: 20px;
`;
