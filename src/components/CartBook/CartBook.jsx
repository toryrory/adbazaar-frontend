import { useDispatch, useSelector } from 'react-redux';
import { minusCountCart } from '@/redux/accountSlice';
import { addCart, deleteCart } from '@/redux/auth/operations';
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
import { useEffect } from 'react';

export default function CartBook({ book }) {
  const dispatch = useDispatch();
  const count = 1;

  const removeFromCart = () => {
    dispatch(deleteCart(book.id));
  };

  const minusCount = () => {
    // if (book.count === 1) {
    dispatch(deleteCart(book.id));
    // } else if (book.count > 1) {
    //   dispatch(minusCountCart(book.id));
    // }
  };

  const plusCount = () => {
    dispatch(addCart(book.id));
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
          {/* <TypeContainer>
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
          </TypeContainer> */}
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
            <span>{count}</span>
            <ButtonMinus
              type="button"
              onClick={plusCount}
              disabled={count <= 1}
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
