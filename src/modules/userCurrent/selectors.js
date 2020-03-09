import { createSelector } from "reselect";

export const getUserCurrentState = createSelector(
  state => state.userCurrentStore,
  userCurrentStore => userCurrentStore
);

export const getUserCurrent = createSelector(
  state => state.userCurrentStore.user,
  user => user
);

export const getUserCurrentIsLoggedIn = createSelector(
  state => state.userCurrentStore.isLoggedIn,
  user => user
);

export const getUserCurrentIsLoading = createSelector(
  state => state.userCurrentStore.loading,
  loading => loading
);

export const getUserCurrentIsError = createSelector(
  state => state.userCurrentStore.error,
  error => error
);
