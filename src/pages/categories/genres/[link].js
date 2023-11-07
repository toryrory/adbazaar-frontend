import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchBooks } from '@/redux/books/operations';
import { selectBooks } from '@/redux/selectors';

import { genres } from '@/data/genres';
import Layout from '@/components/Layout/Layout';
import GenrePage from '@/components/Categories/GenrePage/GenrePage';
import Sorting from '@/components/Categories/Sorting/Sorting';
import CategoryBooks from '@/components/Categories/CategoryBooks/CategoryBooks';
import { Container, BooksCount } from '@/styles/categoriesLink.styled';

export default function GenresLink() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { link } = router.query;
  const books = useSelector(selectBooks);
  const [currentGenre, setCurrentGenre] = useState(null);
  const [foundedBooks, setFoundedBooks] = useState(null);
  const [booksCount, setBooksCount] = useState(null);
  const [sortedBooks, setSortedBooks] = useState(null);
  const [sorting, setSorting] = useState('popularity');

  useEffect(() => {
    dispatch(fetchBooks());
    setSortedBooks(null);
    setSorting('popularity');
    const newGenre = genres.find((genre) => genre.link === link);
    setCurrentGenre(newGenre);

    const newBooks = books.filter((book) => book.genre === link);
    setFoundedBooks(newBooks);

    const newBooksCount = newBooks.length;
    setBooksCount(newBooksCount);
  }, [link]); // eslint-disable-line

  const onSortChange = (newBooks, value) => {
    setSortedBooks(newBooks);
    setSorting(value);
  };

  return (
    <Layout>
      <Container>
        {currentGenre && <GenrePage currentGenre={currentGenre} />}
        {booksCount > 1 && <BooksCount>{booksCount} products</BooksCount>}
        {booksCount === 1 && <BooksCount>{booksCount} product</BooksCount>}
        <Sorting
          books={foundedBooks}
          onSortChange={onSortChange}
          setBooks={setFoundedBooks}
        />
      </Container>
      {foundedBooks && !sortedBooks && sorting === 'popularity' && (
        <CategoryBooks books={foundedBooks} />
      )}
      {sortedBooks && sorting === 'alphabetically' && (
        <CategoryBooks books={sortedBooks} />
      )}
      {sortedBooks && sorting === 'price' && (
        <CategoryBooks books={sortedBooks} />
      )}
      {sortedBooks && sorting === 'rating' && (
        <CategoryBooks books={sortedBooks} />
      )}
    </Layout>
  );
}
