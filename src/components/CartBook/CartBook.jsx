import { useDispatch } from 'react-redux';
import { deleteCart, minusCountCart, addCart } from '@/redux/accountSlice';
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
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(deleteCart(book.id));
  };

  const minusCount = () => {
    if (book.count === 1) {
      dispatch(deleteCart(book.id));
    } else if (book.count > 1) {
      dispatch(minusCountCart(book.id));
    }
  };

  const plusCount = () => {
    dispatch(addCart(book));
  };

  return (
    <Item key={book.id}>
      <Link href={`/books/${book.id}`}>
        <StyledImg src={book.photo} alt={book.name} priority={true} />
      </Link>

      <InfoContainer>
        <Link href={`/books/${book.id}`}>
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
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
            <span>{book.count}</span>
            <ButtonMinus type="button" onClick={plusCount}>
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
