import { Title, SearchBox, ManyBooksText } from "./SearchResultList.styled";
import SearchResultItem from "../SearchResultItem/SearchResultItem";

export default function SearchResultList({ books, searchText }) {
  console.log(searchText);
  return (
    <SearchBox>
      {books.length > 1 && searchText && (
        <ManyBooksText>{searchText.text}</ManyBooksText>
      )}
      <Title>Books Founded</Title>
      {books.map(({ id, name, author, type, price, photo }) => (
        <SearchResultItem
          key={id}
          id={id}
          author={author}
          name={name}
          type={type}
          price={price}
          photo={photo}
        />
      ))}
    </SearchBox>
  );
}
