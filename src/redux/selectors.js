// import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserId = (state) => state.auth.user.id;
export const selectUserAvatar = (state) => state.auth.user.avatar;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthType = (state) => state.auth.type;
export const selectIsVerified = (state) => state.auth.user.isVerified;
export const selectToken = (state) => state.auth.token;
export const selectRefreshToken = (state) => state.auth.refreshToken;


export const selectUserData = (state) => state.auth.user;
export const selectUserComments = (state) => state.auth.user.comments;
export const selectFavorites = (state) => state.auth.user.favorites;
export const selectCart = (state) => state.auth.user.orders;

//account selectors
export const selectSettings = (state) => state.account.settings;
export const selectAvatarImg = (state) => state.account.settings.avatar;
export const selectNotifications = (state) => state.account.notifications;

//main selectors
export const selectShowStars = (state) => state.main.showStars;
export const selectSubscription = (state) => state.main.subscription;
export const selectTopBookSellers = (state) => state.main.bookSellers;
export const selectPopularAuthors = (state) => state.main.popularAuthors;

//books selectors
export const selectBooks = (state) => state.books.items;
export const selectIsBookLoading = (state) => state.books.isLoading;
export const selectCartBooksUnauthorized = (state) => state.books.cartBooks;
