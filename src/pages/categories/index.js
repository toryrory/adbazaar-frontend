import { Button } from '@/styles/categories.styled';
import { Cross } from '../../../public/svg-authorization';
import Link from 'next/link';
import { useState } from 'react';
import {
  Header,
  Title,
  List,
  Item,
  CategoryLink,
  CategoryButton,
  SubList,
  SubItem,
  SubLink,
} from '@/styles/categories.styled';
import { ArrowMore } from '../../../public/svg-layout';

const genres = [
  { name: 'Arts & Architecture', id: 1 },
  { name: 'Biography & Memoir', id: 2 },
  { name: 'Body, Mind, Spirit', id: 3 },
  { name: 'Business', id: 4 },
  { name: 'Children`s', id: 5 },
  { name: 'Computer & Technology', id: 6 },
  { name: 'Education', id: 7 },
  { name: 'Fiction', id: 8 },
];

export default function Categories() {
  const [showGenres, setShowGenres] = useState(false);
  const [showBargain, setShowBargain] = useState(false);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };
  const toggleBargain = () => {
    setShowBargain(!showBargain);
  };

  return (
    <>
      <Header>
        <Title>Category</Title>
        <Button type="button">
          <Cross style={{ width: 24, height: 24 }} />
        </Button>
      </Header>
      <List>
        <Item>
          <CategoryButton type="button" onClick={toggleGenres}>
            <p>Genres</p>
            <ArrowMore style={{ width: 16, height: 16 }} />
          </CategoryButton>
        </Item>
        {showGenres && (
          <SubList>
            {genres.map((genre) => {
              return (
                <SubItem key={genre.id}>
                  <SubLink href={`/categories/${genre.id}`}>
                    {genre.name}
                  </SubLink>
                </SubItem>
              );
            })}
          </SubList>
        )}
        <Item>
          <CategoryLink href="/categories">Used Books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">New Books</CategoryLink>
        </Item>
        <Item>
          <CategoryButton type="button" onClick={toggleBargain}>
            <p>Bargain</p>
            <ArrowMore style={{ width: 16, height: 16 }} />
          </CategoryButton>
        </Item>
        {showBargain && (
          <SubList>
            <SubItem>
              <SubLink href="/categories/exchange">Exchange</SubLink>
            </SubItem>
            <SubItem>
              <SubLink href="/categories/donate">Donate</SubLink>
            </SubItem>
            <SubItem>
              <SubLink href="/categories/sell">Sell</SubLink>
            </SubItem>
          </SubList>
        )}
        <Item>
          <CategoryLink href="/categories">Gift Edition</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">Printed books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">E-books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">Audio books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">Bestsellers</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">Big Sale</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">Authors</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories">Publishing Houses</CategoryLink>
        </Item>
      </List>
    </>
  );
}
