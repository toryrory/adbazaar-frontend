import { createSlice } from '@reduxjs/toolkit';
import { TestAvatar } from '../../public/png';
import { nanoid } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    settings: {
      avatar: null, //проверить подставив вместо null -> TestAvatar
    },
    favorites: [],

    addBook: {
      title: '',
      author: '',
      language: '',
      format: '',
      genre: '',
      publisher: '',
      price: '',
      photos: [],
      description: '',
    },
    comments: [],
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
  },
});
// сделать екстраредюсер на получение данных с формы

export const { addFavorites, deleteFavorites, addComments } =
  accountSlice.actions;
export const accountReducer = accountSlice.reducer;
