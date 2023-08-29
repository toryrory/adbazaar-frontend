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
import { ArrowRight, ArrowDown } from '../../../public/svg-book';
import { genres } from '@/data/genres';

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
      <List>
        <Item>
          <CategoryButton type="button" onClick={toggleGenres}>
            <p>Genres</p>
            {showGenres ? (
              <ArrowDown style={{ width: 16, height: 16 }} />
            ) : (
              <ArrowRight style={{ width: 16, height: 16 }} />
            )}
          </CategoryButton>
        </Item>
        {showGenres && (
          <SubList>
            {genres.map((genre) => {
              return (
                <SubItem key={genre.id}>
                  <SubLink href={`/categories/genres/${genre.link}`}>
                    {genre.name}
                  </SubLink>
                </SubItem>
              );
            })}
          </SubList>
        )}
        <Item>
          <CategoryLink href="/categories/used">Used Books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/new">New Books</CategoryLink>
        </Item>
        <Item>
          <CategoryButton type="button" onClick={toggleBargain}>
            <p>Bargain</p>
            {showBargain ? (
              <ArrowDown style={{ width: 16, height: 16 }} />
            ) : (
              <ArrowRight style={{ width: 16, height: 16 }} />
            )}
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
          <CategoryLink href="/categories/gift">Gift Edition</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/paper">Printed books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/e-book">E-books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/audio">Audio books</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/bestsellers">
            Bestsellers
          </CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/sale">Big Sale</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/authors">Authors</CategoryLink>
        </Item>
        <Item>
          <CategoryLink href="/categories/publisher">
            Publishing Houses
          </CategoryLink>
        </Item>
      </List>
    </>
  );
}
