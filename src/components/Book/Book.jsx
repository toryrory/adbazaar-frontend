import Image from 'next/image';
import {
  Item,
  Title,
  Author,
  Label,
  ButtonFavorites,
  Bottom,
  Price,
  Dollar,
  ButtonShopping,
  StyledImg,
  RatingBox,
  Reviews,
} from './Book.styled';
import Link from 'next/link';
import { HeartPlus } from '../../../public/svg-book';
import { ShoppingCart } from '../../../public/svg-layout';
import { Rating } from '@mui/material';

export default function Book({ book, variant }) {
  return (
    <Item variant={variant} key={book.id}>
      <Label variant={variant}>label</Label>
      <ButtonFavorites
        variant={variant}
        onClick={() => console.log('add to favorites')}
      >
        <HeartPlus style={{ width: 24, height: 24 }} />
      </ButtonFavorites>
      <StyledImg
        src={book.photo}
        alt={book.name}
        priority={true}
        variant={variant}
      />
      <RatingBox>
        <Rating
          readOnly
          defaultValue={5}
          sx={{ color: 'var(--rose-color)', width: '78px' }}
          size="small"
        />
        <Reviews>(12)</Reviews>
      </RatingBox>
      <Link href={`/books/${book.id}`}>
        <Title variant={variant}>{book.name}</Title>
        <Author variant={variant}>{book.author}</Author>
      </Link>
      <Bottom>
        <Price variant={variant}>
          <Dollar>$</Dollar>
          {book.price}
        </Price>

        <ButtonShopping
          variant={variant}
          type="button"
          onClick={() => console.log('add to cart')}
        >
          <ShoppingCart style={{ width: 24, height: 24 }} />
        </ButtonShopping>
      </Bottom>
    </Item>
  );
}
