import Link from 'next/link';
import SearchBar from '../../SearchBar/SearchBar';
import {
  GenresList,
  GenresItem,
  Title,
  Description,
} from '../GenrePage/GenrePage.styled';
import { categories } from '@/data/categories';

export default function CategoryPage({ currentCategory }) {
  return (
    <>
      <SearchBar />
      <GenresList>
        {categories
          .map((category) => {
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
          })
          .slice(5, 9)}
      </GenresList>
      <Title>{currentCategory.name}</Title>
      <Description>{currentCategory.description}</Description>
    </>
  );
}
