import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--light-text);
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const Title = styled.p`
  font-size: 20px;
  line-height: 1.15;
  color: var(--white-text);
`;

export const SubTitle = styled.p`
  font-size: 14px;
  line-height: 1.15;
  color: var(--brand-color);
`;

export const Price = styled.p`
  font-size: 24px;
  line-height: 1;
  color: #ffffff;
  font-stretch: condensed;
`;

export const Dollar = styled.span`
  font-size: 16px;
  margin-right: 8px;
  font-family: barlowCondensed, sans-serif;
`;

export const ResultPrice = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
`;

export const DeliveryButton = styled.button`
  font-size: 14px;
  line-height: 1.15;
  color: var(--brand-color);
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DeliveryContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  right: 0;
  background-color: var(--product-background);
  border: 0.5px solid rgba(163, 233, 255, 0.25);
  width: 263px;
  padding: 8px 16px;
  z-index: 999;
  border-radius: 0px 0px 0px 15px;
`;

export const DeliveryItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 12px;
  border-bottom: 0.5px solid var(--light-text);
`;

export const DeliveryInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`;

export const DeliveryPrice = styled.p`
  font-size: 20px;
  line-height: 1;
  color: #ffffff;
  font-stretch: condensed;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.3;
  color: var(--white-text);
`;
