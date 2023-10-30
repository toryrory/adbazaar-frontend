import styled from "styled-components";

export const BookList = styled.ul`
margin-bottom: 24px;
`
export const LoadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 48px;
  margin-left:auto;
  color: var(--brand-color);
  background-color: transparent;
  font-size: 12px;
  &:focus {
outline: none;
  }
`;
export const Text = styled.p`
  color: var(--brand-color);
  width: 180px;
  /* font-family: Helvetica Light; */
  font-size: 13px;
  margin-bottom: 16px;
`;
export const ActionBtnsBox = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: flex-start;
`;
export const BtnAction = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  color: var(--brand-color);
  /* font-family: Helvetica Light; */
  font-size: 11px;
`;