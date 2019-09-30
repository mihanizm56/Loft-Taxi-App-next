import { createAction } from "redux-actions";
import {
	LOGIN,
	LOGOUT,
	SET_LOGIN_ERROR,
	REMOVE_LOGIN_ERROR,
	SIGN_IN,
	AUTH_IN,
	START_LOADING,
	STOP_LOADING,
} from "./constants";

export const loginAction = createAction(LOGIN);
export const logoutAction = createAction(LOGOUT);
export const setLoginErrorAction = createAction(SET_LOGIN_ERROR);
export const removeLoginErrorAction = createAction(REMOVE_LOGIN_ERROR);
export const signInAction = createAction(SIGN_IN);
export const authInAction = createAction(AUTH_IN);

export const startLoginLoadingAction = createAction(START_LOADING);
export const stopLoginLoadingAction = createAction(STOP_LOADING);
