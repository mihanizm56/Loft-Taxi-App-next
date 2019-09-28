import { handleActions } from "redux-actions";
import {
	PUT_CREDENTIALS,
	REMOVE_CREDENTIALS,
	SET_ERROR_CREDENTIALS,
	REMOVE_ERROR_CREDENTIALS,
} from "./constants";

const initialState = {
	cardUser: null,
	expDate: null,
	cvv: null,
	cardNumber: null,
	error: null,
};

const сredentialsStorage = handleActions(
	{
		[PUT_CREDENTIALS]: (state, action) => ({
			...state,
			cardUser: action.payload.cardUser,
			expDate: action.payload.expDate,
			cvv: action.payload.cvv,
			cardNumber: action.payload.cardNumber,
		}),

		[REMOVE_CREDENTIALS]: state => ({
			...state,
			cardUser: "",
			expDate: "",
			cvv: "",
			cardNumber: "",
		}),

		[SET_ERROR_CREDENTIALS]: (state, action) => ({
			...state,
			error: action.payload,
		}),

		[REMOVE_ERROR_CREDENTIALS]: state => ({
			...state,
			error: null,
		}),
	},
	initialState
);

export default сredentialsStorage;
