import { createAction } from "redux-actions";
import {
	PUT_CREDENTIALS,
	REMOVE_CREDENTIALS,
	SET_ERROR_CREDENTIALS,
	REMOVE_ERROR_CREDENTIALS,
	SAVE_CREDENTIALS,
	START_LOADING,
	STOP_LOADING,
} from "./constants";

export const putCredentialsAction = createAction(PUT_CREDENTIALS);
export const saveCredentialsAction = createAction(SAVE_CREDENTIALS);
export const removeCredentialsAction = createAction(REMOVE_CREDENTIALS);

export const setCredentialsErrorAction = createAction(SET_ERROR_CREDENTIALS);
export const removeCredentialsErrorAction = createAction(
	REMOVE_ERROR_CREDENTIALS
);

export const startCredentialsLoading = createAction(START_LOADING);
export const stopCredentialsLoading = createAction(STOP_LOADING);
