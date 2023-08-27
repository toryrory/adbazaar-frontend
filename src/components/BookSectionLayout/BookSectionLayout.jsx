import { ArrowRight } from "../../../public/svg-index";
import Book from "../Book/Book";
import { books } from "@/data/books";
import {
  List,
  Container,
  BtnSeeMore,
  Title,
  Text,
} from "./BookSectionLayout.styled";
import Image from "next/image";
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
