import { Title, SearchBox } from "./SearchResultList.styled";
import SearchResultItem from "../SearchResultItem/SearchResultItem";

export default function SearchResultList({books}) {
  return (
    <SearchBox>
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
