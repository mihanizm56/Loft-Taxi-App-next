import { TIMEOUT_VALUE } from "../../../constants";

export const requestRacer = async ({ request }) => {
	const timeoutException = new Promise(resolve =>
		setTimeout(
			() => resolve({ error: "request-error", message: "" }),
			TIMEOUT_VALUE
		)
	);

	return Promise.race([request, timeoutException]);
};
