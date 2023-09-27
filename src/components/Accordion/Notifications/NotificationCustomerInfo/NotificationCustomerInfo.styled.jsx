import styled from "styled-components";
import Image from "next/image";

export const CustomerInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;
export const CustomerInfoItem = styled.li`
  display: flex;
  width: 294px;
  min-height: 17px;
  justify-content: space-between;
  align-items: flex-start;
`;
export const CustomerBox = styled.div`
display: flex;
gap: 16px;
`

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  background: var(--gradient-bottom);
  width: 34px;
  height: 34px;
`;
export const StyledImg = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: var(--dark-grey);
`;
export const CustomerName = styled.p`
  overflow: hidden;
  color: var(--white-text);
  text-overflow: ellipsis;
  font-size: 14px;
`;
export const CustomerDataField = styled.p`
  overflow: hidden;
  color: var(--brand-color);
  text-overflow: ellipsis;
  font-size: 12px;
  
`;
export const CustomerData = styled.p`
width: 200px;
  overflow: hidden;
  color: var(--white-text);
  text-align: right;
  text-overflow: ellipsis;
  font-size: 13px;
`;