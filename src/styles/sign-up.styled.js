import styled from 'styled-components';
import Link from 'next/link';

export const SignUpPage = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
`;

export const SignUpContainer = styled.div`
  position: relative;
  padding: 12px 16px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  //   @media screen and (min-width: 1440px) {
  //     background-color: #111111;
  //   }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const Title = styled.h2`
  color: var(--brand-color);
  margin-top: 24px;
  margin-bottom: 56px;
  font-size: 32px;
  font-weight: 700;
  line-height: 0.625;
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;
export const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1.5px solid var(--brand-color);
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.42;
  text-align: left;
  color: var(--light-text);
`;

export const Input = styled.input`
font-size: 16px;
  line-height: 1.25;
  outline: none;
  background: none;
  border: none;

  padding: 8px 0;
  color: var(--white-text);

  &::placeholder {
    color: var(--brand-color);
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EyeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: var(--error-color);
  margin: 0;
  text-align: left;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 52px;
`;
export const CheckboxLabel = styled.label`
  display: flex;
  gap: 10px;
  text-align: left;
  align-items: center;
  color: var(--brand-color);
  font-size: 14px;
`;

export const CheckboxInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`;

export const MainButton = styled.button`
  font-size: 16px;
  line-height: 1.25;
  padding: 12px 80px;
  border-radius: 10px;
  border: none;
  background: var(--gradient);

  margin-bottom: 32px;
`;

export const SLText = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: var(--light-text);
  margin-bottom: 10px;
`;

export const SLList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;

export const SLItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient);
  border-radius: 16px;
  width: 156px;
  height: 44px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--brand-color);
  width: 154px;
  height: 42px;
  font-size: 14px;
  line-height: 1.42;
  background-color: var(--main-background);
  border-radius: 16px;
`;

export const RedirectText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  color: var(--light-text);
  margin-bottom: 44px;
`;

export const RedirectLink = styled(Link)`
  color: var(--light-text);
  font-weight: 700;
`;
