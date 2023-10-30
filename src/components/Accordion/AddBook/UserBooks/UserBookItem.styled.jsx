import styled from "styled-components";
import Image from "next/image";

export const BookAdContainer = styled.li`
  display: flex;
  width: 358px;
  padding: 8px;
  align-items: flex-start;
  gap: 10px;
  border-bottom: 0.5px solid var(--light-text);
  opacity: ${({ $active }) =>
    $active ? 1 : 0.7};
`;

export const StyledImg = styled(Image)`
  width: 60px;
  height: 80px;
  background: linear-gradient(
      0deg,
      rgba(59, 120, 232, 0.15) 0%,
      rgba(59, 120, 232, 0.15) 100%
    ),
    lightgray 50% / cover no-repeat;
`;
export const BookInfoBox = styled.div`
  display: flex;
  width: 165px;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  gap: 8px;
  border-right: 0.5px solid var(--light-grey);
`;
export const BookText = styled.p`
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  color: ${({ $text }) =>
    $text === "title" ? "var(--white-text)" : "var(--brand-color)"};
  font-size: ${({ $text }) =>
    $text === "title" ? "16px" : "14px"};
  width: 136px;
`;
export const RatingBox = styled.div`
  display: flex;
  width: 146px;
  align-items: center;
  gap: 10px;
`;
export const Reviews = styled.span`
  color: var(--white-text);
  font-size: 12px;
  letter-spacing: -0.6px;
`;
export const BookStatusBox = styled.div`
  display: flex;
  width: 72px;
  min-height: 80px;
  padding: 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex-shrink: 0;
`;
export const Price = styled.p`
  color: var(--white-text);
  text-align: right;
  /* font-family: Helvetica Light; */
  font-size: 14px;
`;
export const Dollar = styled.span`
  color: var(--white-text);
`;
export const StatusBtn = styled.button`
  width: 60px;
  border-radius: 10px;
  border: none;
  padding: 4px 0px;
  font-size: 12px;
  background-color: ${({ $active }) =>
    $active ? "var(--green)" : "var(--red)"};
  color: var(--black);
`;