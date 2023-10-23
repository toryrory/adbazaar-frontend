import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { books } from '@/data/books';
import { Img32Girl } from '../../../public/png';

import { fetchBooks, fetchBookById, addComment } from './operations';

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
            rating: book.rate,
            genre: book.genre,
            quantity: book.quantity,
          };
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, handleRejected)
      .addCase(fetchBookById.pending, handlePending)
      .addCase(fetchBookById.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (book) => book.id === action.payload.id
        );
        state.items[index].language = action.payload.language;
        state.items[index].publisher = action.payload.publishing_house;
        state.items[index].description = action.payload.description;
        state.items[index].publicationDate = action.payload.creation_date;
        state.items[index].comments = action.payload.comments;
        state.items[index].rating = action.payload.rate;
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
      .addCase(fetchBookById.rejected, handleRejected)
      .addCase(addComment.pending, handlePending)
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addComment.rejected, handleRejected);
  },
});

// export const { addComment, updateRating } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
