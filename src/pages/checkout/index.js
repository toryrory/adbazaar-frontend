import Header from '@/components/Layout/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  selectCart,
  selectIsLoggedIn,
  selectUserData,
} from '@/redux/selectors';

import CheckoutForm from '@/components/Checkout/CheckoutForm/CheckoutForm';
import CheckoutTabs from '@/components/Checkout/CheckoutTabs/CheckoutTabs';
import { BgFull } from '../../../public/backgrounds';
import { HeroStar } from '@/styles/index.styled';
import {
  BackButton,
  Container,
  Title,
  Subtitle,
  TotalContainer,
  ResultPrice,
  Price,
  Dollar,
} from '@/styles/checkout.styled';
import { ArrowBack } from '../../../public/svg-book';

export default function Checkout() {
  const router = useRouter();
  const cartBooks = useSelector(selectCart);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserData);
  const total = router.query.total;

  const cartBooksCount = cartBooks.reduce((total, book) => {
    return total + book.count;
  }, 0);
  return (
    <>
      <Header />
      <HeroStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
      <Container>
        <SearchBar style={{ marginBottom: 8 }} />
        <BackButton type="button" onClick={() => router.push('/cart')}>
          <ArrowBack style={{ width: 21, height: 24 }} />
          My Cart
        </BackButton>
        <Title>Checkout</Title>
        {cartBooksCount === 1 ? (
          <Subtitle>{cartBooksCount} item in the cart</Subtitle>
        ) : (
          <Subtitle>{cartBooksCount} items in the cart</Subtitle>
        )}
        <TotalContainer>
          <ResultPrice>Total</ResultPrice>
          <Price style={{ fontSize: 28, fontWeight: 500 }}>
            <Dollar>$</Dollar>
            {total}
          </Price>
        </TotalContainer>
      </Container>
      {isLoggedIn ? (
        <CheckoutForm
          style={{ padding: '24px 16px 106px' }}
          initialValues={{
            fullName: user.name,
            email: user.email,
            phone: user.phone,
            country: '',
            address: '',
            payment: 'receipt',
            promo: '',
            comment: '',
          }}
        />
      ) : (
        <CheckoutTabs />
      )}
    </>
  );
}
