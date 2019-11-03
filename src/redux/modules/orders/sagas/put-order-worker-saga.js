import { put, call } from "redux-saga/effects";
import { stopSubmit } from "redux-form";
import { Cookies } from "react-cookie";
import {
	setOrderData,
	setOrderErrorAction,
	setOrderLoadingStart,
	setOrderLoadingStop,
} from "../actions";
import { refreshSaga } from "../../auth/sagas";
import { setCoordsAction } from "../../addresses";
import { fetchAddNewOrder } from "../../../../services/api/requests";
import { INTERNAL_SERVER_ERROR, EXPIRED } from "../../../../constants";
import { sleep } from "../../../../utils";
import { translatorOrderFormErrors } from "../../../../utils/helpers/errors/translate-errors/orders";

const cookies = new Cookies();

export function* putOrderWorkerSaga({ from, to, i18n }) {
	console.log("CHECK putOrderWorkerSaga SAGA", from, to);

	yield put(setOrderLoadingStart());
	yield call(sleep, 1000); // wait for spinner

	const token = cookies.get("access_token");
	const timestamp = new Date();

	try {
		// TODO refactor mapping of the order data
		const { error, order } = yield call(fetchAddNewOrder, {
			token,
			from,
			to,
			timestamp,
		});
		console.log("get API response in fetchAddNewOrder", { error, order });

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
				yield put(
					stopSubmit(
						"orders",
						translatorOrderFormErrors({ errorFromBackend: error, i18n })
					)
				);
			}
		} else if (order) {
			// set coords
			yield put(
				setCoordsAction({ from: order.from_coords, to: order.to_coords })
			);
			// set order data
			yield put(setOrderData(order));
		}

		yield put(setOrderLoadingStop()); // stop loading animation
	} catch (error) {
		console.log("error in credentialsWorkerSaga", error);

		yield put(setOrderErrorAction(INTERNAL_SERVER_ERROR));
		yield put(setOrderLoadingStop()); // stop loading animation
	}
}
