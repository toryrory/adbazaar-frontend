import { ArrowRight } from "../../../public/svg-index";
import {
  Container,
  BtnSeeMore,
  Title,
  Text,
} from "./BookSectionLayout.styled";
import BooksSwiper from "../BooksSwiper/BooksSwiper";


export default function BookSectionLayout({ title, text, banner, id }) {

  return (
    <Container id={id}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <BooksSwiper id={id} banner={banner}/>
      <BtnSeeMore type='button'>
        See more
        <ArrowRight
          style={{
            backgroundColor: "var(--main-background)",
            width: 14,
            height: 15,
          }}
        />
      </BtnSeeMore>
    </Container>
  );
}
