import { useRouter } from 'next/router';
import Image from 'next/image';

import Header from '@/components/Layout/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';

import {
  Container,
  OrderContainer,
  TextContainer,
  Text,
  Span,
  SecondText,
  Title,
  SmallText,
  CloseButton,
} from '@/styles/checkoutId.styled';
import { BgFull, FullOrnamentClipped } from '../../../public/backgrounds';
import { Rocket } from '../../../public/svg-book';
import { HeroStar } from '@/styles/index.styled';
import { Cross } from '../../../public/svg-authorization';

export default function CheckoutId() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <HeroStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
      <Container>
        <SearchBar />
      </Container>
      <OrderContainer>
        <CloseButton onClick={() => router.push('/')}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>
        <TextContainer>
          <Text>
            Order <Span>#{id}</Span> <br /> successfully completed! <br /> It
            will be sent soon
          </Text>
          <Rocket style={{ width: 32, height: 32 }} />
          <SecondText>
            You can track the route by tracking <br /> number{' '}
            <Span style={{ textDecoration: 'underline' }}>TX333444555</Span>
          </SecondText>
          <Title>Thanks for your order!</Title>
          <SmallText>
            You can remove or edit the order in your personal <br />
            account or by contacting support
          </SmallText>
        </TextContainer>
        <Image src={FullOrnamentClipped} alt="ornament" />
      </OrderContainer>
    </>
  );
}
