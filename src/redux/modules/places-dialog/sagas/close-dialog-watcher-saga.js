import { take, fork } from "redux-saga/effects";
import { closePlaceDialogPut } from "../actions";
import { closePlaceDialogSaga } from "./close-dialog-worker-saga";

export function* closePlaceDialogWatcherSaga() {
	while (true) {
		const { payload } = yield take(closePlaceDialogPut.toString());

		yield fork(closePlaceDialogSaga, payload);
	}
}
