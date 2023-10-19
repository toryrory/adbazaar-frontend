import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectIsBookLoading, selectBooks } from '@/redux/selectors';
import { useDispatch } from 'react-redux';

import SearchBar from '@/components/SearchBar/SearchBar';
import Layout from '@/components/Layout/Layout';
import BookHeader from '@/components/BookID/BookHeader/BookHeader';
import BookDetails from '@/components/BookID/BookDetails/BookDetails';
import BookOverview from '@/components/BookID/BookOverview/BookOverview';
import BookComments from '@/components/BookID/BookComments/BookComments';
import SimilarBooks from '@/components/BookID/SimilarBooks/SimilarBooks';
import GenreList from '@/components/BookID/GenreList/GenreList';
import BookShipping from '@/components/BookID/BookShipping/BookShipping';

import { Container, AccordionButton, BackButton } from '@/styles/bookId.styled';
import { HeroStar } from '@/styles/index.styled';
import { BgFull } from '../../../public/backgrounds';
import {
  ArrowDown,
  ArrowUp,
  ArrowBack,
  Puzzle,
  OverviewImg,
  Truck,
} from '../../../public/svg-book';
import { ToastContainer } from 'react-toastify';
import { OrnamentImg } from '@/components/Categories/CategoryBooks/CategoryBooks.styled';
import { FullOrnamentClipped } from '../../../public/backgrounds';
import { fetchBookById } from '@/redux/books/operations';

export default function BooksId() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const currentId = Number(id);
  const [currentBook, setCurrentBook] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsBookLoading);

  useEffect(() => {
    dispatch(fetchBookById(currentId));
  }, [currentId, dispatch]);

  useEffect(() => {
    const newBook = books.find((book) => book.id === currentId);
    if (newBook.description) {
      setCurrentBook(newBook);
    }
  }, [books, currentId, id, isLoading]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };
  const toggleShipping = () => {
    setShowShipping(!showShipping);
  };

  return (
    <Layout>
      <Container>
        <HeroStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
        <SearchBar queryId={id} />
        <BackButton type="button" onClick={() => router.back()}>
          <ArrowBack style={{ width: 21, height: 24 }} />
          Go back
        </BackButton>
        {currentBook && !isLoading && (
          <>
            <GenreList currentGenre={currentBook.genre} />
            <BookHeader book={currentBook} />
            <AccordionButton type="button" onClick={toggleDetails}>
              <Puzzle style={{ width: 24, height: 24, marginRight: 8 }} />
              Detailed Information
              {showDetails ? (
                <ArrowUp
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              ) : (
                <ArrowDown
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              )}
            </AccordionButton>
            {showDetails && <BookDetails book={currentBook} />}
            <AccordionButton type="button" onClick={toggleShipping}>
              <Truck
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 8,
                  fill: 'var(--light-text)',
                }}
              />
              Shipping Methods
              {showShipping ? (
                <ArrowUp
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              ) : (
                <ArrowDown
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              )}
            </AccordionButton>
            {showShipping && <BookShipping />}
            <AccordionButton type="button" onClick={toggleOverview}>
              <OverviewImg style={{ width: 24, height: 24, marginRight: 8 }} />
              Overview
              {showOverview ? (
                <ArrowUp
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              ) : (
                <ArrowDown
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              )}
            </AccordionButton>
            {showOverview && <BookOverview book={currentBook} />}

            <BookComments book={currentBook} />
            <OrnamentImg
              src={FullOrnamentClipped}
              alt="ornament"
              distance="pdp"
              style={{ position: 'absolute', left: '0px' }}
            />
            <SimilarBooks book={currentBook} />
          </>
        )}
        <ToastContainer theme="dark" />
      </Container>
    </Layout>
  );
}
