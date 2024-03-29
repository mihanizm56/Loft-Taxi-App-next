import { take, fork } from "redux-saga/effects";
import { signInAction } from "../actions";
import { loginUserSaga } from "./login-user-worker-saga";

export function* loginWatcherSaga() {
	while (true) {
		const { payload } = yield take(signInAction.toString());

		yield fork(loginUserSaga, payload);
	}
}
