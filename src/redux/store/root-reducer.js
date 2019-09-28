import { combineReducers } from "redux";
import { routerReducer } from "connected-next-router";
import addressesStorage from "../modules/addresses";
import loginStorage from "../modules/auth";
import сredentialsStorage from "../modules/credentials";
import ordersStorage from "../modules/orders";

export const rootReducer = combineReducers({
	router: routerReducer,
	addressesStorage,
	loginStorage,
	сredentialsStorage,
	ordersStorage,
});
