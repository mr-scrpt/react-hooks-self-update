export const serializedUser = (user: any) => {
  //TODO добавить тип юзера
  const { token: string, ...serializedUser } = user;
  return serializedUser;
};
