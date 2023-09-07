import { createSlice, nanoid } from '@reduxjs/toolkit';
import { books } from '@/data/books';

const booksSlice = createSlice({
  name: 'books',
  initialState: books,
  reducers: {
    addComment: {
      reducer(state, action) {
        const index = state.findIndex(
          (book) => book.id === action.payload.bookId
        );
        state[index].comments.push(action.payload.comment);
      },
      prepare(bookId, text, author, date) {
        return {
          payload: {
            bookId,
            comment: { id: nanoid(), text, author, date },
          },
        };
      },
    },
    updateRating: {
      reducer(state, action) {
        const index = state.findIndex(
          (book) => book.id === action.payload.bookId
        );
        if (state[index].rating === 0) {
          const newRating = state[index].rating + action.payload.rating;
          state[index].rating = newRating;
        } else {
          const newRating = (state[index].rating + action.payload.rating) / 2;
          state[index].rating = newRating;
        }
      },
      prepare(bookId, rating) {
        return {
          payload: {
            bookId,
            rating,
          },
        };
      },
    },
  },
});

export const { addComment, updateRating } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
