import styled from "styled-components";

export const Text = styled.p`
  color: var(--brand-color);
  font-size: 16px;
  width: 270px;
  margin-bottom: 16px;
  margin-left: 12px;
  font-weight: 400;
`;
export const Container = styled.div`
    padding: 145px 28px 56px 4px;
`
export const Button = styled.button`
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
  color: var(--light-grey);
  font-size: 13px;
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Section = styled.div`
  position: relative;
`