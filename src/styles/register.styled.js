import styled from 'styled-components';
import Link from 'next/link';

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
