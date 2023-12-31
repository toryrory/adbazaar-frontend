import styled from 'styled-components';
import Image from 'next/image';

export const Item = styled.li`
  border-bottom: 0.3px solid var(--light-grey);
  padding: 8px 24px 8px 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const BookImage = styled(Image)`
  height: 48px;
  width: 32px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 270px;
`;

export const InfoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.15;
  color: #ffffff;
  width: 165px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.p`
  font-size: 11px;
  line-height: 1.15;
  color: var(--brand-color);
`;

export const Author = styled.p`
  font-size: 12px;
  line-height: 1.23;
  color: var(--brand-color);
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.23;
  color: #ffffff;
  max-height: 46px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;

export const FullText = styled.p`
  font-size: 12px;
  line-height: 1.23;
  color: #ffffff;
`;

export const MoreBtn = styled.button`
  border: none;
  padding: 0;
  background: transparent;
`;
