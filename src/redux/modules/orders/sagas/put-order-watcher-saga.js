// import { take, fork } from "redux-saga/effects";
// import { saveCredentialsAction } from "../actions";
// import { credentialsWorkerSaga } from "./put-order-worker-saga";

// export function* credentialsWatcherSaga() {
// 	while (true) {
// 		const { payload } = yield take(saveCredentialsAction.toString());

// 		yield fork(credentialsWorkerSaga, payload);
// 	}
// }
