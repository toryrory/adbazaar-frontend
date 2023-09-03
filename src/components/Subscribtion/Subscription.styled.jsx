import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
position:relative;
`
export const OrnamentBox = styled.div`
width: 1020px;
height: 105px;
`

export const FullOrnamentImg = styled(Image)`
  position: absolute;
  top: 0;
`;

export const Text = styled.p`
  color: var(--brand-color);
  font-size: 16px;
  width: 242px;
  margin-bottom: 16px;
  font-weight: 400;
`;
export const Input = styled.input`
  display: flex;
  width: 242px;
  padding: 8px 0px;
  align-items: center;
  gap: 6px;
  border: none;
  border-bottom: 1px solid var(--light-grey);
  background-color: transparent;
  color: var(--light-grey);
  font-size: 14px;

  &::placeholder {
    font-family: "TrueHelvetica-light", sans-serif;
    color: var(--light-grey);
    line-height: 0.7;
  }
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 2px;
  height: 35px;
`;
export const Container = styled.div`
  padding: 158px 16px 48px;
`;
