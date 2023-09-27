import styled from "styled-components";
import Image from "next/image";

export const MainInfoBox = styled.div`
display: flex;
gap: 16px;
 width: ${({ $opened }) => ($opened ? "316px" : "316px")};
  max-height: ${({ $opened }) => ($opened ? "500px" : "72px")};
  text-overflow: ellipsis;
  white-space: nowrap;
  /* overflow: hidden; */
  transition: max-height 700ms ease-in-out; 
`;
export const Container = styled.div`
  padding: 16px 14px;
  /* overflow: hidden; */
`;
export const NewMessage = styled.span`
margin-right: 8px;
  width: 9px;
  height: 9px;
  background-color: var(--green-message);
  border-radius: 50%;
`;
export const TextBox = styled.div`
    /* display: flex;
    align-items: center; */
`
export const MainMessageBox = styled.div`
 display: flex;
 flex-direction:column ;
gap: 6px;
`
export const MainMessageText = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 16px;
`;
export const TimeAndBtnBox = styled.div`
display: flex;`

export const MainMessageTitle = styled.p`
  overflow: hidden;
  color: var(--white-text);
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-size: 14px;
  
`;

export const ArrowBtn = styled.button`
border:none;
background-color: transparent;
&:focus {
    outline: none;
}
`
export const Text = styled.p`
  width: 316px;
  padding: ${({ $opened }) => ($opened ? "8px 0" : "0")};
  flex-shrink: 0;
  overflow: hidden;
  color: var(--white-text);
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 13px;
`;
export const OrderNo = styled.span`
    color: var(--brand-color);
`
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
`