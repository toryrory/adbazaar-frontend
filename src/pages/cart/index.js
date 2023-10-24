import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  selectCart,
  selectCartBooksUnauthorized,
  selectIsLoggedIn,
  selectIsVerified,
} from '@/redux/selectors';
import { fetchCurrentUser } from '@/redux/auth/operations';

import {
  Container,
  BackButton,
  Title,
  Subtitle,
  List,
  ContinueButton,
} from '@/styles/cart.styled';
import Header from '@/components/Layout/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import CartBook from '@/components/CartBook/CartBook';
import CartTotal from '@/components/CartTotal/CartTotal';
import { ArrowBack, ArrowRight } from '../../../public/svg-book';
import { BgFull } from '../../../public/backgrounds';
import { HeroStar } from '@/styles/index.styled';

export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerified = useSelector(selectIsVerified);
  const cartBooks = useSelector(selectCart);
  const cartBooksUnauthorized = useSelector(selectCartBooksUnauthorized);
  const [cartBooksCount, setCartBooksCount] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && isVerified) {
      const count = cartBooks.reduce((total, book) => {
        return total + book.quantity;
      }, 0);
      setCartBooksCount(count);
      setBooks(cartBooks);
    } else {
      const count = cartBooksUnauthorized.reduce((total, book) => {
        return total + book.quantity;
      }, 0);
      setCartBooksCount(count);
      setBooks(cartBooksUnauthorized);
    }
  }, [isLoggedIn, isVerified, cartBooks, cartBooksUnauthorized]);

  return (
    <>
      <Header />
      <HeroStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
      <Container>
        <SearchBar style={{ marginBottom: 8 }} />
        <BackButton type="button" onClick={() => router.back()}>
          <ArrowBack style={{ width: 21, height: 24 }} />
          Previous page
        </BackButton>
        <Title>My Cart</Title>
        {cartBooksCount === 1 ? (
          <Subtitle>{cartBooksCount} item in the cart</Subtitle>
        ) : (
          <Subtitle>{cartBooksCount} items in the cart</Subtitle>
        )}
        <List>
          {books.map((book) => {
            return <CartBook book={book} key={book.id} />;
          })}
        </List>
        {books.length > 0 && (
          <CartTotal books={books} cartBooksCount={cartBooksCount} />
        )}

        <ContinueButton type="button" onClick={() => router.push('/')}>
          Continue shopping
          <ArrowRight style={{ width: 14, height: 15 }} />
        </ContinueButton>
      </Container>
    </>
  );
}
