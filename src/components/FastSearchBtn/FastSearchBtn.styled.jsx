import styled from "styled-components";

export const Button = styled.button`
  min-width: fit-content;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  padding: 6px 16px;
  align-items: center;
  gap: 6px;
  border-radius: 25px;
  border: 1px solid var(--light-grey);
  color: var(--light-grey);
  font-size: 14px;
  text-align: center;
  line-height: 1.3;
`;