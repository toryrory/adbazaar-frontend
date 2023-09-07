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
            type: book.type,
            genre: book.genre,
            language: book.language,
            publisher: book.publisher,
            photo: book.photo,
            description: book.description,
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
  },
});

export const { addFavorites, deleteFavorites } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
