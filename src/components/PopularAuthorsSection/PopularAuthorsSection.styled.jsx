import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 15px 40px;
`;
export const AuthorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  overflow: ${({ $showMore }) => ($showMore ? "visible" : "hidden")};
  height: ${({ $showMore }) => ($showMore ? "fit-content" : "322px")};
`;
export const AuthorItem = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  width: 120px;
`;
export const AuthorName = styled.p`
  width: 100px;
  overflow: hidden;
  color: var(--light-grey);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* label text - Helv/H5 - Helvetica/16/bold */
  font-size: 16px;
  font-weight: 700;
`;
export const AuthorWorks = styled.p`
  width: 100px;
  overflow: hidden;
  color: var(--brand-color);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
`;



