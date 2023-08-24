import styled from 'styled-components';
import Link from 'next/link';

export const Header = styled.div`
  padding: 20px 32px;
  border-bottom: 0.5px solid var(--brand-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--brand-color);
  font-weight: 700;
  font-size: 22px;
  line-height: 1.45;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const List = styled.ul`
  padding: 20px 32px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  border-bottom: 0.3px solid #e6e6e6;
  padding: 6px 0;
`;

export const CategoryLink = styled(Link)`
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.5;
`;

export const CategoryButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.5;
`;

export const SubList = styled.ul`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubItem = styled.li`
  padding: 6px 0;
`;

export const SubLink = styled(Link)`
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
`;
