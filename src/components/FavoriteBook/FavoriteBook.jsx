import { Rating } from '@mui/material';
import Link from 'next/link';
import { deleteFavorites } from '@/redux/accountSlice';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from '../../../public/svg-layout';
import { HeartActive } from '../../../public/svg-book';
import { Cross } from '../../../public/svg-layout';
import {
  Item,
  StyledImg,
  InfoContainer,
  RatingBox,
  Reviews,
  Title,
  Author,
  Price,
  ButtonShopping,
  ButtonFavorites,
  PriceContainer,
} from './FavoriteBook.styled';

export default function FavoriteBook({ book }) {
  const dispatch = useDispatch();

  const removeFromFavorites = () => {
    dispatch(deleteFavorites(book.id));
  };

  return (
    <Item key={book.id}>
      <StyledImg src={book.photo} alt={book.name} priority={true} />
      <InfoContainer>
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
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
        </Link>
      </InfoContainer>
      <PriceContainer>
        <Price>${book.price}</Price>

        <ButtonShopping
          type="button"
          onClick={() => console.log('add to cart')}
        >
          <ShoppingCart style={{ width: 24, height: 24 }} />
        </ButtonShopping>
      </PriceContainer>
      <ButtonFavorites>
        <Cross
          onClick={removeFromFavorites}
          style={{ width: 24, height: 24 }}
        />
      </ButtonFavorites>
    </Item>
  );
}
