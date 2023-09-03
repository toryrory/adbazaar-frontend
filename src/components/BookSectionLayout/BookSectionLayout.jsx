import { useRouter } from "next/router";
import { ArrowRight } from "../../../public/svg-index";
import {
  Container,
  BtnSeeMore,
  Title,
  Text,
} from "./BookSectionLayout.styled";
import BooksSwiper from "../BooksSwiper/BooksSwiper";


export default function BookSectionLayout({ title, text, banner, id }) {
  const router = useRouter();

  const handleRouting = (categoryName) => {
    if (categoryName === 'children') {
      router.push(`/categories/genres/${categoryName}`);
    }
  router.push(`/categories/${categoryName}`)
}
  return (
    <Container id={id}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <BooksSwiper id={id} banner={banner} />
      <BtnSeeMore type='button' onClick={() => handleRouting(id)}>
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
