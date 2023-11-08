import React from "react";
import UserBookItem from "./UserBookItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, selectUserBooks } from "@/redux/selectors";
import { BookList } from "./UserBooksList.styled";
import { LoadMore, Edit, Trash } from "../../../../../public/svg-account";
import { deleteUserBook, fetchCurrentUser } from "@/redux/auth/operations";
import {
  BtnAction,
  LoadMoreBtn,
  Text,
  ActionBtnsBox,
} from "./UserBooksList.styled";

export default function UserBooksList({ books }) {
  const dispatch = useDispatch();
  // const sellerId = useSelector(selectUserId);
  // const sellerBooks = useSelector(selectUserBooks); //sellerBooks.map

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch])
  
  const removeBook = () => { //can delete only one book
    const bookToDelete = books.find(book => book.checked === true);
    console.log(bookToDelete.id);
    if (bookToDelete) {
    dispatch(deleteUserBook(bookToDelete.id));
  }
  }
  return (
    <>
      <BookList>
        {books.map(
          (
            { id, title, rate, author, price, image_path, checked } // rating-> rate  name -> title photo -> image_path
          ) => (
            <UserBookItem
              key={id}
              title={title}
              rate={rate}
              author={author}
              price={price}
              photo={image_path}
              checked={checked}
              id={id}
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
        <BtnAction type='button'>
          <Edit style={{ width: "24px", height: "24px" }} />
          Edit
        </BtnAction>
        <BtnAction type="button" onClick={() => removeBook()}>
          <Trash style={{ width: "24px", height: "24px" }} />
          Remove
        </BtnAction>
      </ActionBtnsBox>
    </>
  );
}
