import Link from 'next/link';
import SearchBar from '../SearchBar/SearchBar';
import { GenresList, GenresItem, Title, Description } from './GenrePage.styled';
import { genres } from '@/data/genres';
import { books } from '@/data/books';

export default function GenrePage({ currentGenre }) {
  return (
    <>
      <SearchBar />
      <GenresList>
        {genres.map((genre) => {
          if (genre.link !== currentGenre.link) {
            return (
              <GenresItem key={genre.id}>
                <Link
                  href={`/categories/genres/${genre.link}`}
                  style={{ color: 'inherit' }}
                >
                  {genre.name}
                </Link>
              </GenresItem>
            );
          }
        })}
      </GenresList>
      <Title>{currentGenre.name}</Title>
      <Description>{currentGenre.description}</Description>
    </>
  );
}
