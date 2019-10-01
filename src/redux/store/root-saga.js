import { fork, all } from "redux-saga/effects";
import { loginWatcherSaga, authWatcherSaga } from "../modules/auth/sagas";

export function* rootSaga() {
	yield all([fork(loginWatcherSaga), fork(authWatcherSaga)]);
}
