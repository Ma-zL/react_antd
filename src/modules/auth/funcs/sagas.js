import { put, takeLatest, fork } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "./actionTypes";
import { message } from "antd";

function* callLogin() {
	try {
		console.log("call login");
	} catch (e) {
		console.log("call login fail");
		yield put(message.error(e.message));
	}
}

function* callLogout(obj) {
	try {
		console.log("call logout");
	} catch (e) {
		console.log("call logout fail");
		yield put(message.error(e.message));
	}
}

function* loginSaga() {
	yield takeLatest(LOGIN_REQUEST, callLogin);
}

function* logoutSaga() {
	yield takeLatest(LOGOUT_REQUEST, callLogout);
}
export default function* root() {
	yield [fork(loginSaga), fork(logoutSaga)];
}
