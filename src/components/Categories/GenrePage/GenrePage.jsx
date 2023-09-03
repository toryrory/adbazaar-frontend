import Link from 'next/link';
import SearchBar from '../../SearchBar/SearchBar';
import { GenresList, GenresItem, Title, Description } from './GenrePage.styled';
import { genres } from '@/data/genres';
import { HeroStar } from '@/styles/index.styled';
import { BgFull } from '../../../../public/backgrounds';

export default function GenrePage({ currentGenre }) {
  return (
    <>
      <SearchBar />
      <HeroStar src={BgFull} alt='star' style={{ zIndex: -1 }} />
      <GenresList>
        {genres
          .map((genre) => {
            if (genre.link !== currentGenre.link) {
              return (
                <GenresItem key={genre.id}>
                  <Link
                    href={`/categories/genres/${genre.link}`}
                    style={{ color: "inherit" }}
                  >
                    {genre.name}
                  </Link>
                </GenresItem>
              );
            }
          })
          .slice(4, 9)}
      </GenresList>
      <Title>{currentGenre.name}</Title>
      <Description>{currentGenre.description}</Description>
    </>
  );
}
