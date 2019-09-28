import { createAction } from "redux-actions";
import {
	LOGIN,
	LOGOUT,
	SET_LOGIN_ERROR,
	REMOVE_LOGIN_ERROR,
} from "./constants";

export const loginAction = createAction(LOGIN);
export const logoutAction = createAction(LOGOUT);
export const setLoginErrorAction = createAction(SET_LOGIN_ERROR);
export const removeLoginErrorAction = createAction(REMOVE_LOGIN_ERROR);
