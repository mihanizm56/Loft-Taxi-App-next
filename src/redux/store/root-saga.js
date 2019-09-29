import { takeEvery } from "redux-saga/effects";
import { SIGN_IN, loginUserSaga } from "../modules/auth";

export function* rootSaga() {
	yield takeEvery(SIGN_IN, loginUserSaga);
}
