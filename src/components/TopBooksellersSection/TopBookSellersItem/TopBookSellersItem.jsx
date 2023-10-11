import { useState } from "react";
import { BookSellerBox, CircleOut, StyledImg, RatingBox, Reviews, SellerName, SellerComment } from "./TopBookSellersItem.styled";
import { Rating } from "@mui/material";
import { EmptyStar } from "../../../../public/svg-book";
import SeeMoreBtn from "@/components/BookSectionLayout/Buttons/SeeMoreBtn";

export default function TopBookSellersItem({photo, comment, name, id, reviews, rating}) {
  const [showMore, setShowMore] = useState(false);

  const handleOpenMore = () => {
    setShowMore((prevState) => !prevState);
  };
  return (
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
      <SellerComment $showMore={showMore}>{comment}</SellerComment>
      <SeeMoreBtn onClick={handleOpenMore} showMore={showMore} />
    </BookSellerBox>
  );
}
