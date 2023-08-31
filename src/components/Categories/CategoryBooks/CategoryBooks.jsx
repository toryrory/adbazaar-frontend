import {
  Container,
  List,
  Ornament,
  OrnamentImg,
  NewestContainer,
  NewestList,
  Title,
  Description,
  BtnSeeMore,
} from './CategoryBooks.styled';
import Book from '../../Book/Book';
import { BgOrnament } from '../../../../public/backgrounds';
import { ArrowRight } from '../../../../public/svg-book';
import { books as allBooks } from '@/data/books';

export default function CategoryBooks({ books, variant }) {
  const fiveBooks = allBooks.slice(0, 5);

  return (
    <>
      <Container>
        <List>
          {books.map((book) => {
            return <Book book={book} key={book.id} variant={variant} />;
          })}
        </List>
      </Container>
      <Ornament>
        <OrnamentImg src={BgOrnament} alt="ornament" />
      </Ornament>
      <NewestContainer>
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
    </>
  );
}
