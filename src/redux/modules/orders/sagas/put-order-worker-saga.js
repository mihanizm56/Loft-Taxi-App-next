import { put, call } from "redux-saga/effects";
import { stopSubmit } from "redux-form";
import { Cookies } from "react-cookie";
import {
	setOrderData,
	setOrderErrorAction,
	setOrderLoadingStart,
	setOrderLoadingStop,
} from "../actions";
import { refreshSaga } from "../../auth/sagas/refresh-saga";
import { setCoordsActions } from "../../addresses";
import { fetchAddNewOrder } from "../../../../services/api/requests";
import { INTERNAL_SERVER_ERROR, EXPIRED } from "../../../../constants";
import { sleep } from "../../../../utils";
import { translatorOrderFormErrors } from "../../../../services/translate/orders";

const cookies = new Cookies();

export function* putOrderWorkerSaga({ from, to }) {
	console.log("CHECK putOrderWorkerSaga SAGA", from, to);

	const token = cookies.get("access_token");

	yield put(setOrderLoadingStart());
	yield call(sleep, 1000); // wait for spinner

	try {
		const { error, order } = yield call(fetchAddNewOrder, { token, from, to });

		if (error) {
			console.log("get an error from request in putOrderWorkerSaga", error);

			if (error === EXPIRED) {
				console.log("token expired when add new order");
				console.log("START MAKE REFRESH SAGA");
				// TODO MAKE REFRESH TOKEN STRATEGY

				yield call(refreshSaga);

				// recursive call credentialsWorkerSaga
				yield call(putOrderWorkerSaga, {
					from,
					to,
				});
			} else {
				yield put(stopSubmit("order", translatorOrderFormErrors(error)));
				yield put(setOrderLoadingStop()); // stop loading animation
			}
		}

		if (!error && order) {
			yield put(setOrderData(order)); // set order data
			yield put(
				setCoordsActions({ from: order.from_coords, to: order.to_coords }) // set coords
			);
			yield put(setOrderLoadingStop()); // stop loading animation
		}
	} catch (error) {
		console.log("error in credentialsWorkerSaga", error);

		yield put(setOrderErrorAction(INTERNAL_SERVER_ERROR));
		yield put(setOrderLoadingStop()); // stop loading animation
	}
}
