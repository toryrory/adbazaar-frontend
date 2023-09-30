import styled from 'styled-components';
import Link from 'next/link';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  color: var(--white-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.15;
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
`;
export const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-bottom: 0.5px solid var(--light-grey);
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 1.42;
  text-align: left;
  color: var(--brand-color);
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
    color: var(--light-grey);
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

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ForgotPasswordLink = styled(Link)`
  display: inline-block;
  color: var(--light-text);
  margin-bottom: 64px;
  font-size: 14px;
  line-height: 1.42;
  text-decoration: underline;
`;

export const RedirectText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  color: var(--light-text);
  margin-bottom: 72px;
  text-align: center;
`;

export const RedirectLink = styled(Link)`
  color: var(--light-text);
  font-weight: 700;
`;
