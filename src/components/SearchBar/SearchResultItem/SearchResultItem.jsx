import Image from "next/image";
import { Rating } from "@mui/material";
import {
  BookBox,
  BookDataBox,
  Text,
  FormatBox,
  FormatText,
} from "./SearchResyltItem.styled";
import { RatingBox, Reviews, Price, Dollar } from "../../Book/Book.styled";
import {
  TextBookSvg,
  EBookSvg,
  AudioBookSvg,
} from "../../../../public/svg-index";

export default function SearchResultItem({id, name, author, type, price, photo, rating, reviews }) {

  const editedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <BookBox href={`/books/${id}`}>
      <Image
        src={photo}
        alt={name}
        width={56}
        height={78}
        style={{
          maxHeight: "78px",
        }}
      />
      <BookDataBox>
        <Text>{name}</Text>
        <Text>{author}</Text>
        <FormatBox>
          {type === "paper" && (
            <TextBookSvg style={{ width: 20, height: 20, fill: "white" }} />
          )}
          {type === "e-book" && (
            <EBookSvg style={{ width: 20, height: 20, fill: "white" }} />
          )}
          {type === "audio" && (
            <AudioBookSvg style={{ width: 20, height: 20, fill: "white" }} />
          )}
          <FormatText>{editedType}</FormatText>
        </FormatBox>
      </BookDataBox>
      <BookDataBox>
        <RatingBox>
          <Rating
            readOnly
            value={rating} ///////////
            sx={{ color: "var(--rose-color)", width: "78px" }}
            size='small'
          />
          <Reviews>({reviews})</Reviews>
        </RatingBox>
        <Text>in stock</Text>
        <Price style={{ marginTop: "9px" }}>
          <Dollar>$</Dollar>
          {price}
        </Price>
      </BookDataBox>
    </BookBox>
  );
}
