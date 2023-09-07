import styled from 'styled-components';
import Image from 'next/image';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-bottom: 0.5px solid var(--light-text);
  gap: 11px;
`;

export const StyledImg = styled(Image)`
  width: 60px;
  height: 80px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Reviews = styled.span`
  color: var(--white-text);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.6px;
  margin-left: 5px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 10px;
  width: 146px;
`;

export const Author = styled.p`
  font-size: 14px;
  line-height: 1.15;
  color: var(--brand-color);
  width: 146px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 11px;
  padding: 0 8px;
  border-right: 0.5px solid var(--light-text);
  border-left: 0.5px solid var(--light-text);
`;

export const Price = styled.p`
  font-size: 14px;
  line-height: 1.15;
  color: #ffffff;
`;

export const ButtonShopping = styled.button`
  display: flex;
  background-color: #3b78e8;
  border: none;
  border-radius: 12px;
  padding: 6px 20px;
`;

export const ButtonFavorites = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
