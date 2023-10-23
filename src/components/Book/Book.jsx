import {
  addFavorites,
  deleteFavorites,
  addCart,
  deleteCart,
} from '@/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  selectIsLoggedIn,
  selectCart,
  selectUserId,
  selectIsVerified,
} from '@/redux/selectors';
import { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import Link from 'next/link';
import { HeartPlus, HeartMinus, EmptyStar } from '../../../public/svg-book';
import { ShoppingCart } from '../../../public/svg-layout';
import { Rating } from '@mui/material';
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
  ButtonInCart,
  StyledImg,
  RatingBox,
  Reviews,
} from './Book.styled';
import { Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  weight: '500',
  subsets: ['latin'],
});

export default function Book({ book, variant }) {
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVerifModal, setShowVerifModal] = useState(false);
  const favoriteBooks = useSelector(selectFavorites);
  const cartBooks = useSelector(selectCart);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerified = useSelector(selectIsVerified);
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-line
    const isCurrentFavorite = favoriteBooks.find(
      (favorite) => favorite.id === book.id
    );
    if (isCurrentFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteBooks, book]);

  useEffect(() => {
    // eslint-disable-line
    const isCurrentInCart = cartBooks.find(
      (cartBook) => cartBook.id === book.id
    );
    if (isCurrentInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartBooks, book]);

  const addToFavorites = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    } else if (isLoggedIn && !isVerified) {
      setShowVerifModal(true);
      return;
    }
    dispatch(addFavorites(book.id));
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    dispatch(deleteFavorites(book.id));
    setIsFavorite(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setShowVerifModal(false);
  };

  const addToCart = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    } else if (isLoggedIn && !isVerified) {
      setShowVerifModal(true);
      return;
    }
    dispatch(addCart(book.id));
  };

  const removeFromCart = () => {
    dispatch(deleteCart(book.id));
    setIsInCart(false);
  };

  return (
    <Item $variant={variant} key={book.id}>
      <Label $variant={variant}>{book.type}</Label>
      {isFavorite ? (
        <ButtonFavorites
          $variant={variant}
          onClick={removeFromFavorites}
          style={{ backgroundColor: '#F38FF5' }}
        >
          <HeartMinus style={{ width: 24, height: 24 }} />
        </ButtonFavorites>
      ) : (
        <ButtonFavorites $variant={variant} onClick={addToFavorites}>
          <HeartPlus style={{ width: 24, height: 24 }} />
        </ButtonFavorites>
      )}
      <Link href={`/books/${book.id}`}>
        <StyledImg
          src={book.photo}
          alt={book.name}
          width={188}
          height={270}
          priority={true}
          $variant={variant}
        />
      </Link>

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
        {book.comments && <Reviews>({book.comments.length})</Reviews>}
      </RatingBox>
      <Link href={`/books/${book.id}`}>
        <Title $variant={variant}>{book.name}</Title>
        <Author $variant={variant}>{book.author}</Author>
      </Link>
      <Bottom>
        <Price $variant={variant}>
          <Dollar>$</Dollar>
          {book.price}
        </Price>
        {isInCart ? (
          <ButtonInCart
            $variant={variant}
            type="button"
            onClick={removeFromCart}
          >
            In Cart
          </ButtonInCart>
        ) : (
          <ButtonShopping $variant={variant} type="button" onClick={addToCart}>
            <ShoppingCart style={{ width: 24, height: 24 }} />
          </ButtonShopping>
        )}
      </Bottom>
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="This service is exclusively available for authorized site visitors"
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showLoginButton={true}
          showLink={true}
        />
      )}
      {showVerifModal && (
        <Modal
          onClose={onCloseModal}
          message="This service is exclusively available for verified users"
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showButton={true}
        />
      )}
    </Item>
  );
}
