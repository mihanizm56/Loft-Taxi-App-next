import { take, fork } from "redux-saga/effects";
import { addNewOrder } from "../actions";
import { putOrderWorkerSaga } from "./put-order-worker-saga";

export function* putOrderWatcherSaga() {
	while (true) {
		const { payload } = yield take(addNewOrder.toString());

		yield fork(putOrderWorkerSaga, payload);
	}
}
