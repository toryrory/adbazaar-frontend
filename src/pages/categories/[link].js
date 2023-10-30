import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchBooks } from '@/redux/books/operations';
import { categories } from '@/data/categories';
import { selectBooks } from '@/redux/selectors';

import Layout from '@/components/Layout/Layout';
import CategoryPage from '@/components/Categories/CategoryPage/CategoryPage';
import CategoryBooks from '@/components/Categories/CategoryBooks/CategoryBooks';
import Sorting from '@/components/Categories/Sorting/Sorting';
import { Container, BooksCount } from '@/styles/categoriesLink.styled';

export default function CategoriesLink() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const router = useRouter();
  const { link } = router.query;
  const [currentCategory, setCurrentCategory] = useState(null);
  const [foundedBooks, setFoundedBooks] = useState(null);
  const [booksCount, setBooksCount] = useState(null);
  const [sortedBooks, setSortedBooks] = useState(null);
  const [sorting, setSorting] = useState('popularity');

  useEffect(() => {
    dispatch(fetchBooks());
    setSortedBooks(null);
    setSorting('popularity');
    const newCategory = categories.find((category) => category.link === link);
    setCurrentCategory(newCategory);

    if (link === 'paper' || 'e-book' || 'audio') {
      const newBooks = books.filter((book) => book.type === link);
      setFoundedBooks(newBooks);

      const newBooksCount = newBooks.length;
      setBooksCount(newBooksCount);
    }
  }, [link, dispatch]); // eslint-disable-line

  const onSortChange = (newBooks, value) => {
    setSortedBooks(newBooks);
    setSorting(value);
  };

  return (
    <Layout>
      <Container>
        {currentCategory && <CategoryPage currentCategory={currentCategory} />}
        {booksCount > 1 && <BooksCount>{booksCount} products</BooksCount>}
        {booksCount === 1 && <BooksCount>{booksCount} product</BooksCount>}
        <Sorting books={foundedBooks} onSortChange={onSortChange} />
      </Container>
      {foundedBooks && !sortedBooks && sorting === 'popularity' && (
        <CategoryBooks books={foundedBooks} variant={'category'} />
      )}
      {sortedBooks && sorting === 'alphabetically' && (
        <CategoryBooks books={sortedBooks} variant={'category'} />
      )}
      {sortedBooks && sorting === 'price' && (
        <CategoryBooks books={sortedBooks} variant={'category'} />
      )}
      {sortedBooks && sorting === 'rating' && (
        <CategoryBooks books={sortedBooks} variant={'category'} />
      )}
      {/* {foundedBooks && (
        <CategoryBooks books={foundedBooks} variant={'category'} />
      )} */}
    </Layout>
  );
}
