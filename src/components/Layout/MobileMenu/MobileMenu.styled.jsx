import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1200;
`;

export const Menu = styled.div`
  height: 100vh;
  width: 332px;
  background-color: var(--main-background);
  padding: 24px 0 0;
  position: relative;
  overflow: hidden;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 40px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 32px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

export const UserLinkContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const UserLink = styled(Link)`
  color: var(--brand-color);
  font-size: 20px;
  line-height: 1.5;
`;
export const Divider = styled.span`
  color: var(--brand-color);
  font-size: 20px;
  line-height: 1.5;
`;

export const UserText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`;

export const UserName = styled.p`
  color: var(--brand-color);
  font-size: 20px;
  line-height: 1.5;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid transparent;
  background: linear-gradient(var(--grey), var(--grey)) padding-box,
    linear-gradient(to right, #51c5ea 3.43%, #f18ff3 100%) border-box;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  /* linear-gradient(82deg, #51c5ea 3.43%, #f18ff3 100%); */
`;

export const StyledImg = styled(Image)`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const GreyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--grey);
  width: 100%;
  border-top: 1px solid var(--brand-color);
  border-bottom: 1px solid var(--brand-color);
  padding: 20px 32px;
  margin-bottom: 24px;
`;

export const GreyItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.5;
`;

export const Title = styled.h4`
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  color: var(--brand-color);
  margin-bottom: 16px;
`;

export const List = styled.ul`
  padding: 0 32px;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  font-size: 16px;
  line-height: 1.5;
  color: var(--white-text);
  border-bottom: 0.3px solid #e6e6e6;
`;

export const SLList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  padding: 0;
  margin-left: 24px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--white-text);
`;

export const Text = styled.p`
  font-size: 10px;
  line-height: 1.1;
  color: var(--white-text);
  text-align: center;
`;
