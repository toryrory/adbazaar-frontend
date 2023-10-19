import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { books } from '@/data/books';
import { Img32Girl } from '../../../public/png';

import { fetchBooks, fetchBookById } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const booksSlice = createSlice({
  name: 'books',
  // initialState: books,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addComment: {
  //     reducer(state, action) {
  //       const index = state.findIndex(
  //         (book) => book.id === action.payload.bookId
  //       );
  //       state[index].comments.push(action.payload.comment);
  //     },
  //     prepare(bookId, text, author, date) {
  //       return {
  //         payload: {
  //           bookId,
  //           comment: { id: nanoid(), text, author, date },
  //         },
  //       };
  //     },
  //   },
  //   updateRating: {
  //     reducer(state, action) {
  //       const index = state.findIndex(
  //         (book) => book.id === action.payload.bookId
  //       );
  //       const book = state[index];
  //       book.grades.push(action.payload.rating);
  //       const newRating =
  //         book.grades.reduce((acc, number) => acc + number, 0) /
  //         book.grades.length;
  //       book.rating = newRating;
  //     },
  //     prepare(bookId, rating) {
  //       return {
  //         payload: {
  //           bookId,
  //           rating,
  //         },
  //       };
  //     },
  //   },
  // },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, handlePending)
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.items = action.payload.content.map((book) => {
          return {
            id: book.id,
            name: book.title,
            author: book.author,
            price: book.price.toFixed(2),
            type: book.format,
            language: 'en',
            photo: book.image_path,
            comments: [],
            grades: [],
            rating: book.rate,
            genre: book.genre,
          };
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, handleRejected)
      .addCase(fetchBookById.pending, handlePending)
      .addCase(fetchBookById.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.items.findIndex(
          (book) => book.id === action.payload.id
        );
        state.items[index].genre = action.payload.genre;
        state.items[index].language = action.payload.language;
        state.items[index].publisher = action.payload.publishing_house;
        state.items[index].description = action.payload.description;
        state.items[index].publicationDate = action.payload.creation_date;
        state.items[index].seller = {
          name: action.payload.seller.full_name,
          email: action.payload.seller.email,
          phone: action.payload.seller.phone,
          registrationDate: action.payload.seller.creation_date,
          likes: 10,
          dislikes: 0,
          sales: 10,
          location: 'Nice, France',
          avatar: Img32Girl,
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchBookById.rejected, handleRejected);
  },
});

// export const { addComment, updateRating } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
