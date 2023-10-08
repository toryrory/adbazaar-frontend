import {
  Container,
  List,
  // BookSellerBox,
  // CircleOut,
  // RatingBox,
  // Reviews,
  // StyledImg,
  // SellerName,
  // SellerComment,
} from "./TopBookSellersSection.styled";
import MainTexts from "../MainTexts/MainTexts";
import { sectionTexts } from "@/data/section-text";
import { Rating } from "@mui/material";
import { EmptyStar } from "../../../public/svg-book";
import SeeMoreBtn from "../BookSectionLayout/Buttons/SeeMoreBtn";
import TopBookSellersItem from "./TopBookSellersItem/TopBookSellersItem";

//получать масив авторов из редакса и рендерить

export default function TopBookSellersSection({ sellers }) {
 
  return (
    <Container>
      <MainTexts title={sectionTexts[4].title} text={sectionTexts[4].text} />
      <List>
        {sellers.map(({ photo, name, comment, rating, reviews, id }) => (
          <TopBookSellersItem
            key={id}
            photo={photo}
            name={name}
            comment={comment}
            rating={rating}
            reviews={reviews}
            id={id}
          />
        ))}
      </List>
    </Container>
  );
}
