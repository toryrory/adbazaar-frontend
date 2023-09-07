import { addFavorites, deleteFavorites } from '@/redux/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectIsLoggedIn } from '@/redux/selectors';
import { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import Link from 'next/link';
import { HeartPlus, HeartMinus } from '../../../public/svg-book';
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
  StyledImg,
  RatingBox,
  Reviews,
} from './Book.styled';

export default function Book({ book, variant }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const favoriteBooks = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const isCurrentFavorite = favoriteBooks.find(
      (favorite) => favorite.id === book.id
    );
    if (isCurrentFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  });

  const addToFavorites = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }
    dispatch(addFavorites(book));
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    dispatch(deleteFavorites(book.id));
    setIsFavorite(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Item variant={variant} key={book.id}>
      <Label variant={variant}>label</Label>
      {isFavorite ? (
        <ButtonFavorites
          variant={variant}
          onClick={removeFromFavorites}
          style={{ backgroundColor: '#F38FF5' }}
        >
          <HeartMinus style={{ width: 24, height: 24 }} />
        </ButtonFavorites>
      ) : (
        <ButtonFavorites variant={variant} onClick={addToFavorites}>
          <HeartPlus style={{ width: 24, height: 24 }} />
        </ButtonFavorites>
      )}
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
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="This service is exclusively available for authorized site visitors"
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showLoginButton={true}
          showLink={true}
        />
      )}
    </Item>
  );
}
