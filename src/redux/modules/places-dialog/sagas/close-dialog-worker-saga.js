import { put } from "redux-saga/effects";
import { closePlaceDialog } from "../actions";
import { savePlaceDialogFlag } from "../../../../services/dialogs/flag-actions";

export function* closePlaceDialogSaga({ wasLocationDialogShown }) {
	console.log(
		"CHECK wasLocationDialogShown flag in closePlaceDialogSaga",
		wasLocationDialogShown
	);

	try {
		savePlaceDialogFlag({ flag: wasLocationDialogShown });

		yield put(closePlaceDialog());
	} catch (error) {
		console.log("error in closePlaceDialogSaga", error);
	}
}
