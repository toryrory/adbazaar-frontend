import { copy } from 'simple-sharer';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  addFavorites,
  deleteFavorites,
  addCart,
  deleteCart,
} from '@/redux/auth/operations';
import {
  addCartUnauthorized,
  deleteCartUnauthorized,
} from '@/redux/books/bookSlice';
import {
  selectCart,
  selectFavorites,
  selectIsLoggedIn,
  selectIsVerified,
  selectCartBooksUnauthorized,
} from '@/redux/selectors';

import Seller from '../Seller/Seller';
import AddFavoriteBtn from '../FavoriteBtn/AddFavoriteBtn';
import DeleteFavoriteBtn from '../FavoriteBtn/DeleteFavoriteBtn';
import Modal from '@/components/modal/Modal';
import {
  Share,
  User,
  Mail,
  Chat,
  EmptyStar,
} from '../../../../public/svg-book';
import { ShoppingCart, ShoppingCartBlack } from '../../../../public/svg-layout';
import {
  HeadContainer,
  TitleContainer,
  Title,
  Author,
  RatingBox,
  Comments,
  ShareButton,
  BookContainer,
  StyledImg,
  Label,
  PriceContainer,
  Price,
  Dollar,
  ButtonShopping,
  ButtonInCart,
  ContactContainer,
  ContactButton,
  SellerContainer,
  SellerBtnContainer,
} from './BookHeader.styled';

export default function BookHeader({ book }) {
  const [showSeller, setShowSeller] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVerifModal, setShowVerifModal] = useState(false);
  const [comments, setComments] = useState(book.comments);
  const favoriteBooks = useSelector(selectFavorites);
  const cartBooks = useSelector(selectCart);
  const cartBooksUnauthorized = useSelector(selectCartBooksUnauthorized);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerified = useSelector(selectIsVerified);
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
    if (isLoggedIn && isVerified) {
      const isCurrentInCart = cartBooks.find(
        (cartBook) => cartBook.id === book.id
      );
      if (isCurrentInCart) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    } else {
      const isCurrentInCart = cartBooksUnauthorized.find(
        (cartBook) => cartBook.id === book.id
      );
      if (isCurrentInCart) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    }
  }, [cartBooks, cartBooksUnauthorized, book, isLoggedIn, isVerified]);

  const toggleSeller = () => {
    setShowSeller(!showSeller);
  };

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

  const addToCart = () => {
    if (isLoggedIn && isVerified) {
      dispatch(addCart(book.id));
    } else {
      dispatch(addCartUnauthorized(book));
    }
  };

  const removeFromCart = () => {
    if (isLoggedIn && isVerified) {
      dispatch(deleteCart(book.id));
      setIsInCart(false);
    } else {
      dispatch(deleteCartUnauthorized(book.id));
      setIsInCart(false);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    setShowVerifModal(false);
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
                precision={0.5}
                defaultValue={book.rating}
                sx={{
                  color: "var(--rose-color)",
                }}
                size='small'
                emptyIcon={<EmptyStar />}
              />
              {book.reviews === 1 ? (
                <Comments>({book.reviews} comment)</Comments>
              ) : (
                <Comments>({book.reviews} comments)</Comments>
              )}
              {/* {comments.length === 1 ? (
                <Comments>({comments.length} comment)</Comments>
              ) : (
                <Comments>({comments.length} comments)</Comments>
              )} */}
            </div>

            <ShareButton
              type='button'
              onClick={() => {
                copy();
                toast.success("link copied");
              }}
            >
              <Share style={{ width: 24, height: 24 }} />
            </ShareButton>
          </RatingBox>
        </div>
      </HeadContainer>
      <BookContainer>
        <Label>{book.type}</Label>
        {isFavorite ? (
          <DeleteFavoriteBtn onClick={removeFromFavorites} />
        ) : (
          <AddFavoriteBtn onClick={addToFavorites} />
        )}
        <StyledImg
          src={book.photo}
          alt={book.name}
          width={188}
          height={270}
          priority={true}
        />
        <PriceContainer>
          <Price>
            <Dollar>$</Dollar>
            {book.price}
          </Price>
          {isInCart ? (
            <ButtonInCart type='button' onClick={removeFromCart}>
              In Cart
              <ShoppingCartBlack style={{ width: 24, height: 24 }} />
            </ButtonInCart>
          ) : (
            <ButtonShopping type='button' onClick={addToCart}>
              Add to Cart
              <ShoppingCart style={{ width: 24, height: 24 }} />
            </ButtonShopping>
          )}
        </PriceContainer>
      </BookContainer>
      <SellerContainer>
        <ContactButton type='button' onClick={toggleSeller}>
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
        {showSeller && (
          <Seller seller={book.seller} publicationDate={book.publicationDate} />
        )}
      </SellerContainer>
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message='This service is exclusively available for authorized site visitors'
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showLoginButton={true}
          showLink={true}
        />
      )}
      {showVerifModal && (
        <Modal
          onClose={onCloseModal}
          message='This service is exclusively available for verified users'
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showButton={true}
        />
      )}
    </>
  );
}
