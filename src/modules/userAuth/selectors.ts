import { createSelector } from "reselect";
import { TAppState } from "..";

export const getUserAuth = createSelector(
  (state: TAppState) => state.userAuthStore.user,
  (user) => user
);

export const getIsLoggedIn = createSelector(
  (state: TAppState) => state.userAuthStore.isLoggedIn,
  (user) => user
);

export const getIsLoading = createSelector(
  (state: TAppState) => state.userAuthStore.loading,
  (loading) => loading
);

export const getIsError = createSelector(
  (state: TAppState) => state.userAuthStore.error,
  (error) => error
);
/* export const getIsInitial = createSelector(
  (state: TAppState) => state.userAuthStore.initial,
  (initial) => initial
);
 */
