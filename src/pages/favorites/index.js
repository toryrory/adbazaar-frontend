import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectFavorites } from '@/redux/selectors';
import Header from '@/components/Layout/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import FavoriteBook from '@/components/FavoriteBook/FavoriteBook';
import { BgFull } from '../../../public/backgrounds';
import { ArrowBack, ArrowRight } from '../../../public/svg-book';
import { HeroStar } from '@/styles/index.styled';
import {
  Container,
  BackButton,
  Title,
  Subtitle,
  List,
  ContinueButton,
} from '@/styles/favorites.styled';

export default function FavoritesPage() {
  const favoriteBooks = useSelector(selectFavorites);
  const router = useRouter();

  return (
    <>
      <Header />
      <HeroStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
      <Container>
        <SearchBar style={{ marginBottom: 8 }} />
        <BackButton type="button" onClick={() => router.back()}>
          <ArrowBack style={{ width: 21, height: 24 }} />
          Previous page
        </BackButton>
        <Title>My Favorites</Title>
        <Subtitle>{favoriteBooks.length} items in favorites</Subtitle>
      </Container>
      <List>
        {favoriteBooks.map((book) => {
          return <FavoriteBook book={book} />;
        })}
      </List>
      <ContinueButton type="button" onClick={() => router.push('/')}>
        Continue shopping
        <ArrowRight style={{ width: 14, height: 15 }} />
      </ContinueButton>
    </>
  );
}
