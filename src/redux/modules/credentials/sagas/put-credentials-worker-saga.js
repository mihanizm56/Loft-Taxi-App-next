// import { put } from "redux-saga/effects";
// import { push } from "connected-next-router";
// import { Cookies } from "react-cookie";
// import { sleep } from "../../../../utils";
// import {
// 	startCredentialsLoadingAction,
// 	stopCredentialsLoadingAction,
// } from "../actions";

// const cookies = new Cookies();

export function* credentialsWorkerSaga() {
	// export function* credentialsWorkerSaga({ cardName, expDate, cardNumber, cvv }) {
	// console.log(
	// 	"CHECK credentialsWorkerSaga SAGA",
	// 	cardName,
	// 	expDate,
	// 	cardNumber,
	// 	cvv
	// );
	// try {
	// 	yield put(startCredentialsLoadingAction()); // start loading animation
	// 	yield call(sleep, 1000); // wait for spinner
	// 	try {
	// 		// eslint-disable-next-line
	// 		const { message, error } = yield call(fetchUpdUserCreds, {
	// 			cardName,
	// 			expDate,
	// 			cardNumber,
	// 			cvv,
	// 			token,
	// 		});
	// 		// eslint-disable-next-line
	// 		if (access_token && refresh_token && message && !error) {
	// 			console.log("result of the fetchLoginRequest", {
	// 				access_token,
	// 				refresh_token,
	// 				message,
	// 				error,
	// 			});
	// 			cookies.set("access_token", access_token);
	// 			cookies.set("refresh_token", refresh_token);
	// 			console.log("access_token in cookies", cookies.get("access_token"));
	// 			yield put(loginAction());
	// 			yield put(push("/main"));
	// 			yield put(stopLoginLoadingAction());
	// 		} else {
	// 			console.log("error in response", error);
	// 			yield put(stopSubmit("login", translatorLoginFormErrors(error)));
	// 			yield put(setLoginErrorAction());
	// 			yield put(stopLoginLoadingAction()); // stop loading animation
	// 		}
	// 	} catch (error) {
	// 		console.log("error in loginUserSaga", error);
	// 		yield put(setLoginErrorAction());
	// 		yield put(
	// 			stopSubmit("login", translatorLoginFormErrors(INTERNAL_SERVER_ERROR))
	// 		);
	// 		yield put(stopLoginLoadingAction()); // stop loading animation
	// 	}
	// } catch (error) {
	// 	console.log("error in loginUserSaga", error);
	// 	yield put(setLoginErrorAction());
	// }
}
