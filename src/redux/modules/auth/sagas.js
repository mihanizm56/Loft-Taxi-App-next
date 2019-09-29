import { call, put } from "redux-saga/effects";
import { push } from "connected-next-router";
import { Cookies } from "react-cookie";
import { loginAction, setLoginErrorAction } from "./actions";
import { fetchLoginRequest } from "../../../services/api";
import { sleep } from "../../../utils";

const cookies = new Cookies();

export function* loginUserSaga(action) {
	try {
		const { username, password } = action.payload;
		yield sleep(2000);
		console.log("CHECK SAGA", action);
		try {
			// eslint-disable-next-line
			const { access_token, refresh_token, message, error } = yield call(
				fetchLoginRequest,
				{ username, password }
			);

			// eslint-disable-next-line
			if (access_token && refresh_token && message && !error) {
				console.log("result of the saga", {
					access_token,
					refresh_token,
					message,
					error,
				});

				cookies.set("access_token", access_token);
				cookies.set("refresh_token", refresh_token);

				console.log("access_token in cookies", cookies.get("access_token"));

				yield put(loginAction());

				yield put(push("/main"));
			} else {
				console.log("not valid response");
				yield put(setLoginErrorAction());
			}
		} catch (error) {
			console.log("error in loginUserSaga", error);
			// /// TODO обработка ошибок
		}
	} catch (error) {
		console.log("error in loginUserSaga", error);
		yield put(setLoginErrorAction());
	}
}
