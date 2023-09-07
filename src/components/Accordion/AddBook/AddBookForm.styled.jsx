import styled from 'styled-components';

export const LanguageBox = styled.div`
display: flex;
gap: 16px;
`
export const LanguageInput = styled.input`
  width: 30px;
  padding: 6px 4px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--white-text);
  color: var(--white-text);
  font-size: 16px;
  caret-color: transparent;
  opacity:${({focused}) => focused === 'true' ? 1 : 0.5};

  &:focus {
    outline: none;
    /* opacity: 1; */
  }
`;