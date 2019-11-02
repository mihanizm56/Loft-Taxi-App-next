import { fork, all } from "redux-saga/effects";
import {
	loginWatcherSaga,
	authWatcherSaga,
	logoutWatcherSaga,
} from "../modules/auth/sagas";
import { credentialsWatcherSaga } from "../modules/credentials/sagas";
import {
	putOrderWatcherSaga,
	cancelOrderWatcherSaga,
} from "../modules/orders/sagas";
import { closePlaceDialogWatcherSaga } from "../modules/places-dialog/sagas";

export function* rootSaga() {
	yield all([
		fork(loginWatcherSaga), // TODO login and auth to the one listener
		fork(authWatcherSaga),
		fork(logoutWatcherSaga),
		fork(credentialsWatcherSaga),
		fork(putOrderWatcherSaga), // TODO orders in one listener
		fork(cancelOrderWatcherSaga),
		fork(closePlaceDialogWatcherSaga),
	]);
}
