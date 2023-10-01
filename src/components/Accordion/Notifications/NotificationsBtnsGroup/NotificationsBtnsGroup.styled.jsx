import styled from "styled-components";
import Link from "next/link";

export const BtnsGroup = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BtnBox = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
  margin-bottom:${({$group}) => $group === 'section-btns' ? '0px' : '24px'};
  background-color: transparent;
  border: none;
  color: var(--brand-color);
  font-size: 13px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
  color: var(--brand-color);
`;
