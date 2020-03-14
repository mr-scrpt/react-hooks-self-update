import { createSelector } from "reselect";

export const getUserAuth = createSelector(
  state => state.userAuthStore.user,
  user => user
);

export const getIsLoggedIn = createSelector(
  state => state.userAuthStore.isLoggedIn,
  user => user
);

export const getIsLoading = createSelector(
  state => state.userAuthStore.loading,
  loading => loading
);

export const getIsError = createSelector(
  state => state.userAuthStore.error.message,
  error => error
);
