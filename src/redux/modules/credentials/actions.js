import { createAction } from "redux-actions";
import {
	PUT_CREDENTIALS,
	REMOVE_CREDENTIALS,
	SET_ERROR_CREDENTIALS,
	REMOVE_ERROR_CREDENTIALS,
} from "./constants";

export const putCredentialsAction = createAction(PUT_CREDENTIALS);
export const removeCredentialsAction = createAction(REMOVE_CREDENTIALS);

export const setCredentialsErrorAction = createAction(SET_ERROR_CREDENTIALS);
export const removeCredentialsErrorAction = createAction(
	REMOVE_ERROR_CREDENTIALS
);
