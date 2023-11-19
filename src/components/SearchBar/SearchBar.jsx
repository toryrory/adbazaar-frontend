import { useRouter } from 'next/router';
import { Search } from '../../../public/svg-index';
import {
  InputWrapper,
  Input,
  BtnSearch,
  BtnsWrapper,
  BtnDelete,
} from './SearchBar.styled';
import { useState, useEffect } from 'react';
import { Cross } from '../../../public/svg-authorization';
import SearchResultList from './SearchResultList/SearchResultList';
import { useSelector } from 'react-redux';
import { selectBooks } from '@/redux/selectors';
import { useDispatch } from 'react-redux';
import { changeStarVisibility } from '../../redux/mainPageSlice';

export default function SearchBar({ queryId, style }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchResultText, setSearchResultText] = useState(null);
  const books = useSelector(selectBooks);

  useEffect(() => {
    setSearchResult(null);
  }, [queryId]);

  useEffect(() => {
    searchResult
      ? dispatch(changeStarVisibility(false))
      : dispatch(changeStarVisibility(true));
  }, [searchResult, dispatch]);

  const searchFilter = (inputText, books) => {
    console.log(books);
    const filtredBooks = books.filter(
      ({ name, author, genre, type }) =>
        name.toLowerCase().includes(inputText.toLowerCase()) ||
        author.toLowerCase().includes(inputText.toLowerCase()) ||
        genre.toLowerCase().includes(inputText.toLowerCase()) ||
        type.toLowerCase().includes(inputText.toLowerCase())
    );
    filtredBooks.length === 0
      ? setSearchResult(null)
      : setSearchResult(filtredBooks);
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
    searchFilter(inputText, books);
  };

  const handleRedirect = (searchResult) => {
    if (!searchResult) {
      return
    } else if (searchResult.length === 1) {
      router.push(`/books/${searchResult[0].id}`);
      setSearchResultText(null);
      setSearchResult(null);
    } else if (searchResult.length > 1) {
      setSearchResultText({ text: "Too many books, please choose one book" });
    }
  };
  return (
    <>
      <InputWrapper style={style}>
        <Input
          type="text"
          value={inputText}
          placeholder="Enter title or author name  |"
          onChange={handleChange}
        />
        <BtnsWrapper>
          <BtnSearch onClick={() => handleRedirect(searchResult)}>
            <Search style={{ width: 24, height: 24 }} />
          </BtnSearch>
          {inputText && (
            <BtnDelete
              type="button"
              onClick={() => {
                setInputText('');
                setSearchResult(null);
              }}
            >
              <Cross style={{ width: 24, height: 24 }} />
            </BtnDelete>
          )}
        </BtnsWrapper>
      </InputWrapper>
      {searchResult && inputText && <SearchResultList searchText={searchResultText} books={searchResult} />}
    </>
  );
}
