import { put } from "redux-saga/effects";
import { push } from "connected-next-router";
import { removeTokens } from "../../../../services/tokens";

export function* logoutUserSaga() {
	console.log("CHECK logoutUserSaga SAGA");

	yield removeTokens();

	yield put(push("/login"));
}
