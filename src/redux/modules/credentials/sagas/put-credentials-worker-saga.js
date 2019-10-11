import { put, call } from "redux-saga/effects";
import { stopSubmit } from "redux-form";
import { Cookies } from "react-cookie";
import {
	startCredentialsLoadingAction,
	stopCredentialsLoadingAction,
	setCredentialsErrorAction,
	removeCredentialsErrorAction,
	putCredentialsAction,
	removeCredentialsAction,
} from "../actions";
import { refreshSaga } from "../../auth/sagas";
import { fetchUpdUserCreds } from "../../../../services/api/requests";
import { INTERNAL_SERVER_ERROR, EXPIRED } from "../../../../constants";
import { sleep } from "../../../../utils";
import { translatorCredentialsFormErrors } from "../../../../services/translate/credentials";

const cookies = new Cookies();

export function* credentialsWorkerSaga({ cardName, expDate, cardNumber, cvv }) {
	console.log(
		"CHECK credentialsWorkerSaga SAGA",
		cardName,
		expDate,
		cardNumber,
		cvv
	);

	const token = cookies.get("access_token");

	try {
		yield put(removeCredentialsErrorAction()); // remove the previous error

		yield put(startCredentialsLoadingAction()); // start loading animation

		yield call(sleep, 1000); // wait for spinner

		try {
			// eslint-disable-next-line
			const { message, error } = yield call(fetchUpdUserCreds, {
				cardName,
				expDate,
				cardNumber,
				cvv,
				token,
			});
			// eslint-disable-next-line
			console.log("result of the fetchLoginRequest", {
				message,
				error,
			});

			if (message && !error) {
				console.log("CORRECT REQUEST, PUT CREDS IN STORE");

				yield put(putCredentialsAction({ cardName, expDate, cardNumber, cvv }));

				yield put(stopCredentialsLoadingAction()); // stop loading animation
				return;
			}
			if (message === "failed" && error === EXPIRED) {
				console.log("token expired when saving credentials");
				console.log("START MAKE REFRESH SAGA");
				// TODO MAKE REFRESH TOKEN STRATEGY

				yield call(refreshSaga);

				// recursive call credentialsWorkerSaga
				yield call(credentialsWorkerSaga, {
					cardName,
					expDate,
					cardNumber,
					cvv,
				});
			} else {
				console.log("error in response", error);
				yield put(removeCredentialsAction());

				yield put(setCredentialsErrorAction(error));

				yield put(
					stopSubmit("credentials", translatorCredentialsFormErrors(error))
				);

				yield put(stopCredentialsLoadingAction()); // stop loading animation
			}
		} catch (error) {
			console.log("error in credentialsWorkerSaga", error);
			yield put(setCredentialsErrorAction(error));

			yield put(
				stopSubmit(
					"credentials",
					translatorCredentialsFormErrors(INTERNAL_SERVER_ERROR)
				)
			);

			yield put(stopCredentialsLoadingAction()); // stop loading animation
		}
	} catch (error) {
		console.log("error in credentialsWorkerSaga", error);
		yield put(
			stopSubmit(
				"credentials",
				translatorCredentialsFormErrors(INTERNAL_SERVER_ERROR)
			)
		);
		yield put(setCredentialsErrorAction(error));
		yield put(stopCredentialsLoadingAction()); // stop loading animation
	}
}
