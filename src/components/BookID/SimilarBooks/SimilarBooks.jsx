import { useRouter } from 'next/router';
import {
  Container,
  Title,
  Description,
  List,
  BtnSeeMore,
  StarSimilar, DarkBgSimilar
} from './SimilarBooks.styled';
import { books } from '@/data/books';
import { genres } from '@/data/genres';
import Book from '@/components/Book/Book';
import { ArrowRight } from '../../../../public/svg-book';
import { BgFull } from '../../../../public/backgrounds';


export default function SimilarBooks({ book }) {
  const router = useRouter();
  const currentGenre = genres.find((genre) => genre.link === book.genre);
  const foundedBooks = books.filter((book) => book.genre === currentGenre.link);

  const handleSeeMore = () => {
    router.push(`/categories/genres/${currentGenre.link}`);
  };

  return (
    <Container>
      <StarSimilar src={BgFull} alt='star' />
      <DarkBgSimilar />
      <Title>Similar in genre &#34;{currentGenre.name}&#34;</Title>
      <Description>
        AdBazaar help you always stay up-to-date with the newest book
      </Description>
      <List>
        {foundedBooks.map((item) => {
          if (item.id !== book.id) {
            return (
              <li key={item.id}>
                <Book book={item} variant={"main"} />
              </li>
            );
          }
        })}
      </List>
      <BtnSeeMore type='button' onClick={handleSeeMore}>
        See more
        <ArrowRight
          style={{
            width: 14,
            height: 15,
          }}
        />
      </BtnSeeMore>
    </Container>
  );
}
