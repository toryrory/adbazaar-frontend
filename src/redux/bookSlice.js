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
        const book = state[index];
        book.grades.push(action.payload.rating);
        const newRating =
          book.grades.reduce((acc, number) => acc + number, 0) /
          book.grades.length;
        book.rating = newRating;
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
