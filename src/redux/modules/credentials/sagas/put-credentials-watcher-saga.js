import { take, fork } from "redux-saga/effects";
import { putCredentialsAction } from "../actions";
import { credentialsWorkerSaga } from "./auth-user-worker-saga";

export function* credentialsWatcherSaga() {
	while (true) {
		const { payload } = yield take(putCredentialsAction.toString());

		yield fork(credentialsWorkerSaga, payload);
	}
}
