import { postRequest, putRequest, patchRequest, getRequest } from "./rest";
import {
	getAuthEndpoint,
	getCredentialsEndpoint,
	getOrdersEndpoint,
} from "./endpoints";

// /login login-user
export const fetchLoginRequest = ({ username, password }) =>
	postRequest({
		endpoint: getAuthEndpoint(),
		data: { username, password },
	});

// /login new user
export const fetchNewUserRequest = ({ username, password }) =>
	putRequest({
		endpoint: getAuthEndpoint(),
		data: { username, password },
	});

// /login/refresh
export const fetchRefreshTokenRequest = ({ token }) =>
	postRequest({
		endpoint: `${getAuthEndpoint()}/refresh`,
		data: { token },
		// authorize: { token },
	});

// /login/token
export const fetchAccessTokenRequest = ({ token }) =>
	postRequest({
		endpoint: `${getAuthEndpoint()}/token`,
		data: {},
		authorize: { token },
	});

// /credentials-get
export const fetchGetUserCreds = ({ token }) =>
	postRequest({
		endpoint: getCredentialsEndpoint(),
		data: {},
		authorize: { token },
	});

// /credentials-upd (post)
export const fetchUpdUserCreds = ({
	token,
	cardUser,
	cardNumber,
	expDate,
	cvv,
}) =>
	patchRequest({
		endpoint: getCredentialsEndpoint(),
		data: {
			card_user: cardUser,
			exp_date: expDate,
			cvv,
			card_number: cardNumber,
		},
		authorize: { token },
	});

// /credentials-add  // not necessary
export const fetchAddUserCreds = ({
	token,
	cardUser,
	cardNumber,
	expDate,
	cvv,
}) =>
	putRequest({
		endpoint: getCredentialsEndpoint(),
		data: { cardUser, expDate, cvv, cardNumber },
		authorize: { token },
	});

// /orders-add
export const fetchGetLastOrder = ({ token }) =>
	getRequest({
		endpoint: getOrdersEndpoint(),
		data: {},
		authorize: { token },
	});

// /orders-upd
export const fetchUpdOrder = ({ orderId, token }) =>
	postRequest({
		endpoint: getOrdersEndpoint(),
		data: { orderId },
		authorize: { token },
	});

export const fetchAddNewOrder = ({ token, from, to, timestamp }) =>
	putRequest({
		endpoint: getOrdersEndpoint(),
		data: { from, to, timestamp },
		authorize: { token },
	});
