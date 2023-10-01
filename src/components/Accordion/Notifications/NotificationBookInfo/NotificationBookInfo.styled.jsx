import styled from "styled-components";
import Image from "next/image";

export const StyledImg = styled(Image)`
  width: 39.5px;
  height: 50px;
  flex-shrink: 0;
`;
export const BookInfoBox = styled.div`
  width: 287px;
  display: flex;
  justify-content: space-between;
`;
export const BookInfoText = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BookInfoBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BookTitle = styled.p`
  overflow: hidden;
  color: var(--white-text);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
`;
export const BookAuthor = styled.p`
  overflow: hidden;
  color: var(--brand-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
`;
export const ActiveBtn = styled.button`
  display: flex;
  width: 60px;
  padding: 4px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  border: none;
  background-color:${({$status}) => $status === 'active' ? 'var(--green)' : 'var(--error-color)'};
  font-size: 12px;
  color: var(--main-background);
  &:focus {
    outline: none;
  }
`;
export const BookInfoPrice = styled.p`
  color: var(--white-text);
  font-size: 14px;
  text-align: right;
`;
export const BookInfoDollar = styled.span`
  color: var(--white-text);
  text-align: right;
  font-size: 10px;
`;