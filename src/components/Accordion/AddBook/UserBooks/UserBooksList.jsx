import React from "react";
import UserBookItem from "./UserBookItem";
import { useSelector } from "react-redux";
import { selectUserId, selectUserBooks } from "@/redux/selectors";
import { BookList } from "./UserBooksList.styled";
import { LoadMore, Edit, Trash } from "../../../../../public/svg-account";
import {
  BtnAction,
  LoadMoreBtn,
  Text,
  ActionBtnsBox,
} from "./UserBooksList.styled";

export default function UserBooksList({ books }) {
  const sellerId = useSelector(selectUserId);
  const sellerBooks = useSelector(selectUserBooks); //sellerBooks.map

  return (
    <>
      <BookList>
        {books.map(
          (
            { id, name, rating, author, price, photo } // rating-> rate  name -> title photo -> image_path
          ) => (
            <UserBookItem
              key={id}
              title={name}
              rate={rating}
              author={author}
              price={price}
              photo={photo}
            />
          )
        )}
      </BookList>
      <LoadMoreBtn>
        <LoadMore style={{ width: "24px", height: "24px" }} />
        Load More
      </LoadMoreBtn>
      <Text>Select book to perform changes</Text>
      <ActionBtnsBox>
        <BtnAction>
          <Edit style={{ width: "24px", height: "24px" }} />
          Edit
        </BtnAction>
        <BtnAction>
          <Trash style={{ width: "24px", height: "24px" }} />
          Remove
        </BtnAction>
      </ActionBtnsBox>
    </>
  );
}
