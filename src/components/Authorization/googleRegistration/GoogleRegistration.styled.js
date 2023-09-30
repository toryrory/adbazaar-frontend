import styled from 'styled-components';

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: var(--light-text);
  margin-bottom: 14px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient);
  border-radius: 16px;
  width: 156px;
  height: 44px;
`;

export const SocialLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 4px;
  color: var(--brand-color);
  width: 154px;
  height: 42px;
  font-size: 14px;
  line-height: 1.42;
  background-color: var(--main-background);
  border-radius: 16px;
`;
