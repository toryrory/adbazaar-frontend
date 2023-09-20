import { useRouter } from "next/router";
// import { ArrowRight } from "../../../public/svg-index";
import {
  Container,
  // BtnSeeMore,
  Title,
  Text,
} from "./BookSectionLayout.styled";
import BooksSwiper from "../BooksSwiper/BooksSwiper";
import MainTexts from "../MainTexts/MainTexts";
import SeeMoreBtn from "./Buttons/SeeMoreBtn";

export default function BookSectionLayout({ title, text, banner, id }) {
  const router = useRouter();

  const handleRouting = (categoryName) => {
    if (categoryName === "children") {
      router.push(`/categories/genres/${categoryName}`);
    }
    router.push(`/categories/${categoryName}`);
  };
  return (
    <Container id={id}>
      <MainTexts title={title} text={text} />
      <BooksSwiper id={id} banner={banner} />
      <SeeMoreBtn onClick={() => handleRouting(id)} />
    </Container>
  );
}
