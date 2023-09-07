import styled from 'styled-components';

export const InputBox = styled.div`
margin: 16px 0;
display: flex;
flex-direction: column;
gap: 8px;
`
export const Label = styled.label`
  color: var(--brand-color);
  font-size: 12px;
  line-height: 1.67;

  &::after {
    content: "*";
    padding-left: 8px;
    font-size: 16px;
    line-height: 1; 
    color: var(--required-color);
  }
`;
export const Input = styled.input`
  padding: 4px 0px;
  background-color: transparent;
  border: none;
  color: var(--white-text);
  font-size: 16px;
  border-bottom: 0.3px solid rgba(255, 255, 255, 0.5);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    line-height: 1;
  }

  &:focus {
    outline: none;
  }
`;
