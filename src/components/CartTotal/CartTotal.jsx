import { useEffect, useState } from 'react';
import SecondaryButton from '../secondaryButton/SecondaryButton';
import { useRouter } from 'next/router';
import {
  StyledForm,
  SubContainer,
  ItemContainer,
  Title,
  SubTitle,
  Price,
  Dollar,
  ResultPrice,
  DeliveryButton,
  DeliveryContainer,
  DeliveryInput,
  DeliveryItem,
  DeliveryPrice,
  Checkbox,
  CheckboxLabel,
} from './CartTotal.styled';
import { ArrowDown } from '../../../public/svg-account';
import {
  CheckboxChecked,
  CheckboxEmpty,
} from '../../../public/svg-authorization';

export default function CartTotal({ books, cartBooksCount }) {
  const router = useRouter();
  const [showDelivery, setShowDelivery] = useState(false);
  const [delivery, setDelivery] = useState(5.5);
  const [giftPack, setGiftPack] = useState(false);
  const [customMessage, setCustomMessage] = useState(false);

  const totalBookPrice = books
    .reduce((total, book) => {
      return total + book.price * book.quantity;
    }, 0)
    .toFixed(2);

  const [totalPrice, setTotalPrice] = useState(delivery + totalBookPrice);

  useEffect(() => {
    if (giftPack && customMessage) {
      setTotalPrice(delivery + Number(totalBookPrice) + 1);
    } else if ((giftPack && !customMessage) || (!giftPack && customMessage)) {
      setTotalPrice(delivery + Number(totalBookPrice) + 0.5);
    } else if (!giftPack && !customMessage) {
      setTotalPrice(delivery + Number(totalBookPrice));
    }
  }, [delivery, giftPack, customMessage, totalBookPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/checkout',
      query: { total: totalPrice },
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SubContainer>
        <ItemContainer>
          <Title>Subtotal</Title>
          {cartBooksCount === 1 ? (
            <SubTitle>{cartBooksCount} item</SubTitle>
          ) : (
            <SubTitle>{cartBooksCount} items</SubTitle>
          )}
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
            {delivery === 5.5 && 'Mail delivery'}
            {delivery === 0 && 'Pickup'}
            {delivery === 2.5 && 'One company delivery'}
            <ArrowDown style={{ width: 15, height: 14 }} />
          </DeliveryButton>
          {showDelivery && (
            <DeliveryContainer>
              <DeliveryItem>
                <SubTitle>Mail delivery</SubTitle>
                <SubTitle>3 days</SubTitle>
                <DeliveryPrice>
                  <Dollar>$</Dollar>5.50
                </DeliveryPrice>
                <DeliveryInput
                  value={5.5}
                  type="radio"
                  name="delivery"
                  checked={delivery === 5.5}
                  onChange={() => {
                    setDelivery(5.5);
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
                  value={0}
                  checked={delivery === 0}
                  onChange={() => {
                    setDelivery(0);
                    setShowDelivery(false);
                  }}
                />
              </DeliveryItem>
              <DeliveryItem style={{ border: 'none' }}>
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
                  value={2.5}
                  checked={delivery === 2.5}
                  onChange={() => {
                    setDelivery(2.5);
                    setShowDelivery(false);
                  }}
                />
              </DeliveryItem>
            </DeliveryContainer>
          )}

          <Price>
            <Dollar>$</Dollar>
            {delivery}
          </Price>
        </ItemContainer>
      </SubContainer>
      <SubContainer>
        <CheckboxLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {giftPack ? (
              <CheckboxChecked style={{ width: 20, height: 20 }} />
            ) : (
              <CheckboxEmpty style={{ width: 20, height: 20 }} />
            )}
            <Checkbox
              type="checkbox"
              name="giftPack"
              checked={giftPack}
              onChange={() => setGiftPack(!giftPack)}
            />
            Pack as a gift
          </div>

          <DeliveryPrice>
            <Dollar>$</Dollar>0.50
          </DeliveryPrice>
        </CheckboxLabel>

        <CheckboxLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {customMessage ? (
              <CheckboxChecked style={{ width: 20, height: 20 }} />
            ) : (
              <CheckboxEmpty style={{ width: 20, height: 20 }} />
            )}
            <Checkbox
              type="checkbox"
              name="customMessage"
              checked={customMessage}
              onChange={() => setCustomMessage(!customMessage)}
            />
            Custom message
          </div>

          <DeliveryPrice>
            <Dollar>$</Dollar>0.50
          </DeliveryPrice>
        </CheckboxLabel>
      </SubContainer>
      <ItemContainer>
        <ResultPrice>Total</ResultPrice>
        <Price style={{ fontSize: 28, fontWeight: 500 }}>
          <Dollar>$</Dollar>
          {totalPrice}
        </Price>
      </ItemContainer>
      <SecondaryButton
        type="submit"
        text="Proceed checkout"
        style={{ marginTop: 84, width: '100%' }}
      />
    </StyledForm>
  );
}
