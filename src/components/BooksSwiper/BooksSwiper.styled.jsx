import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  margin-bottom: 32px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
