import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
padding: 40px 0 56px 16px;
`

export const List = styled.ul`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: all 2s ease-in-out;
  /* margin-bottom: 32px; */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BookSellerBox = styled.li`
  display: flex;
  width: 147px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const CircleOut = styled.div`
display: flex;
justify-content: center;
align-items: center;
  border-radius: 80px;
  background: var(--gradient-bottom);
  width: 80px;
  height: 80px;
  
`;
export const StyledImg = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: var(--dark-grey);
`;
export const RatingBox = styled.div`
  display: flex;
  width: 146px;
  padding: 0px 10px;
  align-items: center;
  gap: 10px;
`;
export const Reviews = styled.label`
  color: var(--light-text);
  font-size: 12px;
  letter-spacing: -0.6px;
`;
export const SellerName = styled.p`
width: 146px;
padding: 0 10px;
  overflow: hidden;
  color: var(--light-grey);
  text-overflow: ellipsis;
  white-space: nowrap;
  /* label text - Helv/H5 - Helvetica/16/bold */
  font-size: 16px;
  font-weight: 700;
`;
export const SellerComment = styled.p`
  width: 146px;
  height: 80px;
  overflow: hidden;
  color: var(--brand-color);
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 14px;
`;
