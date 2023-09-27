import {
  Container,
  MainInfoBox,
  TextBox,
  OrderNo,
  Text,
  StyledImg,
  BookInfoBox,
  BookInfoText,
  BookInfoBtn,
  MainMessageText,
  MainMessageBox,
  MainMessageTitle,
  ArrowBtn,
  TimeAndBtnBox,
  DetailsBox,
} from "./Notifications.styled";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import {
  CheckboxEmpty,
  CheckboxChecked,
} from "../../../../public/svg-authorization";
import InfoContainer from "./InfoContainer/InfoContainer";
import { GreatGatsby } from "../../../../public/books";
import { Rating } from "@mui/material";
import { EmptyStar } from "../../../../public/svg-book";
import { NewNotif } from "../../../../public/svg-account";
import { ArrowRight, ArrowUp } from "../../../../public/svg-book";
import notifications from "../../../data/notifications";
import NotificationBookInfo from "./NotificationBookInfo/NotificationBookInfo";
import NotificationCustomerInfo from "./NotificationCustomerInfo/NotificationCustomerInfo";
import NotificationsBtnsGroup from "./NotificationsBtnsGroup/NotificationsBtnsGroup";

const comment = {
  title: "New Comment",
  text: "Dear partner!You have received a new comment. Please review and respond with an answer",
  firstBoxName: "Book",
  secondBoxName: "Comment",
};
const order = {
  title: "New Order",
  firstBoxName: "Ordered book",
  secondBoxName: "Customer",
};
//в массив который прийдет сортировать тексты по type, <p>type.text</p> данные из type буду брать с обьектов comment или order
export default function Notifications() {
  const [openMore, setOpenMore] = useState(false);

  const handleOpenMore = () => {
    setOpenMore((prevState) => !prevState);
  };

  return (
    <Container>
      <MainInfoBox $opened={openMore}>
        <Checkbox
          icon={<CheckboxEmpty style={{ width: "24px", height: "24px" }} />}
          checkedIcon={
            <CheckboxChecked style={{ width: "24px", height: "24px" }} />
          }
          sx={{ padding: 0 }}
          // checked={formData.linkToStock}
        />
        <MainMessageBox>
          <MainMessageText>
            <MainMessageTitle>
              <NewNotif
                style={{ width: "9px", height: "9px", marginRight: "8px" }}
              />
              New order
            </MainMessageTitle>
            <TimeAndBtnBox>
              <p>timestamp</p>
              <ArrowBtn type='button' onClick={handleOpenMore}>
                {openMore ? (
                  <ArrowUp
                    style={{
                      width: "12px",
                      height: "12px",
                      fill: "var(--text-white)",
                    }}
                  />
                ) : (
                  <ArrowRight
                    style={{
                      width: "12px",
                      height: "12px",
                      fill: "var(--text-white)",
                    }}
                  />
                )}
              </ArrowBtn>
            </TimeAndBtnBox>
          </MainMessageText>

          <Text $opened={openMore}>
            Dear partner,
            {openMore ? <br /> : ""} You have received a new order
            <OrderNo>No.332255</OrderNo> on AdBasaar.
            {openMore ? <br /> : ""} Please check this and confirm in your
            account.
          </Text>
        </MainMessageBox>
      </MainInfoBox>
      {openMore && (<>
              <DetailsBox>
                  <NotificationBookInfo/>
                  <NotificationCustomerInfo />
              </DetailsBox>
              <NotificationsBtnsGroup/>
      </>)}
    </Container>
  );
}

// const bothCommentAndOrder = {
//     order/commentTime: ,
//     bookId: ,
//     BookImage: ,
//     BookTitle: ,
//     BookAuthor: ,
//     BookRating: ,
//     BookReviewsAmount: ,
//     BookPrice: ,
//     BookActive: ,
//     ButtonDelete?: ,
//     person(Order/ Comment)Name: ,
//     person(Order / Comment)Avatar: ,
//     person(Order / Comment)Phone: ,
//     person(Order / Comment)Email: ,
// }

// const comment = {
//   commentText: ,
// };

// const order = {
//     orderNumber: , // он же и будет айдишник?
//     shipping: ,
//     payment: ,
//     promocode: ,
// };
