import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "connected-next-router";
import addressesStorage from "../modules/addresses";
import loginStorage from "../modules/auth";
import сredentialsStorage from "../modules/credentials";
import ordersStorage from "../modules/orders";
import placesDialogStatusStorage from "../modules/places-dialog";

export const rootReducer = combineReducers({
	form: formReducer,
	router: routerReducer,
	addressesStorage,
	loginStorage,
	сredentialsStorage,
	ordersStorage,
	placesDialogStatusStorage,
});
