import {
	ENDPOINT_AUTH_DEV,
	ENDPOINT_AUTH_PROD,
	ENDPOINT_CREDS_DEV,
	ENDPOINT_CREDS_PROD,
	ENDPOINT_ORDERS_DEV,
	ENDPOINT_ORDERS_PROD,
} from "./constants";

export const getAuthEndpoint = () =>
	process.env.NODE_ENV !== "production"
		? ENDPOINT_AUTH_DEV
		: ENDPOINT_AUTH_PROD;

export const getCredentialsEndpoint = () =>
	process.env.NODE_ENV !== "production"
		? ENDPOINT_CREDS_DEV
		: ENDPOINT_CREDS_PROD;

export const getOrdersEndpoint = () =>
	process.env.NODE_ENV !== "production"
		? ENDPOINT_ORDERS_DEV
		: ENDPOINT_ORDERS_PROD;
