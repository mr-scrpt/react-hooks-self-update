import { TUser, TUserSerialized } from "@md/userAuth";

export const serializedUser = (user: TUser): [TUserSerialized, string] => {
  //TODO добавить тип юзера
  const { token, ...serializedUser } = user;
  return [serializedUser, token];
};
