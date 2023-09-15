import styled from '@emotion/styled';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 12px;
  height: 12px;
  top: -1px;
  right: -2px;
  background-color: var(--brand-color);
  border-radius: 50%;
  padding: 2px;
`;

export const Span = styled.span`
  font-size: 10px;
  line-height: 0.8;
`;
