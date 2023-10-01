import {
  Reply,
  Valide,
  CancelTrash,
  ChatChecked,
  DeleteChecked,
} from "../../../../../public/svg-account";
import { BtnsGroup, BtnBox, StyledLink } from "./NotificationsBtnsGroup.styled";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { markAsRead, deleteNotification } from "@/redux/accountSlice";


export default function NotificationsBtnsGroup({ group, bookId }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    switch (e.currentTarget.name) {
      case "cancel-order":
        toast.info("Order was canceled");
        break;
      case "delete-comment":
        toast.info("Comment was deleted");
        break;

      default:
        break;
    }
    
  };

  return (
    <BtnsGroup>
      <div>
        {group === "section-btns" && (
          <BtnBox
            $group={group}
            type='button'
            name='mark-as-read'
            onClick={() => dispatch(markAsRead())}
          >
            <ChatChecked style={{ width: "24px", height: "24px" }} />
            <p>Mark as read</p>
          </BtnBox>
        )}
        {group === "customer" && (
          <BtnBox $group={group} type='button' name={group}>
            <Valide style={{ width: "24px", height: "24px" }} />
            <p>Valide purchase</p>
          </BtnBox>
        )}
        {group === "comment" && (
          <StyledLink href={`/books/${bookId}`}>
            <Reply style={{ width: "24px", height: "24px" }} />
            <p>Reply</p>
          </StyledLink>
        )}
      </div>
      <div>
        {group === "section-btns" && (
          <BtnBox
            $group={group}
            type='button'
            name='delete-notif'
            onClick={() => dispatch(deleteNotification())}
          >
            <DeleteChecked style={{ width: "24px", height: "24px" }} />
            <p>Delete</p>
          </BtnBox>
        )}
        {group === "customer" && (
          <BtnBox
            $group={group}
            type='button'
            name='cancel-order'
            onClick={handleClick}
          >
            <CancelTrash style={{ width: "24px", height: "24px" }} />
            <p>Cancel the order</p>
          </BtnBox>
        )}
        {group === "comment" && (
          <BtnBox
            $group={group}
            type='button'
            name='delete-comment'
            onClick={handleClick}
          >
            <CancelTrash style={{ width: "24px", height: "24px" }} />
            <p>Delete</p>
          </BtnBox>
        )}
      </div>
    </BtnsGroup>
  );
}
