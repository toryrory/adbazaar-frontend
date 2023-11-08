import { createSlice, current } from '@reduxjs/toolkit';
import {
  authRegister,
  authLogin,
  authLogout,
  googleLogin,
  googleLogOut,
  verification,
  resendVerification,
  resetPassword,
  fetchCurrentUser,
  refreshAccessToken,
  addFavorites,
  deleteFavorites,
  addCart,
  deleteCart,
  updateUser,
  updateUserAvatar,
  deleteUserBook,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      name: null,
      email: null,
      avatar: null,
      phone: "",
      birthday: "00/00/0000",
      socials: [],
      isVerified: false,
      orders: [],
      favorites: [],
      comments: [],
      books: [],
    },
    token: null,
    refreshToken: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    type: null,
  },
  reducers: {
    changeBookCheckBox(state, action) {
      
       const book = state.user.books.find(
         (book) => book.id === action.payload //.id
       );
       book.checked = !book.checked;
     
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, handlePending)
      .addCase(authRegister.fulfilled, (state, action) => {
        state.user = { ...state.user, email: action.payload.email };
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
        state.type = "email";
      })
      .addCase(authRegister.rejected, handleRejected)
      .addCase(authLogin.pending, handlePending)
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          name: action.payload.full_name,
          email: action.payload.email,
        };
        state.token = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.type = "email";
      })
      .addCase(authLogin.rejected, handleRejected)
      .addCase(authLogout.pending, handlePending)
      .addCase(authLogout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
        state.type = null;
      })
      .addCase(authLogout.rejected, handleRejected)
      .addCase(googleLogin.pending, handlePending)
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.type = "google";
        state.user.isVerified = true;
        // state.token = action.payload.googleToken;
      })
      .addCase(googleLogin.rejected, handleRejected)
      .addCase(googleLogOut.pending, handlePending)
      .addCase(googleLogOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
        state.type = null;
      })
      .addCase(googleLogOut.rejected, handleRejected)
      .addCase(verification.pending, handlePending)
      .addCase(verification.fulfilled, (state) => {
        state.user.isVerified = true;
      })
      .addCase(verification.rejected, (state) => {
        state.user.isVerified = false;
      })
      .addCase(resendVerification.pending, handlePending)
      .addCase(resendVerification.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resendVerification.rejected, handleRejected)
      .addCase(resetPassword.rejected, handleRejected)
      .addCase(resetPassword.pending, handlePending)
      .addCase(resetPassword.fulfilled)
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        if (action.payload.books.length > 0) {
          action.payload.books = action.payload.books.map((book) => ({
            ...book,
            checked: false,
          }));
        }
        state.user = {
          ...state.user,
          id: action.payload.id,
          name: action.payload.full_name,
          email: action.payload.email,
          phone: action.payload.phone,
          birthday: action.payload.birt_date,
          //  socials: action.payload.socials,
          isVerified: action.payload.verified,
          orders: action.payload.orders,
          favorites: action.payload.favorites,
          comments: action.payload.comments,
          books: action.payload.books,
          avatar: action.payload.image_url,
        };
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.type = "email";
      })
      .addCase(refreshAccessToken.pending, handlePending)
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.token = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.type = "email";
      })
      .addCase(refreshAccessToken.rejected, handleRejected)
      .addCase(addFavorites.pending, handlePending)
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.favorites.push({ id: action.payload.book_id });
      })
      .addCase(addFavorites.rejected, handleRejected)
      .addCase(deleteFavorites.pending, handlePending)
      .addCase(deleteFavorites.fulfilled, (state, action) => {
        const index = state.user.favorites.findIndex(
          (book) => book.id === action.payload.book_id
        );
        state.user.favorites.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavorites.rejected, handleRejected)
      .addCase(addCart.pending, handlePending)
      .addCase(addCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.orders.push({ id: action.payload.book_id, quantity: 1 });
      })
      .addCase(addCart.rejected, handleRejected)
      .addCase(deleteCart.pending, handlePending)
      .addCase(deleteCart.fulfilled, (state, action) => {
        const index = state.user.orders.findIndex(
          (book) => book.id === action.payload.book_id
        );
        state.user.orders.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteCart.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.birthday = action.payload.birt_date;
        state.user.name = action.payload.full_name;
        state.user.phone = action.payload.phone;
        state.user.email = action.payload.email;
        state.user.socials = action.payload.socials;
        // state.user.avatar = action.payload.image_url;
      })
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUserAvatar.pending, handlePending)
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.avatar = action.payload.image_url;
      })
      .addCase(updateUserAvatar.rejected, handleRejected)
      .addCase(deleteUserBook.pending, handlePending)
      .addCase(deleteUserBook.fulfilled, (state, action) => {
        const index = state.user.books.findIndex(
          (book) => book.checked === true
        );
console.log(index);
        state.user.books.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUserBook.rejected, handleRejected);
  },
});
export const { changeBookCheckBox } = authSlice.actions;
export const authReducer = authSlice.reducer;
