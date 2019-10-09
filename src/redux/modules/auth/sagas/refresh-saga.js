import { call, put } from "redux-saga/effects";
import { Cookies } from "react-cookie";
import { loginFailedAction } from "./actions";
import {
	// fetchLoginRequest,
	// fetchAuthRequest,
	// deleteUser,
	// deleteTokens,
	// saveUser,
	// saveTokens,
	fetchRefreshTokenRequest,
} from "../../../../services/api/requests";

const cookies = new Cookies();

export function* refreshSaga() {
	const refreshToken = cookies.get("access_token");
	console.log("refreshSaga goes");

	if (refreshToken) {
		try {
			const resultOfRequest = yield call(fetchRefreshTokenRequest, {
				token: refreshToken,
			});
			const { access_token, refresh_token, error } = resultOfRequest; // eslint-disable-line

			// eslint-disable-next-line
			if (access_token && refresh_token && !error) {
				console.log("tokens saved && refreshed");
				// yield saveTokens(access_token, refresh_token, expiresIn);

				cookies.set("access_token", access_token);
				cookies.set("refresh_token", refresh_token);
			}
			// else if (error === "token not valid") {
			// 	console.log("error token not valid");
			// 	yield call(logoutSaga);
			// 	yield put(loginFailedAction());
			// } else if (error === "internal server error") {
			// 	console.log("error internal server error");
			// 	yield call(logoutSaga);
			// 	yield put(loginFailedAction());
			// } else if (error === "token was used") {
			// 	console.log("error internal server error");
			// 	yield call(logoutSaga);
			// 	yield put(loginFailedAction());
			// }
		} catch (error) {
			yield put(loginFailedAction());
		}
	} else {
		console.log("no refresh_token in localStorage");
	}
}
