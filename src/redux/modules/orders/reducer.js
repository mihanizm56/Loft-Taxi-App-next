import { handleActions } from "redux-actions";
import {
	SET_ORDER_DATA,
	SET_ORDER_ERROR,
	REMOVE_ORDER_ERROR,
	SET_ORDER_LOADING_START,
	SET_ORDER_LOADING_STOP,
	SET_CREDS_EMPTY,
	SET_CREDS_FULL,
	RESET_ORDER_DATA,
} from "./constants";

const defaultOrderValue = {
	from_coords: null,
	to_coords: null,
	from_text: null,
	to_text: null,
	exp_time: null,
	is_done: true,
	order_id: null,
};

const initialState = {
	error: null,
	isLoading: false,
	areCredsEmpty: false,
	order: defaultOrderValue,
};

const ordersStorage = handleActions(
	{
		[SET_ORDER_DATA]: (state, action) => ({
			...state,
			order: { ...state.order, ...action.payload },
		}),

		[SET_ORDER_ERROR]: (state, action) => ({
			...state,
			error: action.payload,
		}),

		[REMOVE_ORDER_ERROR]: state => ({
			...state,
			error: null,
		}),

		[SET_ORDER_LOADING_START]: state => ({
			...state,
			isLoading: true,
		}),

		[SET_ORDER_LOADING_STOP]: state => ({
			...state,
			isLoading: false,
		}),

		[SET_CREDS_EMPTY]: state => ({
			...state,
			areCredsEmpty: true,
		}),

		[SET_CREDS_FULL]: state => ({
			...state,
			areCredsEmpty: false,
		}),

		[RESET_ORDER_DATA]: state => ({
			...state,
			order: { ...state.order, ...defaultOrderValue },
		}),
	},
	initialState
);

export default ordersStorage;
