import styled from "styled-components";
import Link from "next/link";

export const BookBox = styled(Link)`
  display: flex;
  gap: 16px;
  padding: 10px 0 13px;
  border-bottom: 0.5px solid var(--light-grey);
`;
export const BookDataBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    &:nth-child(2) {
        width: 146px;
    }
`
export const Text = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;

  &:nth-child(1) {
    color: var(--white-text);
    font-size: 16px;
  }
  &:nth-child(2) {
    color: var(--brand-color);
    font-size: 14px;
  }
`;
export const FormatBox = styled.div`
width: fit-content;
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 5px;
  border: 0.5px solid rgba(216, 233, 254, 0.15);
  background: var(--dark-text);
`;
export const FormatText = styled.p`
 color: var(--white-text);
 font-size: 14px;
`;