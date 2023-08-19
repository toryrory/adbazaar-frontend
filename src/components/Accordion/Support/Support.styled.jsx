import styled from "styled-components";

export const Container = styled.div`
    padding: 8px 16px 0px 56px;
`
export const List = styled.ul`
  :last-of-type {
    margin-bottom: 0px;
    border-bottom: none;
  }
 
`;
export const ListItem = styled.li`
  display: flex;
  margin-bottom: 8px;
  border-bottom: 0.3px solid var(--light-grey);

`;
export const IconBox = styled.div`
  padding-right: 8px;
  border-right: 0.3px solid var(--light-grey);
  height: 24px;
`;
export const SocialsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-left: 8px;
  padding-bottom: 6px;
`;

export const Terms = styled.a`
  padding-left: 8px;
  text-decoration: underline 1px;
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.5;
  height: 36px;
`;
export const Text = styled.p`
  padding-left: 8px;
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.5;
  height: 36px;
`;
  

