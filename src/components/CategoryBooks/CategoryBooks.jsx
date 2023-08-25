import { Container, List } from './CategoryBooks.styled';
import Book from '../Book/Book';

export default function CategoryBooks({ books }) {
  return (
    <Container>
      <List>
        {books.map((book) => {
          return <Book book={book} />;
        })}
      </List>
    </Container>
  );
}
