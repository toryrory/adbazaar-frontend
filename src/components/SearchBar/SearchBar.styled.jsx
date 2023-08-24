import styled from "styled-components";

export const InputWrapper = styled.div`
min-width: 358px;
  display: flex;
  padding: 4px 0px 3px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-grey);
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: var(--light-grey);
  font-family: Helvetica Light;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--light-text);
    font-size: 14px;
    line-height: 1.4;
  }
`;

export const BtnSearch = styled.button`
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const BtnsWrapper = styled.div`
display: flex;
`
export const BtnDelete = styled.button`
  padding: 8px 0 4px 7px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-left: 0.5px solid var(--light-grey);
`;

export const SearchResults = styled.div`
  color: var(--light-text);
  font-size: 14px;
  line-height: 1.4;
`;