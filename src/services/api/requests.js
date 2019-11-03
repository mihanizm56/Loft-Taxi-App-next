// errors
// export const NOT_CORRECT_DATA = "not correct data";
// export const FORBIDDEN = "forbidden";
// export const INTERNAL_SERVER_ERROR = "internal server error";
// export const EXPIRED = "jwt expired";
// export const UNAUTHORIZED = "unauthorized";
// export const NOT_FOUND = "not found";
// export const SORRY_CLIENT_ERROR = "sorry, something goes wrong";

export const fetchLoginRequest = () =>
	Promise.resolve({
		message: "failed",
		error: "internal server error",
		access_token: "access_token_test",
		refresh_token: "refresh_token_test",
	}).then(data => data);

// /login new user
export const fetchNewUserRequest = () =>
	Promise.resolve({
		message: "failed",
		error: "internal server error",
		access_token: "access_token",
		refresh_token: "refresh_token",
	}).then(data => data);

export const fetchRefreshTokenRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
		access_token: "access_token_from_refresh_mock",
		refresh_token: "refresh_token_from_refresh_mock",
	}).then(data => data);

export const fetchAccessTokenRequest = () =>
	Promise.resolve({
		message: "success",
		error: "",
	});

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

export const fetchGetLastOrder = () =>
	Promise.resolve({
		message: "success",
		error: "",
		order: null,
		// {
		// id: "5da4d2d894bd902daca9dba9",
		// is_done: false,
		// from_coords: {
		// 	Latitude: 55.75697,
		// 	Longitude: 37.61502,
		// },
		// to_coords: {
		// 	Latitude: 59.93318,
		// 	Longitude: 30.30605,
		// },
		// from_text: "Москва",
		// to_text: "Санкт-Петербург",
		// exp_time: 5,
		// },
	});

// /orders-upd
export const fetchUpdOrder = () =>
	Promise.resolve({
		message: "success",
		error: "",
	});

export const fetchAddNewOrder = () =>
	Promise.resolve({
		message: "failed",
		error: "not found",
		order: {
			// order_id: "5da4d9dd40359b1928e52ba3",
			// is_done: false,
			// from_coords: {
			// 	Latitude: 56.75222,
			// 	Longitude: 37.61556,
			// },
			// to_coords: {
			// 	Latitude: 56.89444,
			// 	Longitude: 30.26417,
			// },
			// from_text: "Москва",
			// to_text: "Санкт-Петербург",
			// exp_time: 120000,
		},
	});
