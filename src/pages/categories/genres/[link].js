import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import GenrePage from '@/components/Categories/GenrePage/GenrePage';
import { Container, BooksCount } from '@/styles/categoriesLink.styled';
import { genres } from '@/data/genres';
import { books } from '@/data/books';
import CategoryBooks from '@/components/Categories/CategoryBooks/CategoryBooks';

export default function GenresLink() {
  const router = useRouter();
  const { link } = router.query;
  const [currentGenre, setCurrentGenre] = useState(null);
  const [foundedBooks, setFoundedBooks] = useState(null);
  const [booksCount, setBooksCount] = useState(null);

  useEffect(() => {
    const newGenre = genres.find((genre) => genre.link === link);
    setCurrentGenre(newGenre);

    const newBooks = books.filter((book) => book.genre === link);
    setFoundedBooks(newBooks);

    const newBooksCount = newBooks.length;
    setBooksCount(newBooksCount);
  }, [link]);

  return (
    <Layout>
      <Container>
        {currentGenre && <GenrePage currentGenre={currentGenre} />}
        {booksCount > 1 && <BooksCount>{booksCount} products</BooksCount>}
        {booksCount === 1 && <BooksCount>{booksCount} product</BooksCount>}
      </Container>
      {foundedBooks && <CategoryBooks books={foundedBooks} />}
    </Layout>
  );
}
