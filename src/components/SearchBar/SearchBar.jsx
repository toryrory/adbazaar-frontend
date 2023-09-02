import { useRouter } from "next/router";
import { Search } from "../../../public/svg-index";
import {
  InputWrapper,
  Input,
  BtnSearch,
  BtnsWrapper,
  BtnDelete,
} from "./SearchBar.styled";
import { useState, useEffect } from "react";
import { Cross } from "../../../public/svg-authorization";
import SearchResultList from "./SearchResultList/SearchResultList";
import { books } from "@/data/books";
import { useDispatch } from "react-redux";
import {changeStarVisibility} from "../../redux/mainPageSlice"

export default function SearchBar({queryId}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    setSearchResult(null);
  }, [queryId]);

  useEffect(() => {
    searchResult
      ? dispatch(changeStarVisibility(false))
      : dispatch(changeStarVisibility(true));
  }, [searchResult, dispatch]);
  
  
  const searchFilter = (inputText, books) => {
    const filtredBooks = books.filter(
      ({ name, author, genre, publisher }) =>
        name.toLowerCase().includes(inputText.toLowerCase()) ||
        author.toLowerCase().includes(inputText.toLowerCase()) ||
        genre.toLowerCase().includes(inputText.toLowerCase()) ||
        publisher.toLowerCase().includes(inputText.toLowerCase())
    );
    filtredBooks.length === 0 ?setSearchResult(null) : setSearchResult(filtredBooks);
  };
  const handleChange = (e) => {
    //dispatch(getSearchBooks(e.target.value))
    setInputText(e.target.value);
    searchFilter(inputText, books);
  };
  
  const handleRedirect = (searchResult) => {
    if (searchResult.length === 1) {
        router.push(`/books/${searchResult[0].id}`);
      setSearchResult(null)
    }
  }
  return (
    <>
      <InputWrapper>
        <Input
          type='text'
          value={inputText}
          placeholder='Enter title or author name  |'
          onChange={handleChange}
        />
        <BtnsWrapper>
          <BtnSearch onClick={() => handleRedirect(searchResult)}>
            <Search style={{ width: 24, height: 24 }} />
          </BtnSearch>
          {inputText && (
            <BtnDelete
              type='button'
              onClick={() => {
                setInputText("");
                setSearchResult(null);
              }}
            >
              <Cross style={{ width: 24, height: 24 }} />
            </BtnDelete>
          )}
        </BtnsWrapper>
      </InputWrapper>
      {searchResult && inputText && <SearchResultList books={searchResult} />}
    </>
  );
}
