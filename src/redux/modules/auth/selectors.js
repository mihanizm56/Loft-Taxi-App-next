import { createSelector } from "reselect";

const isLoginedSelector = store => store.loginStorage.isLogined;
const errorLoginSelector = store => store.loginStorage.isLogined;
const loadingLoginSelector = store => store.loginStorage.isLoading;

export const getLoginStatus = createSelector(
	[isLoginedSelector],
	isLogined => isLogined
);

export const getLoginError = createSelector(
	[errorLoginSelector],
	error => error
);

export const isLoginLoading = createSelector(
	[loadingLoginSelector],
	isLoading => isLoading
);
