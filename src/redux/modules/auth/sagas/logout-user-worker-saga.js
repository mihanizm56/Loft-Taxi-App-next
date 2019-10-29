import { put } from "redux-saga/effects";
import { push } from "connected-next-router";
import { removeTokens, removePlaceDialogFlag } from "../../../../services";
import { deleteCoordsAction } from "../../addresses/actions";
import { resetOrderData } from "../../orders/actions";
import { removeCredentialsAction } from "../../credentials/actions";

export function* logoutUserSaga() {
	console.log("CHECK logoutUserSaga SAGA");

	yield removeTokens();
	yield removePlaceDialogFlag();
	yield put(deleteCoordsAction());
	yield put(resetOrderData());
	yield put(removeCredentialsAction());

	yield put(push("/login"));
}
