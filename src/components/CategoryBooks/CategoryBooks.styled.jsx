import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  background: var(--dark-gradient);
  padding: 24px 16px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 172px;
  //   height: 260px;
  background-color: var(--product-background);
  border: 0.5px solid rgba(242, 242, 242, 0.15);
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.15;
  color: var(--white-text);
  margin-top: 4px;
  width: 152px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 12px;
  line-height: 1.15;
  color: var(--brand-color);
  margin-top: 4px;
  width: 152px;
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
  top: 10px;
  left: 0;
`;

export const ButtonFavorites = styled.button`
  display: flex;
  background-color: #355896;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding: 2px;
  position: absolute;
  top: 122px;
  right: 0;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 26px;
  line-height: 0.8;
  color: var(--white-text);
  display: block;
`;

export const Dollar = styled.span`
  font-size: 14px;
  margin-right: 4px;
`;

export const ButtonShopping = styled.button`
  display: flex;
  background-color: #3b78e8;
  border: none;
  border-radius: 12px;
  padding: 6px 20px;
`;
