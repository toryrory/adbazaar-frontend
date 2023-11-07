import styled from 'styled-components';

export const TypeContainer = styled.div`
  padding: 8px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  gap: 10px;
  text-align: left;
  align-items: center;
  color: var(--white-text);
  font-size: 14px;
  line-height: 1.43;
  border-bottom: 0.5px solid var(--light-text);
  padding: 2px 0;
`;

export const CheckboxInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`;
