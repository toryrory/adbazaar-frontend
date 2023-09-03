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
} from "./CategoryBooks.styled";
import { Section} from "@/components/Subscribtion/Subscription.styled";
import { FullOrnamentClipped } from "../../../../public/backgrounds";
import Book from '../../Book/Book';
import { ArrowRight } from '../../../../public/svg-book';
import { books as allBooks } from '@/data/books';
import { BgFull } from '../../../../public/backgrounds';


export default function CategoryBooks({ books, variant }) {
  const fiveBooks = allBooks.slice(0, 5);

  return (
    <Section>
      <Container>
        <List>
          {books.map((book) => {
            return <Book book={book} key={book.id} variant={variant} />;
          })}
        </List>
      </Container>
      <OrnamentImg src={FullOrnamentClipped} alt='ornament' distance='category'/>
      <NewestContainer>
        <NewestStar src={BgFull} alt='star' />
        <DarkBgNewest />
        <Title>Newest</Title>
        <Description>
          AdBazaar help you always stay up-to-date with the newest book
        </Description>
        <NewestList>
          {fiveBooks.map((item) => {
            return (
              <li key={item.id}>
                <Book book={item} variant={"main"} />
              </li>
            );
          })}
        </NewestList>
        <BtnSeeMore
          type='button'
          onClick={() => {
            console.log("see more");
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
