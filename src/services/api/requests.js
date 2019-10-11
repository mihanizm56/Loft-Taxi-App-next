import {
	putRequest,
	// postRequest,
	//  patchRequest
} from "./rest";
import {
	// getAuthEndpoint,
	// getCredentialsEndpoint,
	getOrdersEndpoint,
} from "./endpoints";

// export const NOT_CORRECT_DATA = "not correct data";
// export const FORBIDDEN = "forbidden";
// export const INTERNAL_SERVER_ERROR = "internal server error";
// export const EXPIRED = "jwt expired";
// export const UNAUTHORIZED = "unauthorized";
// export const NOT_FOUND = "not found";
// export const SORRY_CLIENT_ERROR = "sorry, something goes wrong";

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
	}).then(data => data);
// export const fetchNewUserRequest = ({ username, password }) =>
// putRequest({
// 	endpoint: getAuthEndpoint(),
// 	data: { username, password },
// });

// /login/refresh
// export const fetchRefreshTokenRequest = ({ token }) =>
// 	postRequest({
// 		endpoint: `${getAuthEndpoint()}/refresh`,
// 		// data: {},
// 	// authorize: { token },
// });

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

// /credentials-get  // not necessary
// export const fetchGetUserCreds = ({ token }) =>
// 	postRequest({
// 		endpoint: getCredentialsEndpoint(),
// 		data: {},
// 		authorize: { token },
// 	});

// /credentials-upd
const counter = 0;

export const fetchUpdUserCreds = () => {
	console.log("counter!!!!!!!!!!!!!!!!!!!!!!!!!", counter);

	// return !counter
	// 	? Promise.resolve({
	// 			message: "failed",
	// 			error: "jwt expired",
	// 	  }).then(data => {
	// 			counter += 1;

	// 			return data;
	// 	  })
	// 	: Promise.resolve({
	// 			message: "success",
	// 			error: "",
	// 	  }).then(data => data);
};

// export const fetchUpdUserCreds = ({
// 	token,
// 	cardUser,
// 	cardNumber,
// 	expDate,
// 	cvv,
// }) =>
// patchRequest({
// 	endpoint: getCredentialsEndpoint(),
// 	data: { cardUser, expDate, cvv, cardNumber },
// 	authorize: { token },
// });

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
