import styled from '@emotion/styled';
import Image from 'next/image';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: transparent;
  height: 32px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 8px 4px 0px rgba(19, 27, 44, 0.25);
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  background: linear-gradient(var(--dark-grey), var(--dark-grey)) padding-box,
    linear-gradient(to right, #51c5ea 3.43%, #f18ff3 100%) border-box;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  /* linear-gradient(82deg, #51c5ea 3.43%, #f18ff3 100%); */
`;

export const StyledImg = styled(Image)`
  max-width: 28px;
  max-height: 28px;
  border-radius: 50%;
`;
