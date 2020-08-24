import { createAction, Action } from "redux-actions";
import { action } from "typesafe-actions";
import * as actionsNames from "constant/actionNames";
import { TLogin, TUser } from "@md/userAuth";
import { TUserSerialized } from "./types";
import { TError } from "../types";
// AUTORIZATION

export const sendUserToAuthRequestAction = (login: TLogin) =>
  action(actionsNames.sendUserToAuthRequestActionName, login);

export const sendUserToAuthSuccessAction = (user: TUser) =>
  action(actionsNames.sendUserToAuthSuccessActionName, user);

export const sendUserToAuthErrorAction = (error: TError) =>
  action(actionsNames.sendUserToAuthErrorActionName, error);

export const setUserAction = (user: TUserSerialized) =>
  action(actionsNames.setUserActionName, user);
