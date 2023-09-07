import styled from 'styled-components';
import Image from 'next/image';
import { Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const StyledImg = styled(Image)`
  width: ${(props) => (props.variant === 'main' ? '77px' : '96px')};
  height: ${(props) => (props.variant === 'main' ? '112px' : '140px')};
  margin-bottom: 5px;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.variant === 'main' ? '146px' : '172px')};
  //   height: 260px;
  height: ${(props) => (props.variant === 'main' ? '242px' : '260px')};
  background-color: var(--product-background);
  border: 0.5px solid rgba(242, 242, 242, 0.15);
  border-radius: 10px;
  padding: ${(props) => (props.variant === 'main' ? '16px 8px' : '10px')};
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.15;
  color: var(--white-text);
  margin-top: 4px;
  width: ${(props) => (props.variant === 'main' ? '126px' : '152px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 12px;
  line-height: 1.15;
  color: var(--brand-color);
  margin-top: 4px;
  width: ${(props) => (props.variant === 'main' ? '126px' : '152px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 6px;
`;

export const Label = styled.p`
  position: absolute;
  font-size: 10px;
  line-height: 1.15;
  color: var(--white-text);
  background-color: #355896;
  padding: 4px 2px;
  border-radius: 0px 5px 5px 0px;
  top: ${(props) => (props.variant === 'main' ? '16px' : '10px')};
  left: 0;
`;

export const ButtonFavorites = styled.button`
  display: flex;
  background-color: #355896;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding: 2px;
  position: absolute;
  top: ${(props) => (props.variant === 'main' ? '100px' : '122px')};
  right: 0;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 26px;
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
  background-color: #3b78e8;
  border: none;
  border-radius: 12px;
  padding: ${(props) => (props.variant === 'main' ? '6px 16px' : '6px 20px')};
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
`;
export const Reviews = styled.span`
  color: var(--white-text);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.6px;
  margin-left: 10px;
`;
