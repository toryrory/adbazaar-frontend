import styled from 'styled-components';
import { Barlow_Condensed } from 'next/font/google';
import Image from 'next/image';

const barlowCondensed = Barlow_Condensed({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 36px;
  margin-bottom: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  color: var(--light-grey);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.15;
`;

export const Author = styled.p`
  color: var(--brand-color);
  font-size: 20px;
  line-height: 1;
`;

export const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
`;

export const Reviews = styled.p`
  color: var(--light-text);
  font-size: 14px;
  line-height: 1.15;
  text-align: right;
  letter-spacing: -0.6px;
  margin-top: 2px;
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  background: var(--product-background);
  border: 1px solid var(--dark-grey);
  border-radius: 10px;
`;

export const BookContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: var(--product-background);
  border: 1px solid rgba(184, 205, 225, 0.25);
  border-radius: 10px;
  padding: 24px 8px;
  margin-bottom: 10px;
`;

export const StyledImg = styled(Image)`
  width: 188px;
  height: 270px;
`;

export const Label = styled.p`
  position: absolute;
  font-size: 14px;
  line-height: 1.15;
  color: var(--white-text);
  background-color: #355896;
  padding: 8px;
  border-radius: 0px 5px 5px 0px;
  top: 24px;
  left: 0;
`;

export const ButtonFavorites = styled.button`
  display: flex;
  background-color: #355896;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding: 4px;
  position: absolute;
  top: 24px;
  right: 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 36px;
  line-height: 0.8;
  color: var(--white-text);
  display: block;
  font-stretch: condensed;
`;

export const Dollar = styled.span`
  font-size: 18px;
  margin-right: 4px;
  font-family: barlowCondensed, sans-serif;
`;

export const ButtonShopping = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #3b78e8;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  color: var(--white-text);
  font-size: 16px;
  line-height: 1;
`;

export const SellerContainer = styled.div`
  position: relative;
  width: 100%;
  background: var(--product-background);
  border: 1px solid rgba(184, 205, 225, 0.25);
  border-radius: 10px;
  padding: 10px 8px;
  margin-bottom: 24px;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: transparent;
  border: none;
  width: 100%;
`;

export const SellerBtnContainer = styled.div`
  padding: 7px 59px;
  background: #2b364a;
  border: 1px solid var(--dark-grey);
  border-radius: 10px;
  color: var(--light-text);
  font-size: 13px;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: -1.1%;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px;
  background: #2b364a;
  border: 1px solid var(--dark-grey);
  border-radius: 10px;
`;
