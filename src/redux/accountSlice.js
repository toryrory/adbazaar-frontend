import { createSlice } from "@reduxjs/toolkit";
import { TestAvatar } from "../../public/png";
import { nanoid } from "@reduxjs/toolkit";
import { notifications } from "@/data/notifications";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    settings: {
      avatar: null, //проверить подставив вместо null -> TestAvatar
    },
    favorites: [],
    cart: [],

    addBook: {
      title: "",
      author: "",
      language: "",
      format: "",
      genre: "",
      publisher: "",
      price: "",
      photos: [],
      description: "",
    },
    comments: [],
    notifications: notifications,
  },
  reducers: {
    addFavorites: {
      reducer(state, action) {
        if (state.favorites.find((book) => book.id === action.payload.id)) {
          return;
        }
        state.favorites.push(action.payload);
      },
      prepare(book) {
        return {
          payload: {
            id: book.id,
            name: book.name,
            author: book.author,
            price: book.price,
            rating: book.rating,
            comments: book.comments,
            photo: book.photo,
          },
        };
      },
    },
    deleteFavorites(state, action) {
      const index = state.favorites.findIndex(
        (book) => book.id === action.payload
      );
      state.favorites.splice(index, 1);
    },
    addComments: {
      reducer(state, action) {
        state.comments.push(action.payload);
      },
      prepare(commentText, date, book) {
        return {
          payload: {
            id: nanoid(),
            text: commentText,
            date: date,
            bookId: book.id,
            bookName: book.name,
            bookAuthor: book.author,
            bookPhoto: book.photo,
          },
        };
      },
    },
    addCart: {
      reducer(state, action) {
        const repeatBook = state.cart.find(
          (book) => book.id === action.payload.id
        );
        if (repeatBook) {
          repeatBook.count += 1;
          return;
        }
        state.cart.push(action.payload);
      },
      prepare(book) {
        return {
          payload: {
            id: book.id,
            name: book.name,
            author: book.author,
            price: book.price,
            count: 1,
            type: book.type,
            photo: book.photo,
          },
        };
      },
    },
    deleteCart(state, action) {
      const index = state.cart.findIndex((book) => book.id === action.payload);
      state.cart.splice(index, 1);
    },
    minusCountCart(state, action) {
      const repeatBook = state.cart.find((book) => book.id === action.payload);
      repeatBook.count -= 1;
    },
    changeCheckBox(state, action) {
      const notification = state.notifications.find(
        (notification) => notification.id === action.payload
      );
      notification.checked = !notification.checked;
    },
    markAsRead(state, action) {
      state.notifications = state.notifications.map((notif) => ({
        ...notif,
        isRead: notif.checked ? true : notif.isRead,
      }));
    },
    deleteNotification(state, action) { 
      state.notifications = state.notifications.filter(notif => notif.checked === false)
    }
  },
  
});
// сделать екстраредюсер на получение данных с формы

export const {
  addFavorites,
  deleteFavorites,
  addComments,
  addCart,
  deleteCart,
  minusCountCart,
  changeCheckBox,
  markAsRead,
  deleteNotification,
} = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
