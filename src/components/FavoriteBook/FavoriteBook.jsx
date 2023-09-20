import { Rating } from '@mui/material';
import Link from 'next/link';
import { deleteFavorites, addCart } from '@/redux/accountSlice';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from '../../../public/svg-layout';
import { Cross } from '../../../public/svg-layout';
import { EmptyStar } from '../../../public/svg-book';
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

  const addToCart = () => {
    dispatch(addCart(book));
  };

  return (
    <Item key={book.id}>
      <Link href={`/books/${book.id}`}>
        <StyledImg src={book.photo} alt={book.name} priority={true} />
      </Link>

      <InfoContainer>
        <RatingBox>
          <Rating
            readOnly
            precision={0.5}
            defaultValue={book.rating}
            sx={{
              color: 'var(--rose-color)',
            }}
            size="small"
            emptyIcon={<EmptyStar />}
          />
          <Reviews>({book.comments.length})</Reviews>
        </RatingBox>
        <Link href={`/books/${book.id}`}>
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
        </Link>
      </InfoContainer>
      <PriceContainer>
        <Price>${book.price}</Price>

        <ButtonShopping type="button" onClick={addToCart}>
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
