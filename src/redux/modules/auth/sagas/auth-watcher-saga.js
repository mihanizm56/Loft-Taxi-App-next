import { take, fork } from "redux-saga/effects";
import { authInAction } from "../actions";
import { authUserSaga } from "./auth-user-worker-saga";

export function* authWatcherSaga() {
	while (true) {
		const { payload } = yield take(authInAction.toString());

		yield fork(authUserSaga, payload);
	}
}
