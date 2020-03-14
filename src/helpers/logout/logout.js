import { localStorageUse } from "helpers/localStorageUse";

export const logout = dispatchLogout => {
  const [, setValue] = localStorageUse("token");
  setValue("");
  dispatchLogout();
};
