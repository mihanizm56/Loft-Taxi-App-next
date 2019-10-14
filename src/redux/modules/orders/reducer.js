import { handleActions } from "redux-actions";
import {
	SET_ORDER_DATA,
	SET_ORDER_ERROR,
	REMOVE_ORDER_ERROR,
	SET_ORDER_LOADING_START,
	SET_ORDER_LOADING_STOP,
} from "./constants";

const initialState = {
	error: null,
	isLoading: false,
	order: {
		from: null,
		to: null,
		timeOutOrder: null,
		orderIsDone: false,
		orderId: null,
	},
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
	},
	initialState
);

export default ordersStorage;
