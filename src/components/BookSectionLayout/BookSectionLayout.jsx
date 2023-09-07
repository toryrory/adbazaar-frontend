import { useRouter } from "next/router";
import { ArrowRight } from "../../../public/svg-index";
import {
  Container,
  BtnSeeMore,
  Title,
  Text,
} from "./BookSectionLayout.styled";
import BooksSwiper from "../BooksSwiper/BooksSwiper";
import MainTexts from "../MainTexts/MainTexts";


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
      <MainTexts title={title} text={text} />
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
