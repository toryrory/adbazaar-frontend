import styled from '@emotion/styled';
import Link from 'next/link';

export const FooterContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #1f293e 0%, #131b2c 63.35%);
  padding: 40px 16px 0;
  align-items: center;
  justify-content: space-between;
  //   max-height: 371px;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  margin-bottom: 34px;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.15;
  color: var(--white-text);
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuLink = styled(Link)`
  font-size: 14px;
  line-height: 1.15;
  color: var(--brand-color);
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  text-align: right;
`;

export const ContactLink = styled.a`
  font-size: 16px;
  line-height: 1.25;
  color: var(--white-text);
`;

export const SLList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 22px;
`;

export const SLLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  margin-top: 48px;
  font-size: 10px;
  line-height: 1.1;
  color: var(--white-text);
  text-align: center;
`;
