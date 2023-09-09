import { copy } from 'simple-sharer';
import { Rating } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { addFavorites, deleteFavorites } from '@/redux/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectIsLoggedIn } from '@/redux/selectors';
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
import { ShoppingCart } from '../../../../public/svg-layout';
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
  ContactContainer,
  ContactButton,
  SellerContainer,
  SellerBtnContainer,
} from './BookHeader.styled';

export default function BookHeader({ book }) {
  const [showSeller, setShowSeller] = useState(false);
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

  const toggleSeller = () => {
    setShowSeller(!showSeller);
  };

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
                  color: 'var(--rose-color)',
                }}
                size="small"
                emptyIcon={<EmptyStar />}
              />
              {book.comments.length === 1 ? (
                <Comments>({book.comments.length} comment)</Comments>
              ) : (
                <Comments>({book.comments.length} comments)</Comments>
              )}
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
        <Label>{book.type}</Label>
        {isFavorite ? (
          <DeleteFavoriteBtn onClick={removeFromFavorites} />
        ) : (
          <AddFavoriteBtn onClick={addToFavorites} />
        )}

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
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="This service is exclusively available for authorized site visitors"
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showLoginButton={true}
          showLink={true}
        />
      )}
    </>
  );
}
