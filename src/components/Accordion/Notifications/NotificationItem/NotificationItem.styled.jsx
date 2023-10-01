import styled from "styled-components";
import Image from "next/image";

export const MainInfoBox = styled.div`
  display: flex;
  gap: 16px;
  padding: ${({ $opened }) => ($opened ? "16px 0" : "8px 0")};
  /* width: ${({ $opened }) => ($opened ? "316px" : "316px")}; */
  /* height: ${({ $opened }) => ($opened ? "119px" : "72px")}; */
  text-overflow: ellipsis;
  white-space: wrap;
  /* overflow: hidden; */
  transition: max-height 700ms ease-in-out;
`;

export const NotifItem = styled.div`
  border-bottom: 0.5px solid var(--light-grey);
  border-top: 0.5px solid var(--light-grey);
`;
export const NewMessage = styled.span`
  margin-right: 8px;
  width: 9px;
  height: 9px;
  background-color: var(--green-message);
  border-radius: 50%;
`;

export const MainMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const MainMessageText = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 16px;
  width: 316px;
`;
export const TimeAndBtnBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MainMessageTitle = styled.p`
  overflow: hidden;
  color: var(--white-text);
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-size: 14px;
`;

export const ArrowBtn = styled.button`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const Text = styled.p`
  flex-shrink: 0;
  width: ${({ $opened }) => ($opened ? "316px" : "220px")};
  /* height: ${({ $opened }) => ($opened ? "auto" : "34px")}; */
  padding: ${({ $opened }) => ($opened ? "8px 0" : "0")};
  overflow: ${({ $opened }) => ($opened ? "initial" : "hidden")};
  white-space: wrap;
  color: var(--white-text);
  text-overflow: ellipsis;
  display: ${({ $opened }) => ($opened ? "inline" : "-webkit-box")};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
`;

export const OrderNo = styled.span`
  color: var(--brand-color);
`;
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
  display: flex;
  flex-direction: column;
`;
export const BookInfoBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Time = styled.p`
  color: var(--brand-color);
  font-size: 11px;
`;