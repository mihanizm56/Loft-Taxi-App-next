// export const NOT_CORRECT_DATA = "not correct data";
// export const FORBIDDEN = "forbidden";
// export const INTERNAL_SERVER_ERROR = "internal server error";
// export const EXPIRED = "jwt expired";
// export const UNAUTHORIZED = "unauthorized";
// export const NOT_FOUND = "not found";
// export const SORRY_CLIENT_ERROR = "sorry, something goes wrong";

// import { postRequest, putRequest, patchRequest, getRequest } from "./rest";
// import {
// 	getAuthEndpoint,
// 	getCredentialsEndpoint,
// 	getOrdersEndpoint,
// } from "./endpoints";
// /login login-user
export const fetchLoginRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
		access_token: "access_token_test",
		refresh_token: "refresh_token_test",
	}).then(data => data);
// export const fetchLoginRequest = ({ username, password }) =>
// 	postRequest({
// 		endpoint: getAuthEndpoint(),
// 		data: { username, password },
// 	});

// /login new user
export const fetchNewUserRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
		access_token: "access_token",
		refresh_token: "refresh_token",
	}).then(data => data);
// export const fetchNewUserRequest = ({ username, password }) =>
// 	putRequest({
// 		endpoint: getAuthEndpoint(),
// 		data: { username, password },
// 	});

// /login/refresh
// export const fetchRefreshTokenRequest = ({ token }) =>
// 	postRequest({
// 		endpoint: `${getAuthEndpoint()}/refresh`,
// 		data: { token },
// 		// authorize: { token },
// 	});

export const fetchRefreshTokenRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
		access_token: "access_token_from_refresh_mock",
		refresh_token: "refresh_token_from_refresh_mock",
	}).then(data => data);

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
// export const fetchGetUserCreds = ({ token }) =>
// 	postRequest({
// 		endpoint: getCredentialsEndpoint(),
// 		data: {},
// 		authorize: { token },
// 	});
export const fetchGetUserCreds = () =>
	Promise.resolve({
		message: "success",
		error: "",
		empty: false,
	});

// /credentials-upd (post)
let counter = 0;

/* eslint-disable */
export const fetchUpdUserCreds = () => {
	console.log("counter!!!!!!!!!!!!!!!!!!!!!!!!!", counter);

	return !counter
		? Promise.resolve({
				message: "failed",
				error: "jwt expired",
		  }).then(data => {
				counter += 1;

				return data;
		  })
		: Promise.resolve({
				message: "success",
				error: "",
		  }).then(data => data);
};

/* eslint-enable */

// export const fetchUpdUserCreds = ({
// 	token,
// 	cardUser,
// 	cardNumber,
// 	expDate,
// 	cvv,
// }) =>
// 	patchRequest({
// 		endpoint: getCredentialsEndpoint(),
// 		data: {
// 			card_user: cardUser,
// 			exp_date: expDate,
// 			cvv,
// 			card_number: cardNumber,
// 		},
// 		authorize: { token },
// 	});

// /credentials-add  // not necessary
// export const fetchAddUserCreds = ({
// 	token,
// 	cardUser,
// 	cardNumber,
// 	expDate,
// 	cvv,
// }) =>
// 	putRequest({
// 		endpoint: getCredentialsEndpoint(),
// 		data: { cardUser, expDate, cvv, cardNumber },
// 		authorize: { token },
// 	});

// /orders-add
// export const fetchGetLastOrder = ({ token }) =>
// 	getRequest({
// 		endpoint: getOrdersEndpoint(),
// 		data: {},
// 		authorize: { token },
// 	});
export const fetchGetLastOrder = () =>
	Promise.resolve({
		message: "success",
		error: "",
		// order: {
		// 	id: "5da4d2d894bd902daca9dba9",
		// 	is_done: false,
		// 	from_coords: {
		// 		Latitude: 55.75697,
		// 		Longitude: 37.61502,
		// 	},
		// 	to_coords: {
		// 		Latitude: 59.93318,
		// 		Longitude: 30.30605,
		// 	},
		// 	from_text: "Москва",
		// 	to_text: "Санкт-Петербург",
		// 	exp_time: 120000,
		// },
	});

// /orders-upd
// export const fetchUpdOrder = ({ orderId, token }) =>
// 	postRequest({
// 		endpoint: getOrdersEndpoint(),
// 		data: { orderId },
// 		authorize: { token },
// 	});
export const fetchUpdOrder = () =>
	Promise.resolve({
		message: "success",
		error: "",
	});

// export const fetchAddNewOrder = ({ token, from, to, timestamp }) =>
// 	putRequest({
// 		endpoint: getOrdersEndpoint(),
// 		data: { from, to, timestamp },
// 		authorize: { token },
// 	});

export const fetchAddNewOrder = () =>
	Promise.resolve({
		message: "success",
		error: "",
		order: {
			order_id: "5da4d9dd40359b1928e52ba3",
			is_done: false,
			from_coords: {
				Latitude: 56.75222,
				Longitude: 37.61556,
			},
			to_coords: {
				Latitude: 56.89444,
				Longitude: 30.26417,
			},
			from_text: "Москва",
			to_text: "Санкт-Петербург",
			exp_time: 120000,
		},
	});
