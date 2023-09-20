import styled from "styled-components";

export const TopBtn = styled.button`
  margin-top: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  padding: 8px;
  align-items: center;
  background-color: var(--dark-grey);
  border: none;
  margin-left: auto;
  &:focus {
    outline:none;
  }
`;
