import { Formik, Field } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { clearCart } from '@/redux/accountSlice';

import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import {
  TitleContainer,
  Title,
  StyledForm,
  BlockContainer,
  Label,
  Input,
  HiddenBtn,
  PhoneContainer,
  CountryCode,
  RadioInput,
  RadioLabel,
  PromoButton,
  CommentInput,
} from './CheckoutForm.styled';
import { PersonSvg, FlagUa, ArrowDown } from '../../../../public/svg-account';
import {
  Truck,
  Promo,
  ArrowRight,
  Wallet,
  Comment,
} from '../../../../public/svg-book';
import {
  CheckboxChecked,
  CheckboxEmpty,
} from '../../../../public/svg-authorization';

export default function CheckoutForm({ style, initialValues }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = ({
    fullName,
    email,
    phone,
    country,
    address,
    payment,
    promo,
    comment,
  }) => {
    const orderId = nanoid(6);
    console.log(
      `
      OrderId: ${orderId},
      Name: ${fullName},
      Email: ${email},
      Phone: ${phone},
      Country: ${country},
      Address: ${address},
      Payment: ${payment},
      Promo: ${promo},
      Comment: ${comment}`
    );
    dispatch(clearCart());
    router.push(`/checkout/${orderId}`);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <StyledForm autoComplete="off" style={style}>
            <BlockContainer>
              <TitleContainer>
                <PersonSvg style={{ width: 24, height: 24 }} />
                <Title>Personal Information</Title>
              </TitleContainer>
              <Label>
                Full Name
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  required
                />
              </Label>
              <Label>
                Phone
                <PhoneContainer>
                  <FlagUa style={{ width: 31, height: 19 }} />
                  <HiddenBtn type="button">
                    <ArrowDown style={{ width: 16, height: 16 }} />
                  </HiddenBtn>
                  <CountryCode>+380</CountryCode>
                  <Input
                    style={{ fontSize: 18 }}
                    type="number"
                    name="phone"
                    placeholder="__ __ __ ___"
                    required
                  />
                </PhoneContainer>
              </Label>
              <Label>
                Email
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Label>
            </BlockContainer>
            <BlockContainer>
              <TitleContainer>
                <Truck
                  style={{ width: 22, height: 22, fill: 'var(--brand-color)' }}
                />
                <Title>Shipping Information</Title>
              </TitleContainer>
              <Label>
                Country @ City
                <Input
                  type="text"
                  name="country"
                  placeholder="Enter your country and city"
                  required
                />
              </Label>
              <Label>
                Street name, house and apartment number
                <Input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  required
                />
              </Label>
            </BlockContainer>
            <BlockContainer>
              <TitleContainer>
                <Wallet style={{ width: 24, height: 24 }} />
                <Title>Payment</Title>
              </TitleContainer>
              <RadioLabel>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {values.payment === 'receipt' ? (
                    <CheckboxChecked style={{ width: 24, height: 24 }} />
                  ) : (
                    <CheckboxEmpty style={{ width: 24, height: 24 }} />
                  )}
                  <RadioInput type="radio" name="payment" value="receipt" />
                  Payment upon receipt
                </div>
              </RadioLabel>
              <RadioLabel>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {values.payment === 'online' ? (
                    <CheckboxChecked style={{ width: 24, height: 24 }} />
                  ) : (
                    <CheckboxEmpty style={{ width: 24, height: 24 }} />
                  )}
                  <RadioInput type="radio" name="payment" value="online" />
                  Online payment by card on the site
                </div>
              </RadioLabel>
            </BlockContainer>
            <BlockContainer>
              <TitleContainer>
                <Promo style={{ width: 24, height: 24 }} />
                <Title>Promo Code</Title>
              </TitleContainer>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Input
                  type="text"
                  name="promo"
                  placeholder="Use promo code"
                  style={{
                    padding: '8px 0',
                    borderBottom: '0.5px solid var(--light-grey)',
                    width: '100%',
                  }}
                />
                <PromoButton
                  type="button"
                  onClick={() => console.log('apply promo code')}
                >
                  Apply <ArrowRight style={{ width: 14, height: 15 }} />
                </PromoButton>
              </div>
            </BlockContainer>
            <BlockContainer>
              <TitleContainer>
                <Comment style={{ width: 24, height: 24 }} />
                <Title>Your comments</Title>
              </TitleContainer>
              <Field
                type="text"
                name="comment"
                placeholder="Leave a comment if needed"
                as={CommentInput}
              />
            </BlockContainer>
            <SecondaryButton
              type="submit"
              text="Confirm order"
              style={{ width: '100%', marginTop: 48 }}
            />
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
