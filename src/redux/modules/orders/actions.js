import { createAction } from "redux-actions";
import {
	ADD_LOCK_TIMER,
	SET_ORDER_DONE,
	RESET_ORDER_DONE,
	SET_ORDER_ID,
	REMOVE_ORDER_ID,
	SET_ORDER_ERROR,
	REMOVE_ORDER_ERROR,
} from "./constants";

export const addLockTimerAction = createAction(ADD_LOCK_TIMER);
export const setOrderDoneAction = createAction(SET_ORDER_DONE);
export const resetOrderDoneAction = createAction(RESET_ORDER_DONE);
export const setOrderIdAction = createAction(SET_ORDER_ID);
export const removeOrderIdAction = createAction(REMOVE_ORDER_ID);
export const setOrderErrorAction = createAction(SET_ORDER_ERROR);
export const removeOrderErrorAction = createAction(REMOVE_ORDER_ERROR);
