import { createSlice } from '@reduxjs/toolkit';
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
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    cartBooks: [],
  },
  reducers: {
    addCartUnauthorized: {
      reducer(state, action) {
        state.cartBooks.push(action.payload);
      },
      prepare(book) {
        return {
          payload: {
            id: book.id,
            title: book.name,
            rate: book.rating,
            author: book.author,
            price: book.price,
            quantity: 1,
            type: book.type,
            image_path: book.photo,
          },
        };
      },
    },
    deleteCartUnauthorized(state, action) {
      const index = state.cartBooks.findIndex(
        (book) => book.id === action.payload
      );
      state.cartBooks.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, handlePending)
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.items = action.payload.content.map((book) => {
          const randomRate = Math.floor(Math.random() * 6);
          const randomReviews = Math.floor(Math.random() * 101); 
          return {
            id: book.id,
            name: book.title,
            author: book.author,
            price: book.price.toFixed(2),
            type: book.format,
            language: 'en',
            photo: book.image_path,
            rating: randomRate,
            reviews: randomReviews,
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
        // state.items[index].rating = action.payload.rate;
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

export const { addCartUnauthorized, deleteCartUnauthorized } =
  booksSlice.actions;
export const booksReducer = booksSlice.reducer;
