import styled from "styled-components";

export const SwiperWrapper = styled.div`
  margin-right: -16px;
  margin-left: -16px;
  display: flex;
  gap: 4px;
  margin-bottom: 36px;
  max-height: 36px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;