import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0;
`;

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.15;
  color: var(--light-grey);
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Reviews = styled.p`
  color: var(--brand-color);
  font-size: 14px;
  line-height: 1.15;
  letter-spacing: -0.6px;
`;

export const List = styled.ul`
  display: flex;
  gap: 32px;
  overflow-x: auto;
  margin-bottom: 32px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 190px;
  height: 167px;
`;
export const CommentHeader = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #ffffff;
  padding-bottom: 6px;
`;

export const CommentTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.15;
  color: #ffffff;
`;

export const CommentDate = styled.p`
  font-size: 13px;
  line-height: 1.15;
  color: var(--brand-color);
`;

export const CommentText = styled.p`
  width: 190px;
  font-size: 13px;
  line-height: 1.15;
  color: #ffffff;
  // height: 90px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;

export const AllBtnContainer = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikeBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BtnSeeMore = styled.button`
  display: flex;
  padding: 2px 0px;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: var(--light-grey);
  font-size: 13px;
`;

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;
