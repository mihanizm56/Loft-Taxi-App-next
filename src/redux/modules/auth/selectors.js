import { createSelector } from "reselect";

const isLoginedSelector = store => store.loginStorage.isLogined;
const errorLoginSelector = store => store.loginStorage.isLogined;

export const getLoginStatus = createSelector(
	[isLoginedSelector],
	isLogined => isLogined
);

export const getLoginError = createSelector(
	[errorLoginSelector],
	error => error
);
