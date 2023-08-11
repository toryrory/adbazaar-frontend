import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 230px;
  padding: 10px 0;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background: var(--gradient);

  //   &:hover,
  //   &:focus {
  //     background: linear-gradient(235.32deg, #51c5ea 24.23%, #f18ff3 122.5%);
  //   }

  &:active {
    background: var(--brand-color);
  }
`;
