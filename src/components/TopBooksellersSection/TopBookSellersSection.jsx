import {
  Container,
  List,
  BookSellerBox,
  CircleOut,
  RatingBox,
  Reviews,
  StyledImg,
  SellerName,
  SellerComment,
} from "./TopBookSellersSection.styled";
import MainTexts from "../MainTexts/MainTexts";
import { sectionTexts } from "@/data/section-text";
import { Rating } from "@mui/material";
import { EmptyStar } from "../../../public/svg-book";
import SeeMoreBtn from "../BookSectionLayout/Buttons/SeeMoreBtn";

//получать масив авторов из редакса и рендерить

export default function TopBookSellersSection({ sellers }) {
  return (
    <Container>
      <MainTexts title={sectionTexts[4].title} text={sectionTexts[4].text} />
      <List>
        {sellers.map(({ photo, name, comment, rating, reviews, id }) => (
          <BookSellerBox key={id}>
            <CircleOut>
              <StyledImg src={photo} alt={name} />
            </CircleOut>
            <RatingBox>
              <Rating
                readOnly
                size='small'
                precision={0.5}
                defaultValue={rating}
                sx={{ color: "var(--rose-color)" }}
                emptyIcon={<EmptyStar />}
              />
              <Reviews>({reviews})</Reviews>
            </RatingBox>
            <SellerName>{name}</SellerName>
            <SellerComment>{comment}</SellerComment>
            <SeeMoreBtn />
          </BookSellerBox>
        ))}
      </List>
    </Container>
  );
}
