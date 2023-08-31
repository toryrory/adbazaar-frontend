import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import CategoryPage from '@/components/Categories/CategoryPage/CategoryPage';
import { Container, BooksCount } from '@/styles/categoriesLink.styled';
import { categories } from '@/data/categories';
import { books } from '@/data/books';
import CategoryBooks from '@/components/Categories/CategoryBooks/CategoryBooks';

export default function CategoriesLink() {
  const router = useRouter();
  const { link } = router.query;
  const [currentCategory, setCurrentCategory] = useState(null);
  const [foundedBooks, setFoundedBooks] = useState(null);
  const [booksCount, setBooksCount] = useState(null);

  useEffect(() => {
    const newCategory = categories.find((category) => category.link === link);
    setCurrentCategory(newCategory);

    if (link === 'paper' || 'e-book' || 'audio') {
      const newBooks = books.filter((book) => book.type === link);
      setFoundedBooks(newBooks);

      const newBooksCount = newBooks.length;
      setBooksCount(newBooksCount);
    }
  }, [link]);

  return (
    <Layout>
      <Container>
        {currentCategory && <CategoryPage currentCategory={currentCategory} />}
        {booksCount > 1 && <BooksCount>{booksCount} products</BooksCount>}
        {booksCount === 1 && <BooksCount>{booksCount} product</BooksCount>}
      </Container>
      {foundedBooks && (
        <CategoryBooks books={foundedBooks} variant={'category'} />
      )}
    </Layout>
  );
}
