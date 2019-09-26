import { createAction } from "redux-actions";
import { ADD_LOCK_TIMER, SET_ORDER_DONE, RESET_ORDER_DONE } from "./constants";

export const addLockTimerAction = createAction(ADD_LOCK_TIMER);
export const setOrderDoneAction = createAction(SET_ORDER_DONE);
export const resetOrderDoneAction = createAction(RESET_ORDER_DONE);
