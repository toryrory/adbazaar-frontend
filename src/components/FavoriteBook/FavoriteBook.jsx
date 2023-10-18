import { Rating } from '@mui/material';
import Link from 'next/link';
import { deleteFavorites, addCart, deleteCart } from '@/redux/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '@/redux/selectors';
import { useState, useEffect } from 'react';
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
  ButtonInCart,
  ButtonFavorites,
  PriceContainer,
} from './FavoriteBook.styled';

export default function FavoriteBook({ book }) {
  const [isInCart, setIsInCart] = useState(false);
  const cartBooks = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => { // eslint-disable-line
    const isCurrentInCart = cartBooks.find(
      (cartBook) => cartBook.id === book.id
    );
    if (isCurrentInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  });

  const removeFromFavorites = () => {
    dispatch(deleteFavorites(book.id));
  };

  const addToCart = () => {
    dispatch(addCart(book));
  };

  const removeFromCart = () => {
    dispatch(deleteCart(book.id));
    setIsInCart(false);
  };

  return (
    <Item>
      <Link href={`/books/${book.id}`}>
        <StyledImg
          src={book.photo}
          alt={book.name}
          priority={true}
          width={60}
          height={80}
        />
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

        {isInCart ? (
          <ButtonInCart type="button" onClick={removeFromCart}>
            In Cart
          </ButtonInCart>
        ) : (
          <ButtonShopping type="button" onClick={addToCart}>
            <ShoppingCart style={{ width: 24, height: 24 }} />
          </ButtonShopping>
        )}
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
