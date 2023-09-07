export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthType = (state) => state.auth.type;
export const selectIsVerified = (state) => state.auth.isVerified;

export const selectUserData = (state) => state.auth.user;

//account selectors
export const selectSettings = state => state.account.settings
export const selectAvatarImg = state => state.account.settings.avatar

//main selectors 
export const selectShowStars = state => state.main.showStars
export const selectSubscription = state => state.main.subscription