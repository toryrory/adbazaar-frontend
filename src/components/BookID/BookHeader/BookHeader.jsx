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
  SellerButton,
  ContactButton,
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

export default function BookHeader({ book }) {
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

            <ShareButton type="button" onClick={() => console.log('share')}>
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
      <ContactContainer>
        <SellerButton type="button" onClick={() => console.log('clicked')}>
          Seller
        </SellerButton>
        <ContactButton type="button" onClick={() => console.log('clicked')}>
          <User style={{ width: 24, height: 24 }} />
        </ContactButton>
        <ContactButton type="button" onClick={() => console.log('clicked')}>
          <Mail style={{ width: 24, height: 24 }} />
        </ContactButton>
        <ContactButton type="button" onClick={() => console.log('clicked')}>
          <Chat style={{ width: 24, height: 24 }} />
        </ContactButton>
      </ContactContainer>
    </>
  );
}
