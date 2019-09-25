import { combineReducers } from "redux";
import { routerReducer } from "connected-next-router";

export const rootReducer = combineReducers({
	router: routerReducer,
});
