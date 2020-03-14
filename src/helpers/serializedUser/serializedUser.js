export const serializedUser = user => {
  const { token, ...serializedUser } = user;
  return serializedUser;
};
