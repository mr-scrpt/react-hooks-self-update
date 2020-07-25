export const localStorageUse = (key: string): [String, Function] => {
  const value: string = localStorage.getItem(key) || "";
  const setValue = (value: string): void => {
    localStorage.setItem(key, value);
  };
  return [value, setValue];
};
