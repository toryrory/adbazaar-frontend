import { Search } from "../../../public/svg-index";
import {
  InputWrapper,
  Input,
  BtnSearch,
  SearchResults,
  BtnsWrapper,
  BtnDelete,
} from "./SearchBar.styled";
import { useState } from "react";
import { Cross } from "../../../public/svg-authorization";

export default function SearchBar() {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }
  return (
    <>
      <InputWrapper>
        <Input
          value={input}
          placeholder='Enter title or author name  |'
          onChange={handleChange}
              />
              <BtnsWrapper>
        <BtnSearch $hasText={true}>
          <Search style={{ width: 24, height: 24 }} />
                  </BtnSearch>
                  {input && <BtnDelete type="button" onClick={e => setInput('')}>
                      <Cross style={{ width: 24, height: 24 }}/>
                  </BtnDelete>}
              </BtnsWrapper>
      </InputWrapper>
      <SearchResults>SearchBar Results in progress</SearchResults>
    </>
  );
}
