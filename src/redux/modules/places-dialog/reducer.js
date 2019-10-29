import { handleActions } from "redux-actions";
import { CLOSE_PLACE_DIALOG, OPEN_PLACE_DIALOG } from "./constants";

const initialState = {
	needToShow: true,
};

const placesDialogStatusStorage = handleActions(
	{
		[CLOSE_PLACE_DIALOG]: state => ({
			...state,
			needToShow: false,
		}),

		[OPEN_PLACE_DIALOG]: state => ({
			...state,
			needToShow: true,
		}),
	},
	initialState
);

export default placesDialogStatusStorage;
