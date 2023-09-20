import { useState } from 'react';
import {
  Container,
  SubContainer,
  ItemContainer,
  Title,
  SubTitle,
  Price,
  Dollar,
  ResultPrice,
  DeliveryButton,
  DeliveryForm,
  DeliveryInput,
  DeliveryItem,
  DeliveryPrice,
} from './CartTotal.styled';
import { ArrowDown } from '../../../public/svg-account';

export default function CartTotal({ books }) {
  const [delivery, setDelivery] = useState('Mail delivery');
  const [showDelivery, setShowDelivery] = useState(false);
  const [deliveryPrice, setDeliveryPrice] = useState(5.5);

  //   if (delivery === 'Mail delivery') {
  //     setDeliveryPrice(5.5);
  //   } else if (delivery === 'Pickup') {
  //     setDeliveryPrice(0.0);
  //   } else if(delivery === '')
  const cartBooksCount = books.reduce((total, book) => {
    return total + book.count;
  }, 0);

  const totalBookPrice = books
    .reduce((total, book) => {
      return total + book.price * book.count;
    }, 0)
    .toFixed(2);

  return (
    <Container>
      <SubContainer>
        <ItemContainer>
          <Title>Subtotal</Title>
          <SubTitle>{cartBooksCount} items</SubTitle>
          <Price>
            <Dollar>$</Dollar>
            {totalBookPrice}
          </Price>
        </ItemContainer>
        <ItemContainer>
          <Title style={{ fontSize: 16 }}>Shipping</Title>
          <DeliveryButton
            type="button"
            onClick={() => setShowDelivery(!showDelivery)}
          >
            {delivery} <ArrowDown style={{ width: 15, height: 14 }} />
          </DeliveryButton>
          {showDelivery && (
            <DeliveryForm>
              <DeliveryItem>
                <SubTitle>Mail delivery</SubTitle>
                <SubTitle>3 days</SubTitle>
                <DeliveryPrice>
                  <Dollar>$</Dollar>5.50
                </DeliveryPrice>
                <DeliveryInput
                  type="radio"
                  name="delivery"
                  value="Mail delivery"
                  checked={delivery === 'Mail delivery'}
                  onChange={() => {
                    setDelivery('Mail delivery');
                    setDeliveryPrice(5.5);
                    setShowDelivery(false);
                  }}
                />
              </DeliveryItem>
              <DeliveryItem>
                <SubTitle>Pickup</SubTitle>
                <SubTitle>Today</SubTitle>
                <DeliveryPrice>
                  <Dollar>$</Dollar>0.00
                </DeliveryPrice>
                <DeliveryInput
                  type="radio"
                  name="delivery"
                  value="Pickup"
                  checked={delivery === 'Pickup'}
                  onChange={() => {
                    setDelivery('Pickup');
                    setDeliveryPrice(0.0);
                    setShowDelivery(false);
                  }}
                />
              </DeliveryItem>
              <DeliveryItem>
                <SubTitle>
                  One <br />
                  company
                  <br /> delivery
                </SubTitle>
                <SubTitle>24h</SubTitle>
                <DeliveryPrice>
                  <Dollar>$</Dollar>2.50
                </DeliveryPrice>
                <DeliveryInput
                  type="radio"
                  name="delivery"
                  value="One company delivery"
                  checked={delivery === 'One company delivery'}
                  onChange={() => {
                    setDelivery('One company delivery');
                    setDeliveryPrice(2.5);
                    setShowDelivery(false);
                  }}
                />
              </DeliveryItem>
            </DeliveryForm>
          )}

          <Price>
            <Dollar>$</Dollar>
            {deliveryPrice}
          </Price>
        </ItemContainer>
      </SubContainer>
      <SubContainer></SubContainer>
      <ItemContainer>
        <ResultPrice>Total</ResultPrice>
        <Price style={{ fontSize: 28, fontWeight: 500 }}>
          <Dollar>$</Dollar>
          {Number(totalBookPrice) + deliveryPrice}
        </Price>
      </ItemContainer>
    </Container>
  );
}
