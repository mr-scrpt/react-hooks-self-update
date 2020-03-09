import { localStorageUse } from "helpers/localStorageUse";

export const logout = dispatchLoguot => {
  const [, setValue] = localStorageUse("token");
  setValue("");
  dispatchLoguot();
};
