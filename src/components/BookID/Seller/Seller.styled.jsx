import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  padding: 32px 8px;
  margin: 0;
  position: absolute;
  background: var(--product-background);
  border-left: 1px solid rgba(184, 205, 225, 0.25);
  border-right: 1px solid rgba(184, 205, 225, 0.25);
  border-bottom: 1px solid rgba(184, 205, 225, 0.25);
  border-radius: 0 0 10px 10px;
  width: 100%;
  left: 0;
  z-index: 999;
`;

export const SellerContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  background: linear-gradient(var(--dark-grey), var(--dark-grey)) padding-box,
    linear-gradient(to right, #51c5ea 3.43%, #f18ff3 100%) border-box;
  border-radius: 50%;
  width: 72px;
  height: 72px;
`;

export const StyledImg = styled(Image)`
  max-width: 72px;
  max-height: 72px;
  border-radius: 50%;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  line-height: 1.15;
  color: var(--brand-color);
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 1.15;
  color: #ffffff;
  margin-top: 4px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactLink = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: underline;
  font-size: 13px;
  line-height: 1.15;
  color: var(--brand-color);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.15;
  color: #ffffff;
`;

export const LikeBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 14px;
  line-height: 1.15;
  color: #ffffff;
`;
