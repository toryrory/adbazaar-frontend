import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/selectors';

export default function Cart() {
  const cartBooks = useSelector(selectCart);

  const cartBooksCount = cartBooks.reduce((total, book) => {
    return total + book.quantity;
  }, 0);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
          {cartBooks.map((book) => {
            return <CartBook book={book} key={book.id} />;
          })}
        </List>
        {cartBooks.length > 0 && (
          <CartTotal books={cartBooks} cartBooksCount={cartBooksCount} />
        )}

        <ContinueButton type="button" onClick={() => router.push('/')}>
          Continue shopping
          <ArrowRight style={{ width: 14, height: 15 }} />
        </ContinueButton>
      </Container>
    </>
  );
}
