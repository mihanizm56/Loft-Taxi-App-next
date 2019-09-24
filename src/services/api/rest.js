import fetch from "isomorphic-unfetch";
import { requestRacer } from "./utils/request-racer";

export const getRequest = ({ endpoint }) => {
	const request = fetch(endpoint)
		.then(data => data.json())
		.catch(error => console.log("getRequest error", error));

	return requestRacer({ request });
};
