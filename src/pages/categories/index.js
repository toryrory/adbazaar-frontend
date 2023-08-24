import { useRouter } from 'next/router';
import { Button } from '@/styles/categories.styled';
import { Cross } from '../../../public/svg-authorization';
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
import { genres } from '@/data/genres';
import { books } from '@/data/books';
import Image from 'next/image';

export default function Categories() {
  const router = useRouter();
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
        <Button type="button" onClick={() => router.push('/')}>
          <Cross style={{ width: 24, height: 24 }} />
        </Button>
      </Header>
      {/* {books.map((book) => {
        return <Image src={book.photo} width={120} height={120} />;
      })} */}
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
                  <SubLink href={`/categories/${genre.link}`}>
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
