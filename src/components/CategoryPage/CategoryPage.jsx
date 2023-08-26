import Link from 'next/link';
import SearchBar from '../SearchBar/SearchBar';
import {
  GenresList,
  GenresItem,
  Title,
  Description,
} from '../GenrePage/GenrePage.styled';
import { genres } from '@/data/genres';
import { books } from '@/data/books';
import { categories } from '@/data/categories';

export default function CategoryPage({ currentCategory }) {
  return (
    <>
      <SearchBar />
      <GenresList>
        {categories.map((category) => {
          if (category.link !== currentCategory.link) {
            return (
              <GenresItem key={category.id}>
                <Link
                  href={`/categories/${category.link}`}
                  style={{ color: 'inherit' }}
                >
                  {category.name}
                </Link>
              </GenresItem>
            );
          }
        })}
      </GenresList>
      <Title>{currentCategory.name}</Title>
      <Description>{currentCategory.description}</Description>
    </>
  );
}
