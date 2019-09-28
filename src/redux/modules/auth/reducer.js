import { handleActions } from "redux-actions";
import {
	LOGIN,
	LOGOUT,
	SET_LOGIN_ERROR,
	REMOVE_LOGIN_ERROR,
} from "./constants";

const initialState = {
	isLogined: false,
	error: null,
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
	},
	initialState
);

export default loginStorage;
