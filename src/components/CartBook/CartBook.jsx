import { useDispatch, useSelector } from 'react-redux';
// import { minusCountCart } from '@/redux/accountSlice';

import { addCart, deleteCart } from '@/redux/auth/operations';
import {
  addCartUnauthorized,
  deleteCartUnauthorized,
} from '@/redux/books/bookSlice';
import { selectIsLoggedIn, selectIsVerified } from '@/redux/selectors';

import {
  Item,
  StyledImg,
  InfoContainer,
  Title,
  Author,
  TypeContainer,
  Type,
  Price,
  Dollar,
  ButtonMinus,
  ButtonContainer,
  PriceContainer,
  ButtonDelete,
} from './CartBook.styled';
import Link from 'next/link';
import { PaperType, EBookType, AudioType } from '../../../public/svg-book';
import { Trash } from '../../../public/svg-account';

export default function CartBook({ book }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerified = useSelector(selectIsVerified);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    if (isLoggedIn && isVerified) {
      dispatch(deleteCart(book.id));
    } else {
      dispatch(deleteCartUnauthorized(book.id));
    }
  };

  const minusCount = () => {
    if (isLoggedIn && isVerified) {
      if (book.quantity === 1) {
        dispatch(deleteCart(book.id));
      }
    } else {
      if (book.quantity === 1) {
        dispatch(deleteCartUnauthorized(book.id));
      }
    }
    // else if (book.quantity > 1) {
    //   dispatch(minusCountCart(book.id));
    // }
  };

  const plusCount = () => {
    if (isLoggedIn && isVerified) {
      dispatch(addCart(book.id));
    } else {
      dispatch(addCartUnauthorized(book));
    }
  };

  return (
    <Item>
      <Link href={`/books/${book.id}`}>
        <StyledImg
          src={book.image_path}
          alt={book.title}
          priority={true}
          width={70}
          height={100}
        />
      </Link>

      <InfoContainer>
        <Link href={`/books/${book.id}`}>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          {book.type && (
            <TypeContainer>
              {book.type === 'e-book' && (
                <EBookType
                  style={{ width: 16, height: 16, fill: 'var(--light-grey)' }}
                />
              )}
              {book.type === 'audio' && (
                <AudioType
                  style={{ width: 16, height: 16, fill: 'var(--light-grey)' }}
                />
              )}
              {book.type === 'paper' && (
                <PaperType
                  style={{ width: 16, height: 16, fill: 'var(--light-grey)' }}
                />
              )}
              <Type>{book.type}</Type>
            </TypeContainer>
          )}
        </Link>
        <PriceContainer>
          <Price>
            <Dollar>$</Dollar>
            {book.price}
          </Price>
          <ButtonContainer>
            <ButtonMinus type="button" onClick={minusCount}>
              -
            </ButtonMinus>
            <span>{book.quantity}</span>
            <ButtonMinus
              type="button"
              onClick={plusCount}
              disabled={book.quantity <= 1}
            >
              +
            </ButtonMinus>
          </ButtonContainer>
        </PriceContainer>
      </InfoContainer>
      <ButtonDelete onClick={removeFromCart}>
        <Trash style={{ width: 24, height: 24 }} />
      </ButtonDelete>
    </Item>
  );
}
