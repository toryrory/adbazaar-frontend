import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0;
`;

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.15;
  color: var(--light-grey);
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Reviews = styled.p`
  color: var(--brand-color);
  font-size: 14px;
  line-height: 1.15;
  letter-spacing: -0.6px;
`;
