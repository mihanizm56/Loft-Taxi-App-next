import { handleActions } from "redux-actions";
import {
	SET_COORDS,
	DELETE_COORDS,
	SET_ADDRESSES_ERROR,
	REMOVE_ADDRESSES_ERROR,
} from "./constants";

const initialState = {
	fromCoords: {},
	toCoords: {},
	error: null,
};

const addressesStorage = handleActions(
	{
		[SET_COORDS]: (state, action) => ({
			...state,
			fromCoords: action.payload.from,
			toCoords: action.payload.to,
		}),
		[DELETE_COORDS]: state => ({
			...state,
			fromCoords: [],
			toCoords: [],
		}),
		[SET_ADDRESSES_ERROR]: (state, action) => ({
			...state,
			error: action.payload,
		}),
		[REMOVE_ADDRESSES_ERROR]: state => ({
			...state,
			error: null,
		}),
	},
	initialState
);

export default addressesStorage;
