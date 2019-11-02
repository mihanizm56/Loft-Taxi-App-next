import { put, call } from "redux-saga/effects";
import { Cookies } from "react-cookie";
import { fetchRefreshTokenRequest } from "../../../../services/api/requests";
import { saveTokens } from "../../../../services/tokens";
import { logoutAction } from "../actions";

const cookies = new Cookies();

export function* refreshSaga() {
	const refreshToken = cookies.get("refresh_token");
	console.log("refreshSaga goes");

	if (refreshToken) {
		const resultOfRequest = yield call(fetchRefreshTokenRequest, {
			token: refreshToken,
		});
		const { access_token, refresh_token, error } = resultOfRequest; // eslint-disable-line

		// eslint-disable-next-line
		if (access_token && refresh_token && !error) {
			console.log("tokens saved && refreshed");
			yield saveTokens({ access_token, refresh_token });
		} else if (error) {
			console.log("error in fetchRefreshTokenRequest", error);

			yield put(logoutAction());
		}
	} else {
		console.log("no refresh_token in cookies");
		yield put(logoutAction());
	}
}
