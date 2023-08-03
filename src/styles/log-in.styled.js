import styled from 'styled-components';
import Link from 'next/link';

export const LogInPage = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
`;

export const LogInContainer = styled.div`
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
  margin-bottom: 56px;
  font-size: 32px;
  font-weight: 700;
  line-height: 0.625;
`;

export const AllInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 8px;
`;
export const InputContainer = styled.div`
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
  }
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
  color: red;
  margin: 0;
`;

export const ForgotPasswordLink = styled(Link)`
  display: block;
  color: var(--light-text);
  margin-bottom: 48px;
  font-size: 14px;
  line-height: 1.42;
  text-align: right;
  text-decoration: underline;
`;

export const MainButton = styled.button`
  font-size: 16px;
  line-height: 1.25;
  padding: 12px 80px;
  border-radius: 10px;
  border: none;
  background: var(--gradient);
  margin-bottom: 28px;
`;

export const RedirectText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  color: var(--light-text);
  margin-bottom: 86px;
`;

export const RedirectLink = styled(Link)`
  color: var(--light-text);
  font-weight: 700;
`;

export const SLText = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: var(--light-text);
  margin-bottom: 16px;
`;
export const SLContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 42px;
  color: var(--brand-color);
  font-size: 14px;
  line-height: 1.42;
  border: 1px solid;
  border-image-source: var(--gradient);
  border-image-slice: 1;
  //   border-radius: 16px;
`;
