import { put } from "redux-saga/effects";
import { push } from "connected-next-router";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export function* logoutUserSaga() {
	console.log("CHECK logoutUserSaga SAGA");

	cookies.remove("access_token");
	cookies.remove("refresh_token");

	yield put(push("/login"));
}
