import { handleActions } from "redux-actions";
import { SET_COORDS } from "./constants";

const initialState = {
	fromCoords: [],
	toCoords: [],
};

const addressesStorage = handleActions(
	{
		[SET_COORDS]: (state, action) => ({
			...state,
			fromCoords: action.payload.from,
			toCoords: action.payload.to,
		}),
	},
	initialState
);

export default addressesStorage;
