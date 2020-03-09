import { useState } from "react";

export const localStorageUse = (key, initialValue = "") => {
  const value = localStorage.getItem(key) || "";
  const setValue = value => {
    localStorage.setItem(key, value);
  };
  /* const [value, setValue] = useState(() => localStorage.getItem(key) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])*/
  return [value, setValue];
};
