import fetch from "isomorphic-unfetch";
import { requestRacer } from "./utils/request-racer";

export const getRequest = ({ endpoint, authorize }) => {
	const paramsObject = {
		method: "GET",
		headers: {
			Accept: "application/json",
			// "Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
			Authorization: authorize && `Bearer ${authorize.token}`,
		},
	};

	const request = fetch(endpoint, paramsObject)
		.then(data => data.json())
		.catch((error) => console.log('error in request',error)||
			({ error: "request-error", message: "" }));

	return requestRacer({ request });
};

export const putRequest = ({ endpoint, data, authorize }) => {
	const paramsObject = {
		method: "PUT",
		headers: {
			Accept: "application/json",
			// "Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
			Authorization: authorize && `Bearer ${authorize.token}`,
		},
		body: JSON.stringify(data),
	};

	const request = fetch(endpoint, paramsObject)
		.then(fetchedData => fetchedData.json())
		.catch((error) => console.log('error in request',error)||
			({ error: "request-error", message: "" }));

	return requestRacer({ request });
};

export const postRequest = ({ endpoint, data, authorize }) => {
	const paramsObject = {
		method: "POST",
		headers: {
			Accept: "application/json",
			// "Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
			Authorization: authorize && `Bearer ${authorize.token}`,
		},
		body: JSON.stringify(data),
	};
	const request = fetch(endpoint, paramsObject)
		.then(fetchedData => fetchedData.json())
		.catch((error) => console.log('error in request',error)||
			({ error: "request-error", message: "" }));

	return requestRacer({ request });
};

export const patchRequest = ({ endpoint, data, authorize }) => {
	const paramsObject = {
		method: "PATCH",
		headers: {
			Accept: "application/json",
			// "Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
			Authorization: authorize && `Bearer ${authorize.token}`,
		},
		body: JSON.stringify(data),
	};
	const request = fetch(endpoint, paramsObject)
		.then(fetchedData => fetchedData.json())
		.catch((error) => console.log('error in request',error)||
			({ error: "request-error", message: "" }));

	return requestRacer({ request });
};
