export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthType = (state) => state.auth.type;
export const selectIsVerified = (state) => state.auth.isVerified;

export const selectUserData = (state) => state.auth.user;

//account selectors
export const selectSettings = (state) => state.account.settings;
export const selectAvatarImg = (state) => state.account.settings.avatar;
export const selectFavorites = (state) => state.account.favorites;
export const selectUserComments = (state) => state.account.comments;
export const selectCart = (state) => state.account.cart;
export const selectNotifications = (state) => state.account.notifications;

//main selectors
export const selectShowStars = (state) => state.main.showStars;
export const selectSubscription = (state) => state.main.subscription;
export const selectTopBookSellers = (state) => state.main.bookSellers;
export const selectPopularAuthors = (state) => state.main.popularAuthors;

//books selectors
export const selectBooks = (state) => state.books;
