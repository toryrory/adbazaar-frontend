import styled from 'styled-components';
import Image from 'next/image';
import { Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  border-radius: 10px;
  border: 0.5px solid rgba(184, 205, 225, 0.25);
  background: var(--product-background);
  gap: 16px;
`;

export const StyledImg = styled(Image)`
  width: 70px;
  height: 100px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* min-width: 256px; */
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const Author = styled.p`
  font-size: 14px;
  line-height: 1.15;
  color: var(--brand-color);
  margin-bottom: 4px;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Type = styled.p`
  color: var(--light-grey);
  font-size: 12px;
  line-height: 1.15;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 124px;
`;

export const Price = styled.p`
  font-size: 26px;
  line-height: 0.8;
  color: #ffffff;
  font-stretch: condensed;
  font-family: barlowCondensed, sans-serif;
`;

export const Dollar = styled.span`
  font-size: 16px;
  margin-right: 5px;
  font-family: barlowCondensed, sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  background-color: #3b78e8;
  border-radius: 12px;
  padding: 6px 8px;
  font-size: 20px;
  line-height: 0.8;
  color: #ffffff;
  font-stretch: condensed;
`;

export const ButtonMinus = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 4px;
  font-size: 24px;
  line-height: 0.8;
  color: #ffffff;
  font-stretch: condensed;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
