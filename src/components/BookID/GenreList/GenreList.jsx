import {
  GenresList,
  GenresItem,
} from '@/components/Categories/GenrePage/GenrePage.styled';
import Link from 'next/link';
import { genres } from '@/data/genres';

export default function GenreList({ currentGenre }) {
  return (
    <GenresList>
      {genres
        .map((genre) => {
          if (genre.link !== currentGenre) {
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
        })
        .slice(4, 9)}
    </GenresList>
  );
}
