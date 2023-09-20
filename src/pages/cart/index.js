import Header from '@/components/Layout/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import CartBook from '@/components/CartBook/CartBook';
import CartTotal from '@/components/CartTotal/CartTotal';
import { useRouter } from 'next/router';
import {
  Container,
  BackButton,
  Title,
  Subtitle,
  List,
} from '@/styles/cart.styled';
import { ArrowBack } from '../../../public/svg-book';
import { BgFull } from '../../../public/backgrounds';
import { HeroStar } from '@/styles/index.styled';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/selectors';

export default function Cart() {
  const cartBooks = useSelector(selectCart);

  const cartBooksCount = cartBooks.reduce((total, book) => {
    return total + book.count;
  }, 0);

  const router = useRouter();

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
        <Subtitle>{cartBooksCount} items in cart</Subtitle>
        <List>
          {cartBooks.map((book) => {
            return <CartBook book={book} />;
          })}
        </List>
        <CartTotal books={cartBooks} />
      </Container>
    </>
  );
}
