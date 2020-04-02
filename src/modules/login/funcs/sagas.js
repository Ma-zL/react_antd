import { put, takeEvery, call, fork } from "redux-saga/effects";
import * as constants from "./constants";
import { message } from "antd";
import * as apis from "../../../apis/login";

function* callLogin() {
  try {
    const result = yield call(apis.login);
    if (result && result.status) {
      if (result.status.code === "00000000") {
        console.log("result: _______", result);
        yield put(message.success("call login success"));
      } else {
        yield put(message.warn(result.status.message));
      }
    } else {
      yield put(message.error("call login fail"));
    }
  } catch (e) {
    yield put(message.error("call login fail"));
  }
}

function* loginSaga() {
  yield takeEvery(constants.LOGIN_REQUEST, callLogin);
}

export default function* root() {
  yield [fork(loginSaga)];
}
