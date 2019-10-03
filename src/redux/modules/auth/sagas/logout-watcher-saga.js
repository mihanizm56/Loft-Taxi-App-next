import { take, fork } from "redux-saga/effects";
import { logoutAction } from "../actions";
import { logoutUserSaga } from "./logout-user-worker-saga";

export function* logoutWatcherSaga() {
	while (true) {
		yield take(logoutAction.toString());

		yield fork(logoutUserSaga);
	}
}
