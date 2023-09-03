// import { Simplesharer } from 'simple-sharer';
import { copy } from 'simple-sharer';
import {
  HeadContainer,
  TitleContainer,
  Title,
  Author,
  RatingBox,
  Reviews,
  ShareButton,
  BookContainer,
  StyledImg,
  Label,
  ButtonFavorites,
  PriceContainer,
  Price,
  Dollar,
  ButtonShopping,
  ContactContainer,
  ContactButton,
  SellerContainer,
  SellerBtnContainer,
} from './BookHeader.styled';
import { Rating } from '@mui/material';
import {
  Share,
  HeartPlus,
  User,
  Mail,
  Chat,
} from '../../../../public/svg-book';
import { ShoppingCart } from '../../../../public/svg-layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Seller from '../Seller/Seller';

export default function BookHeader({ book }) {
  const [showSeller, setShowSeller] = useState(false);

  const toggleSeller = () => {
    setShowSeller(!showSeller);
  };

  return (
    <>
      <HeadContainer>
        <TitleContainer>
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
        </TitleContainer>
        <div>
          <RatingBox>
            <div>
              <Rating
                readOnly
                defaultValue={5}
                sx={{ color: 'var(--rose-color)' }}
                size="small"
              />
              <Reviews>(12 reviews)</Reviews>
            </div>

            <ShareButton
              type="button"
              onClick={() => {
                copy();
                toast.success('link copied');
              }}
            >
              <Share style={{ width: 24, height: 24 }} />
            </ShareButton>
          </RatingBox>
        </div>
      </HeadContainer>
      <BookContainer>
        <Label>label</Label>
        <ButtonFavorites onClick={() => console.log('add to favorites')}>
          <HeartPlus style={{ width: 36, height: 36 }} />
        </ButtonFavorites>
        <StyledImg src={book.photo} alt={book.name} priority={true} />
        <PriceContainer>
          <Price>
            <Dollar>$</Dollar>
            {book.price}
          </Price>
          <ButtonShopping
            type="button"
            onClick={() => console.log('add to cart')}
          >
            Add to Cart
            <ShoppingCart style={{ width: 24, height: 24 }} />
          </ButtonShopping>
        </PriceContainer>
      </BookContainer>
      <SellerContainer>
        <ContactButton type="button" onClick={toggleSeller}>
          <SellerBtnContainer>Seller</SellerBtnContainer>
          <ContactContainer>
            <User style={{ width: 24, height: 24 }} />
          </ContactContainer>
          <ContactContainer>
            <Mail style={{ width: 24, height: 24 }} />
          </ContactContainer>
          <ContactContainer>
            <Chat style={{ width: 24, height: 24 }} />
          </ContactContainer>
        </ContactButton>
        {showSeller && <Seller />}
      </SellerContainer>
    </>
  );
}
