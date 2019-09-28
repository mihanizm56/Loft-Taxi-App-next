import { handleActions } from "redux-actions";
import {
	ADD_LOCK_TIMER,
	SET_ORDER_DONE,
	RESET_ORDER_DONE,
	SET_ORDER_ID,
	REMOVE_ORDER_ID,
	SET_ORDER_ERROR,
	REMOVE_ORDER_ERROR,
} from "./constants";

const initialState = {
	orderIsDone: false,
	timerToLock: null,
	orderId: null,
	error: null,
};

const ordersStorage = handleActions(
	{
		[ADD_LOCK_TIMER]: (state, action) => ({
			...state,
			timerToLock: action.payload,
		}),

		[SET_ORDER_DONE]: state => ({
			...state,
			orderIsDone: true,
		}),
		[RESET_ORDER_DONE]: state => ({
			...state,
			orderIsDone: false,
		}),

		[SET_ORDER_ID]: (state, action) => ({
			...state,
			orderId: action.payload,
		}),

		[REMOVE_ORDER_ID]: state => ({
			...state,
			orderId: null,
		}),

		[SET_ORDER_ERROR]: (state, action) => ({
			...state,
			error: action.payload,
		}),

		[REMOVE_ORDER_ERROR]: state => ({
			...state,
			error: null,
		}),
	},
	initialState
);

export default ordersStorage;
