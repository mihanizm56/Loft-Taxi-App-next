import { handleActions } from "redux-actions";
import {
	PUT_CREDENTIALS,
	REMOVE_CREDENTIALS,
	SET_ERROR_CREDENTIALS,
	REMOVE_ERROR_CREDENTIALS,
	START_LOADING,
	STOP_LOADING,
} from "./constants";

const initialState = {
	card: {
		user: null,
		expDate: null,
		cvv: null,
		number: null,
	},
	error: null,
	isLoading: false,
};

const сredentialsStorage = handleActions(
	{
		[PUT_CREDENTIALS]: (state, action) => ({
			...state,
			card: { ...state.card, ...action.payload },
		}),

		[REMOVE_CREDENTIALS]: state => ({
			...state,
			card: { user: null, expDate: null, cvv: null, number: null },
		}),

		[SET_ERROR_CREDENTIALS]: (state, action) => ({
			...state,
			error: action.payload,
		}),

		[REMOVE_ERROR_CREDENTIALS]: state => ({
			...state,
			error: null,
		}),

		[START_LOADING]: state => ({
			...state,
			isLoading: true,
		}),

		[STOP_LOADING]: state => ({
			...state,
			isLoading: false,
		}),
	},
	initialState
);

export default сredentialsStorage;
