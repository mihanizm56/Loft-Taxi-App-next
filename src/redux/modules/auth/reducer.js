import { handleActions } from "redux-actions";
import {
	LOGIN,
	LOGOUT,
	SET_LOGIN_ERROR,
	REMOVE_LOGIN_ERROR,
	START_LOADING,
	STOP_LOADING,
} from "./constants";

const initialState = {
	isLogined: false,
	error: null,
	isLoading: false,
};

const loginStorage = handleActions(
	{
		[LOGIN]: state => ({
			...state,
			isLogined: true,
		}),

		[LOGOUT]: state => ({
			...state,
			isLogined: false,
		}),

		[SET_LOGIN_ERROR]: state => ({
			...state,
			isLogined: false,
			error: true,
		}),

		[REMOVE_LOGIN_ERROR]: state => ({
			...state,
			error: null,
		}),

		[START_LOADING]: state => ({
			...state,
			isLoading: true,
		}),

		[STOP_LOADING]: state => ({
			...state,
			isLoading: false,
		}),
	},
	initialState
);

export default loginStorage;
