import { putRequest, postRequest, patchRequest } from "./rest";
import {
	getAuthEndpoint,
	getCredentialsEndpoint,
	getOrdersEndpoint,
} from "./endpoints";

// /login post
export const fetchLoginRequest = ({ username, password }) =>
	postRequest({
		endpoint: getAuthEndpoint(),
		data: { username, password },
	});

// /login put
export const fetchNewUserRequest = ({ username, password }) =>
	putRequest({
		endpoint: getAuthEndpoint(),
		data: { username, password },
	});

// /login/refresh post
export const fetchRefreshRequest = ({ token }) =>
	postRequest({
		endpoint: `${getAuthEndpoint()}/refresh`,
		data: {},
		authorize: { token },
	});

// /login/token post
export const fetchAccessTokenRequest = ({ token }) =>
	postRequest({
		endpoint: `${getAuthEndpoint()}/token`,
		data: {},
		authorize: { token },
	});

// /credentials-get post
export const fetchGetUserCreds = ({ token }) =>
	postRequest({
		endpoint: getCredentialsEndpoint(),
		data: {},
		authorize: { token },
	});

// /credentials-upd patch
export const fetchUpdUserCreds = ({ token, cardUser, expDate, cvv }) =>
	patchRequest({
		endpoint: getCredentialsEndpoint(),
		data: { cardUser, expDate, cvv },
		authorize: { token },
	});

// /credentials-add put  //// not necessary
export const fetchAddUserCreds = ({ token, cardUser, expDate, cvv }) =>
	putRequest({
		endpoint: getCredentialsEndpoint(),
		data: { cardUser, expDate, cvv },
		authorize: { token },
	});

// /orders-add put
export const fetchAddNewOrder = ({ token, from, to }) =>
	putRequest({
		endpoint: getOrdersEndpoint(),
		data: { from, to },
		authorize: { token },
	});

// /orders-upd post
export const fetchUpdOrder = ({ orderId, token }) =>
	putRequest({
		endpoint: getOrdersEndpoint(),
		data: { orderId },
		authorize: { token },
	});
