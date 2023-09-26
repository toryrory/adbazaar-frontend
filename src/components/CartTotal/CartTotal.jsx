import { useState } from 'react';
import SecondaryButton from '../secondaryButton/SecondaryButton';
import { Formik } from 'formik';
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

export default function CartTotal({ books }) {
  const [showDelivery, setShowDelivery] = useState(false);

  const handleSubmit = ({ delivery, giftPack, customMessage }, actions) => {
    console.log(delivery, giftPack, customMessage, totalBookPrice);
  };

  const cartBooksCount = books.reduce((total, book) => {
    return total + book.count;
  }, 0);

  const totalBookPrice = books
    .reduce((total, book) => {
      return total + book.price * book.count;
    }, 0)
    .toFixed(2);

  return (
    <Formik
      initialValues={{
        delivery: '5.5',
        giftPack: false,
        customMessage: false,
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <StyledForm>
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
                {values.delivery === '5.5' && 'Mail delivery'}
                {values.delivery === '0' && 'Pickup'}
                {values.delivery === '2.5' && 'One company delivery'}
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
                    <DeliveryInput value="5.5" type="radio" name="delivery" />
                  </DeliveryItem>
                  <DeliveryItem>
                    <SubTitle>Pickup</SubTitle>
                    <SubTitle>Today</SubTitle>
                    <DeliveryPrice>
                      <Dollar>$</Dollar>0.00
                    </DeliveryPrice>
                    <DeliveryInput type="radio" name="delivery" value="0" />
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
                    <DeliveryInput type="radio" name="delivery" value="2.5" />
                  </DeliveryItem>
                </DeliveryContainer>
              )}

              <Price>
                <Dollar>$</Dollar>
                {values.delivery}
              </Price>
            </ItemContainer>
          </SubContainer>
          <SubContainer>
            <CheckboxLabel>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {values.giftPack ? (
                  <CheckboxChecked style={{ width: 20, height: 20 }} />
                ) : (
                  <CheckboxEmpty style={{ width: 20, height: 20 }} />
                )}
                <Checkbox type="checkbox" name="giftPack" />
                Pack as a gift
              </div>

              <DeliveryPrice>
                <Dollar>$</Dollar>0.50
              </DeliveryPrice>
            </CheckboxLabel>

            <CheckboxLabel>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {values.customMessage ? (
                  <CheckboxChecked style={{ width: 20, height: 20 }} />
                ) : (
                  <CheckboxEmpty style={{ width: 20, height: 20 }} />
                )}
                <Checkbox type="checkbox" name="customMessage" />
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
              {values.customMessage &&
                values.giftPack &&
                Number(totalBookPrice) + Number(values.delivery) + 1}
              {values.customMessage &&
                !values.giftPack &&
                Number(totalBookPrice) + Number(values.delivery) + 0.5}
              {!values.customMessage &&
                values.giftPack &&
                Number(totalBookPrice) + Number(values.delivery) + 0.5}
              {!values.customMessage &&
                !values.giftPack &&
                Number(totalBookPrice) + Number(values.delivery)}
            </Price>
          </ItemContainer>
          <SecondaryButton
            type="submit"
            text="Procced checkout"
            style={{ marginTop: 84, width: '100%' }}
          />
        </StyledForm>
      )}
    </Formik>
  );
}
