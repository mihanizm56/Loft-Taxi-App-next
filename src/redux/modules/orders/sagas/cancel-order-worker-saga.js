import { call, put } from "redux-saga/effects";
import { Cookies } from "react-cookie";
import {
	setOrderLoadingStart,
	setOrderErrorAction,
	setOrderLoadingStop,
	resetOrderData,
} from "../actions";
import { deleteCoordsAction } from "../../addresses";
import { refreshSaga } from "../../auth/sagas/refresh-saga";
import { fetchUpdOrder } from "../../../../services/api/requests";
import { sleep } from "../../../../utils";
import { INTERNAL_SERVER_ERROR, EXPIRED } from "../../../../constants";

const cookies = new Cookies();

export function* cancelOrderWorkerSaga(action) {
	const { orderId } = action;
	console.log("TEST cancelOrderWorkerSaga", orderId);

	const token = cookies.get("access_token");

	yield put(setOrderLoadingStart()); // start the loading
	yield call(sleep, 1000); // wait for spinner

	try {
		const { error } = yield call(fetchUpdOrder, { orderId, token });

		if (error) {
			console.log("get an error from request in cancelOrderWorkerSaga", error);

			if (error === EXPIRED) {
				console.log("token expired when cancel the order");
				console.log("START MAKE REFRESH SAGA");
				// TODO MAKE REFRESH TOKEN STRATEGY

				yield call(refreshSaga);

				// recursive call credentialsWorkerSaga
				yield call(cancelOrderWorkerSaga, { orderId });
			} else {
				yield put(setOrderErrorAction(error));
			}

			yield put(setOrderLoadingStop()); // stop loading animation
			// resetOrderCoords
			yield put(deleteCoordsAction());
		} else {
			// resetOrderData
			yield put(resetOrderData());
			// resetOrderCoords
			yield put(deleteCoordsAction());
		}
	} catch (error) {
		console.log("error in cancelOrderWorkerSaga", error);

		yield put(setOrderErrorAction(INTERNAL_SERVER_ERROR));
		yield put(setOrderLoadingStop()); // stop loading animation
	}
}
