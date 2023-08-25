import Image from 'next/image';
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
} from './Book.styled';
import Link from 'next/link';
import { HeartPlus } from '../../../public/svg-book';
import { ShoppingCart } from '../../../public/svg-layout';

export default function Book({ book }) {
  return (
    <Item key={book.id}>
      <Label>label</Label>
      <ButtonFavorites onClick={() => console.log('add to favorites')}>
        <HeartPlus style={{ width: 24, height: 24 }} />
      </ButtonFavorites>
      <Image src={book.photo} width="96" height="140" alt={book.name} />

      <Link href="/">
        <Title>{book.name}</Title>
        <Author>{book.author}</Author>
      </Link>
      <Bottom>
        <Price>
          <Dollar>$</Dollar>
          {book.price}
        </Price>

        <ButtonShopping
          type="button"
          onClick={() => console.log('add to cart')}
        >
          <ShoppingCart style={{ width: 24, height: 24 }} />
        </ButtonShopping>
      </Bottom>
    </Item>
  );
}
