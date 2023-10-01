import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: -16px;
  margin-right: -16px;
  /* align-items: center; */
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 9px;
  padding: 12px 16px;
  border-bottom: 0.5px solid var(--light-text);
`;

export const Title = styled.p`
  color: var(--brand-color);
  font-size: 14px;
  line-height: 1.15;
  width: 156px;
  border-right: 0.5px solid var(--light-text);
`;

export const Text = styled.p`
  color: var(--white-text);
  font-size: 14px;
  line-height: 1.15;
  width: 80px;
  padding-right: 8px;
  border-right: 0.5px solid var(--light-text);
  text-align: right;
`;
