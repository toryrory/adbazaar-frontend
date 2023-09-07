import { useSelector } from 'react-redux';
import { selectFavorites } from '@/redux/selectors';
import FavoriteBook from '@/components/FavoriteBook/FavoriteBook';
import { Container, Subtitle, List } from './Favorites.styled';

export default function Favorites() {
  const favoriteBooks = useSelector(selectFavorites);

  return (
    <Container>
      <Subtitle>{favoriteBooks.length} items in favorites</Subtitle>
      <List>
        {favoriteBooks.map((book) => {
          return <FavoriteBook book={book} />;
        })}
      </List>
    </Container>
  );
}
