import InfoContainer from "../InfoContainer/InfoContainer";
import { GreatGatsby } from "../../../../../public/books";
import { Rating } from "@mui/material";
import { EmptyStar } from "../../../../../public/svg-book";
import {
  StyledImg,
  BookInfoBox,
  BookInfoBtn,
  BookInfoText,
  BookAuthor,
  BookTitle,
  BookInfoDollar,
    BookInfoPrice,
  ActiveBtn,
} from "./NotificationBookInfo.styled";
import { RatingBox, Reviews } from "@/components/Book/Book.styled";

export default function NotificationBookInfo() {
  return (
    <InfoContainer title={"Ordered book"}>
      <StyledImg src={GreatGatsby} alt='book title' />
      <BookInfoBox>
        <BookInfoText>
          <BookTitle>The Invisible Life of Euridice Gusmao</BookTitle>
          <BookAuthor>Martha Batalha</BookAuthor>
          <RatingBox>
            <Rating
              readOnly
              precision={0.5}
              defaultValue={4}
              sx={{
                color: "var(--rose-color)",
              }}
              size='small'
              emptyIcon={<EmptyStar />}
            />
            <Reviews style={{ margin: 0 }}>(12)</Reviews>
          </RatingBox>
        </BookInfoText>
        <BookInfoBtn>
          <ActiveBtn>Active</ActiveBtn>
          <BookInfoPrice>
            <BookInfoDollar>$</BookInfoDollar>2.44
          </BookInfoPrice>
        </BookInfoBtn>
      </BookInfoBox>
    </InfoContainer>
  );
}
