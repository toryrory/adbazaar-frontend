import styled from 'styled-components';

export const UserImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--brand-color);
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  color: var(--brand-color);
  margin-bottom: 56px;
  font-size: 32px;
  font-weight: 700;
  line-height: 0.625;
`;
