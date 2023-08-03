import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 0 16px 32px 16px;
  background-color: #ffffff;
  max-width: 390px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  //   @media screen and (min-width: 1440px) {
  //     background-color: #111111;
  //   }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AllInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  font-size: 16px;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid #111111;
  padding: 9px 14px;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
  margin: 0;
`;
