import { Checkbox } from "@mui/material";
import {
  CheckboxEmpty,
  CheckboxChecked,
} from "../../../../../public/svg-authorization";
import { changeBookCheckBox } from "@/redux/auth/authSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BannerBestsellers } from "../../../../../public/png/banners"; //for tests
import { Rating } from "@mui/material";
import { EmptyStar } from "../../../../../public/svg-book";
import {
  BookAdContainer,
  StyledImg,
  BookInfoBox,
  BookText,
  RatingBox,
  Reviews,
  BookStatusBox,
  Price,
  StatusBtn,
} from "./UserBookItem.styled";
import { useRouter } from "next/router";

//добавить на reviews привязку к кол-ву коментов, от бекенда нужно возвращать с книгой комменты по ней
//добавить логику active/not active - добавлять/убирать свойство, если удалять то бек должен возвращать свойство нот ектив и по нему нужно убрать возможность получать эту книгу по запросу на книги
//по нажатию на кнопку edit делать запрос по book/id и подставлять данные в форму изменения книги
export default function UserBookItem({
  id,
  title,
  rate,
  price,
  author,
  photo,
  checked,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [btnActive, setBtnActive] = useState(true);
  const handleBookStatus = () => {
    if (!checked) {
        return
      }
        setBtnActive(prevState => !prevState)
    }

  return (
    <BookAdContainer $active={btnActive} onClick={() => router.push(`/books/${id}`)}>
      <Checkbox
        icon={<CheckboxEmpty style={{ width: "24px", height: "24px" }} />}
        checkedIcon={
          <CheckboxChecked style={{ width: "24px", height: "24px" }} />
        }
        onClick={() => dispatch(changeBookCheckBox(id))}
        checked={checked}
        sx={{ marginTop: "auto", marginBottom: "auto" }}
      />
      <StyledImg src={photo} alt='book for sell photo' width={60} height={80} />
      <BookInfoBox>
        <RatingBox>
          <Rating
            readOnly
            precision={0.5}
            defaultValue={rate}
            sx={{
              color: "var(--rose-color)",
              fontSize: "14px",
            }}
            size='small'
            emptyIcon={<EmptyStar />}
          />
          <Reviews>(0)</Reviews>
        </RatingBox>
        <BookText $text='title'>{title}</BookText>
        <BookText $text='author'>{author}</BookText>
      </BookInfoBox>
      <BookStatusBox>
        <StatusBtn $active={btnActive} onClick={handleBookStatus}>
          {btnActive ? "active" : "no active"}
        </StatusBtn>
        <Price>
          <span>$</span>
          {price}
        </Price>
      </BookStatusBox>
    </BookAdContainer>
  );
}
