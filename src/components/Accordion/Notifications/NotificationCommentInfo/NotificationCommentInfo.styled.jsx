import styled from "styled-components";

export const CommentatorInfoBox = styled.div`
width: 339px;
  display: flex;
  justify-content: space-between;
`;
export const CommentatorInfo = styled.div`
display: flex;
align-items: center;
gap: 16px;
`
export const CommentatorContacts = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`
export const Comment = styled.p`
  padding: 16px 0px;
  color: var(--white-text);
  font-size: 14px;
  border-top: 0.5px solid var(--light-grey);
`;