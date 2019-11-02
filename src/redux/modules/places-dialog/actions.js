import { createAction } from "redux-actions";
import {
	CLOSE_PLACE_DIALOG,
	OPEN_PLACE_DIALOG,
	CLOSE_PLACE_DIALOG_PUT,
} from "./constants";

export const closePlaceDialog = createAction(CLOSE_PLACE_DIALOG);
export const showPlaceDialog = createAction(OPEN_PLACE_DIALOG);

export const closePlaceDialogPut = createAction(CLOSE_PLACE_DIALOG_PUT);
