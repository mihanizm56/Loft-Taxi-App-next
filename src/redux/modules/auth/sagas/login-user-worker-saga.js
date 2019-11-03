import { call, put } from "redux-saga/effects";
import { push } from "connected-next-router";
import { Cookies } from "react-cookie";
import { stopSubmit } from "redux-form";
import {
	loginAction,
	setLoginErrorAction,
	startLoginLoadingAction,
	stopLoginLoadingAction,
} from "../actions";
import { fetchLoginRequest } from "../../../../services/api";
import { saveTokens } from "../../../../services/tokens";
import { sleep } from "../../../../utils";
import { INTERNAL_SERVER_ERROR } from "../../../../constants";
import { translatorLoginFormErrors } from "../../../../utils/helpers/errors/translate-errors/auth";

const cookies = new Cookies();

export function* loginUserSaga({ username, password, i18n }) {
	console.log("CHECK SAGA", username, password);

	try {
		yield put(startLoginLoadingAction()); // start loading animation
		yield call(sleep, 1000); // wait for spinner

		try {
			// eslint-disable-next-line
			const { access_token, refresh_token, message, error } = yield call(
				fetchLoginRequest,
				{ username, password }
			);

			// eslint-disable-next-line
			if (access_token && refresh_token && message && !error) {
				console.log("result of the fetchLoginRequest", {
					access_token,
					refresh_token,
					message,
					error,
				});

				saveTokens({ access_token, refresh_token });

				console.log("access_token in cookies", cookies.get("access_token"));

				yield put(loginAction());

				yield put(push("/main"));

				yield put(stopLoginLoadingAction());
			} else {
				console.log("error in response", error);
				yield put(
					stopSubmit(
						"login",
						translatorLoginFormErrors({ errorFromBackend: error, i18n })
					)
				);
				yield put(setLoginErrorAction());

				yield put(stopLoginLoadingAction()); // stop loading animation
			}
		} catch (error) {
			console.log("error in loginUserSaga", error);
			yield put(setLoginErrorAction());
			yield put(
				stopSubmit(
					"login",
					translatorLoginFormErrors({
						errorFromBackend: INTERNAL_SERVER_ERROR,
						i18n,
					})
				)
			);
			yield put(stopLoginLoadingAction()); // stop loading animation
		}
	} catch (error) {
		console.log("error in loginUserSaga", error);
		yield put(setLoginErrorAction());
	}
}
