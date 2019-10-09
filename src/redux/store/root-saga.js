import { fork, all } from "redux-saga/effects";
import {
	loginWatcherSaga,
	authWatcherSaga,
	logoutWatcherSaga,
} from "../modules/auth/sagas";
import { credentialsWatcherSaga } from "../modules/credentials/sagas";

export function* rootSaga() {
	yield all([
		fork(loginWatcherSaga),
		fork(authWatcherSaga),
		fork(logoutWatcherSaga),
		fork(credentialsWatcherSaga),
	]);
}
