import { takeLatest, fork, call, put } from "redux-saga/effects";

import * as actionNames from "constant/actionNames";
import {
  sendUserToAuthRequestAction,
  sendUserToAuthSuccessAction,
  sendUserToAuthErrorAction,
  setUserAction,
} from "@md/userAuth";
import { sendUserToAuthAPI } from "./api";
import { TUserSerialized, TUser } from "@md/userAuth";
import { serializedUser } from "helpers/serializedUser";
import { localStorageUse } from "helpers/localStorageUse";
import userAuth from "./userAuth";
const [, setToken] = localStorageUse("token");
function* fetchWatcher() {
  yield takeLatest(
    actionNames.sendUserToAuthRequestActionName,
    sendUserToAuthSaga
  );
  yield takeLatest(
    actionNames.sendUserToAuthSuccessActionName,
    userAuthSuccess
  );

  //yield takeLatest(sendUserToRegistrationRequest, setUserRegistrationAPI);
  //yield takeLatest(actionNames.setAuthUserRequest, setUserAuth);
  // yield takeLatest(fetchAuthUserRequest, fetchUserAuthAPI);
  // yield takeLatest(putAuthUserRequest, putUserAuthAPI);
}

export function* sendUserToAuthSaga(
  action: ReturnType<typeof sendUserToAuthRequestAction>
) {
  try {
    const userResponse = yield call(sendUserToAuthAPI, action.payload);
    yield put(sendUserToAuthSuccessAction(userResponse));
  } catch (error) {
    yield put(sendUserToAuthErrorAction(error));
  }
}

export function* userAuthSuccess(
  action: ReturnType<typeof sendUserToAuthSuccessAction>
) {
  const [userSerialized, token]: [TUserSerialized, string] = serializedUser(
    action.payload
  );
  console.log("-> userSer", userSerialized);
  yield put(setUserAction(userSerialized));
  yield put(setToken(token));
}

/* export function* setUserSaga(action: ReturnType<typeof setUserAction>) {
  try {
    const [userSerialized, token]: [TUserSerialized, string] = serializedUser(
      action.payload
    );
    yield put(setUserAction(userSerialized));
    setToken(token);
  
}
 */
/* export function* setUserAuth(action: ReturnType<typeof setAuthUserRequest>) {
  try {
    const [userSerialized, token]: [TUserSerialized, string] = serializedUser(
      action.payload
    );
    setToken(token);
    yield put(setAuthUserSuccess(userSerialized));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
}
 */
/* export function* setUserRegistrationAPI(
  action: ReturnType<typeof sendUserToRegistration>
) {
  try {
    const userResponse = yield call(sendUserToRegistration, action.payload);

    setToken(userResponse.token);
    yield put(fetchAuthUserSuccess(serializedUser(userResponse)));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
} */

/* export function* fetchUserAuthAPI() {
  try {
    const userResponse = yield call(getUserAuth);
    yield put(fetchAuthUserSuccess(userResponse));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
} */

/* export function* putUserAuthAPI({ payload }: { payload: object }) {
  try {
    const userResponse = yield call(putUserAuth, payload);
    yield put(fetchAuthUserSuccess(userResponse));
  } catch (error) {
    yield put(setAuthUserError(error));
  }
} */

export default function* () {
  yield fork(fetchWatcher);
}
