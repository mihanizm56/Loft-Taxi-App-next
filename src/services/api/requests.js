import { putRequest, postRequest, patchRequest } from "./rest";
import {
	getAuthEndpoint,
	getCredentialsEndpoint,
	getOrdersEndpoint,
} from "./endpoints";

// /login login-user
export const fetchLoginRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
		access_token: "access_token_test",
		refresh_token: "refresh_token_test",
	}).then(data => data);
// export const fetchLoginRequest = ({ username, password }) =>
// postRequest({
// 	endpoint: getAuthEndpoint(),
// 	data: { username, password },
// });

// /login new user
export const fetchNewUserRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
		access_token: "access_token",
		refresh_token: "refresh_token",
	});
// export const fetchNewUserRequest = ({ username, password }) =>
// putRequest({
// 	endpoint: getAuthEndpoint(),
// 	data: { username, password },
// });

// /login/refresh
export const fetchRefreshRequest = ({ token }) =>
	postRequest({
		endpoint: `${getAuthEndpoint()}/refresh`,
		data: {},
		authorize: { token },
	});

// /login/token
// export const fetchAccessTokenRequest = ({ token }) =>
// 	postRequest({
// 		endpoint: `${getAuthEndpoint()}/token`,
// 		data: {},
// 		authorize: { token },
// 	});

export const fetchAccessTokenRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
	});

// /credentials-get
export const fetchGetUserCreds = ({ token }) =>
	postRequest({
		endpoint: getCredentialsEndpoint(),
		data: {},
		authorize: { token },
	});

// /credentials-upd
export const fetchUpdUserCreds = ({
	token,
	cardUser,
	cardNumber,
	expDate,
	cvv,
}) =>
	patchRequest({
		endpoint: getCredentialsEndpoint(),
		data: { cardUser, expDate, cvv, cardNumber },
		authorize: { token },
	});

// /credentials-add  //// not necessary
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
export const fetchAddNewOrder = ({ token, from, to }) =>
	putRequest({
		endpoint: getOrdersEndpoint(),
		data: { from, to },
		authorize: { token },
	});

// /orders-upd
export const fetchUpdOrder = ({ orderId, token }) =>
	putRequest({
		endpoint: getOrdersEndpoint(),
		data: { orderId },
		authorize: { token },
	});
