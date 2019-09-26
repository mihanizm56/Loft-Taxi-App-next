import { handleActions } from "redux-actions";
import {
	PUT_CREDENTIALS_NAMESPACE,
	REMOVE_CREDENTIALS_NAMESPACE,
} from "./constants";

const initialState = {
	cardUser: null,
	expDate: null,
	cvv: null,
	cardNumber: null,
};

const сredentialsStorage = handleActions(
	{
		[PUT_CREDENTIALS_NAMESPACE]: (state, action) => ({
			...state,
			cardUser: action.payload.cardUser,
			expDate: action.payload.expDate,
			cvv: action.payload.cvv,
			cardNumber: action.payload.cardNumber,
		}),

		[REMOVE_CREDENTIALS_NAMESPACE]: state => ({
			...state,
			cardUser: "",
			expDate: "",
			cvv: "",
			cardNumber: "",
		}),
	},
	initialState
);

export default сredentialsStorage;
