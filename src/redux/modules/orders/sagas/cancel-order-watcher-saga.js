import { take, fork } from "redux-saga/effects";
import { cancelOrder } from "../actions";
import { cancelOrderWorkerSaga } from "./cancel-order-worker-saga";

export function* cancelOrderWatcherSaga() {
	while (true) {
		const { payload } = yield take(cancelOrder.toString());

		yield fork(cancelOrderWorkerSaga, payload);
	}
}
