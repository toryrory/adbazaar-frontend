import {
  MainInfoBox,
  OrderNo,
  Text,
  MainMessageText,
  MainMessageBox,
  MainMessageTitle,
  ArrowBtn,
  TimeAndBtnBox,
  DetailsBox,
  NotifItem,
  Time,
} from "./NotificationItem.styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "@mui/material";
import {
  CheckboxEmpty,
  CheckboxChecked,
} from "../../../../../public/svg-authorization";
import { NewNotif } from "../../../../../public/svg-account";
import { ArrowRight, ArrowUp } from "../../../../../public/svg-book";
import NotificationBookInfo from "../NotificationBookInfo/NotificationBookInfo";
import NotificationCustomerInfo from "../NotificationCustomerInfo/NotificationCustomerInfo";
import NotificationCommentInfo from "../NotificationCommentInfo/NotificationCommentInfo";
import NotificationsBtnsGroup from "../NotificationsBtnsGroup/NotificationsBtnsGroup";
import { changeCheckBox } from "@/redux/account/accountSlice";

export default function NotificationItem({ id, time, data, checked, isRead }) {
  const [openMore, setOpenMore] = useState(false);
  const dispatch = useDispatch();

  const notificationType = Object.keys(data)[1];
  const notificationBook = Object.keys(data)[0];

  const handleOpenMore = () => {
    setOpenMore((prevState) => !prevState);
  };

  return (
    <NotifItem id={id}>
      <MainInfoBox $opened={openMore}>
        <Checkbox
          icon={<CheckboxEmpty style={{ width: "24px", height: "24px" }} />}
          checkedIcon={
            <CheckboxChecked style={{ width: "24px", height: "24px" }} />
          }
          sx={{ padding: 0 }}
          checked={checked}
          onClick={() => dispatch(changeCheckBox(id))}
        />

        <MainMessageBox>
          <MainMessageText>
            <MainMessageTitle>
              {!isRead && (
                <NewNotif
                  style={{
                    width: "9px",
                    height: "9px",
                    marginRight: "8px",
                  }}
                />
              )}
              {notificationType === "customer" && "New order"}
              {notificationType === "comment" && "New comment"}
            </MainMessageTitle>
            <TimeAndBtnBox>
              <Time>{time}</Time>
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

          {notificationType === "customer" && (
            <Text $opened={openMore} id='orderText'>
              Dear partner,
              {openMore ? <br /> : ""} You have received a new order
              <OrderNo> No. {id}</OrderNo> on
              {openMore ? <br /> : ""}AdBasaar.
              {openMore ? <br /> : ""} Please check this and confirm in your
              account.
            </Text>
          )}
          {notificationType === "comment" && (
            <Text $opened={openMore} id='commentText'>
              Dear partner,
              {openMore ? <br /> : ""} You have received a new comment. Please
              review and respond with an answer
            </Text>
          )}
        </MainMessageBox>
      </MainInfoBox>
      {openMore && (
        <>
          <DetailsBox>
            <NotificationBookInfo data={data[notificationBook]} />
            {notificationType === "customer" && (
              <NotificationCustomerInfo data={data[notificationType]} />
            )}
            {notificationType === "comment" && (
              <NotificationCommentInfo data={data[notificationType]} />
            )}
          </DetailsBox>
          <NotificationsBtnsGroup
            group={notificationType}
            bookId={data.book.id}
          />
        </>
      )}
    </NotifItem>
  );
}
