import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '@/redux/selectors';

import Book from '../../Book/Book';
import { Section } from '@/components/Subscribtion/Subscription.styled';

import {
  Container,
  List,
  OrnamentImg,
  NewestContainer,
  NewestList,
  Title,
  Description,
  BtnSeeMore,
  NewestStar,
  DarkBgNewest,
  BtnLoadMore,
} from './CategoryBooks.styled';

import { FullOrnamentClipped } from '../../../../public/backgrounds';
import { ArrowRight, LoadMore } from '../../../../public/svg-book';
import { BgFull } from '../../../../public/backgrounds';

export default function CategoryBooks({ books, variant }) {
  const allBooks = useSelector(selectBooks);
  const fiveBooks = allBooks.slice(0, 5);
  const countBooks = books.length;
  const [countBooksToShow, setCountBooksToShow] = useState(8);
  const [booksToShow, setBooksToShow] = useState(null);

  useEffect(() => {
    setCountBooksToShow(8);
  }, [books]);

  useEffect(() => {
    setBooksToShow(books.slice(0, countBooksToShow));
  }, [countBooksToShow, books]);

  const handleLoadMore = () => {
    setCountBooksToShow(countBooksToShow + 8);
    setBooksToShow(books.slice(0, countBooksToShow));
  };

  return (
    <Section>
      <Container>
        {booksToShow && countBooksToShow && (
          <List>
            {booksToShow.map((book) => {
              return <Book book={book} key={book.id} variant={variant} />;
            })}
          </List>
        )}
      </Container>
      {countBooksToShow < countBooks && (
        <BtnLoadMore type="button" onClick={handleLoadMore}>
          <LoadMore style={{ width: 24, height: 24 }} />
          Load more
        </BtnLoadMore>
      )}
      <OrnamentImg
        src={FullOrnamentClipped}
        alt="ornament"
        distance="category"
      />
      <NewestContainer>
        <NewestStar src={BgFull} alt="star" />
        <DarkBgNewest />
        <Title>Newest</Title>
        <Description>
          AdBazaar help you always stay up-to-date with the newest book
        </Description>
        <NewestList>
          {fiveBooks.map((item) => {
            return (
              <li key={item.id}>
                <Book book={item} variant={'main'} />
              </li>
            );
          })}
        </NewestList>
        <BtnSeeMore
          type="button"
          onClick={() => {
            console.log('see more');
          }}
        >
          See more
          <ArrowRight
            style={{
              width: 14,
              height: 15,
            }}
          />
        </BtnSeeMore>
      </NewestContainer>
    </Section>
  );
}
