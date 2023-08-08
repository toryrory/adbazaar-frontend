import styled from 'styled-components';
import Link from 'next/link';

export const ResetPage = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
`;

export const ResetContainer = styled.div`
  position: relative;
  padding: 12px 16px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const UserImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--brand-color);
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const Title = styled.h2`
  color: var(--brand-color);
  margin-bottom: 106px;
  font-size: 32px;
  font-weight: 700;
  line-height: 0.625;
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1.5px solid var(--brand-color);
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.42;
  text-align: left;
  color: var(--light-text);
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 1.25;
  outline: none;
  background: none;
  border: none;

  padding: 8px 0;
  color: var(--white-text);

  &::placeholder {
    color: var(--brand-color);
  }
`;

export const Text = styled.p`
  text-align: left;
  font-size: 14px;
  color: var(--light-text);
  margin-bottom: 60px;
`;

export const MainButton = styled.button`
  font-size: 16px;
  line-height: 1.25;
  padding: 12px 80px;
  border-radius: 10px;
  border: none;
  background: var(--gradient);
  margin-bottom: 28px;
`;

export const RedirectText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  color: var(--light-text);
  margin-bottom: 86px;
`;

export const RedirectLink = styled(Link)`
  color: var(--light-text);
  font-weight: 700;
`;

export const SLText = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: var(--light-text);
  margin-bottom: 14px;
`;

export const SLList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const SLItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient);
  border-radius: 16px;
  width: 156px;
  height: 44px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-color);
  width: 154px;
  height: 42px;
  font-size: 14px;
  line-height: 1.42;
  background-color: var(--main-background);
  border-radius: 16px;
`;
