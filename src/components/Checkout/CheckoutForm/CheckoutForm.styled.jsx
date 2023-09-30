import styled from 'styled-components';
import { Form, Field } from 'formik';
import Link from 'next/link';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.p`
  color: var(--white-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.15;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
  border-bottom: 0.5px solid var(--light-grey);
  font-size: 12px;
  line-height: 1.23;
  color: var(--brand-color);
`;

export const Input = styled(Field)`
  font-size: 16px;
  line-height: 1.23;
  color: var(--white-text);
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--light-grey);
  }
`;

export const HiddenBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 8px;
  border: none;
  border-right: 0.3px solid var(--light-grey);
  background-color: transparent;
  cursor: pointer;
`;

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CountryCode = styled.span`
  color: var(--white-text);
  font-size: 18px;
  font-weight: 400;
`;

export const RadioInput = styled(Field)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  color: var(--white-text);
  line-height: 1.3;
`;

export const PromoButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--light-grey);
  font-size: 13px;
  line-height: 1.15;
  font-weight: 400;
`;

export const CommentInput = styled.textarea`
  display: block;
  width: 100%;
  min-height: 84px;
  background: var(--product-background);
  outline: none;
  border: 0.5px solid var(--light-grey);
  border-radius: 16px;
  padding: 8px;
  font-size: 14px;
  line-height: 1.23;
  color: var(--white-text);

  &::placeholder {
    color: var(--brand-color);
  }
`;
