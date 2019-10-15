import { createAction } from "redux-actions";
import {
	SET_ORDER_DATA,
	RESET_ORDER_DATA,
	SET_ORDER_ERROR,
	REMOVE_ORDER_ERROR,
	SET_ORDER_LOADING_START,
	SET_ORDER_LOADING_STOP,
	SET_CREDS_EMPTY,
	SET_CREDS_FULL,
	ADD_ORDER,
	CANCEL_ORDER,
} from "./constants";

export const setOrderData = createAction(SET_ORDER_DATA);
export const resetOrderData = createAction(RESET_ORDER_DATA);
export const setOrderErrorAction = createAction(SET_ORDER_ERROR);
export const removeOrderErrorAction = createAction(REMOVE_ORDER_ERROR);
export const setOrderLoadingStart = createAction(SET_ORDER_LOADING_START);
export const setOrderLoadingStop = createAction(SET_ORDER_LOADING_STOP);
export const setCredsEmpty = createAction(SET_CREDS_EMPTY);
export const setCredsFull = createAction(SET_CREDS_FULL);
export const addNewOrder = createAction(ADD_ORDER);
export const cancelOrder = createAction(CANCEL_ORDER);
