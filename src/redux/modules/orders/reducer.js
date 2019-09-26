import { handleActions } from "redux-actions";
import { ADD_LOCK_TIMER, SET_ORDER_DONE, RESET_ORDER_DONE } from "./constants";

const initialState = {
	orderIsDone: false,
	timerToLock: null,
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
	},
	initialState
);

export default ordersStorage;
