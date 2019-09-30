import {
	NOT_CORRECT_DATA,
	FORBIDDEN,
	INTERNAL_SERVER_ERROR,
	EXPIRED,
	UNAUTHORIZED,
	NOT_FOUND,
	SORRY_CLIENT_ERROR,
} from "../../../constants";

const makeError = error => ({
	username: error || SORRY_CLIENT_ERROR,
	password: error || SORRY_CLIENT_ERROR,
});

export const translatorLoginFormErrors = errorFromBackend => {
	switch (errorFromBackend) {
		case NOT_CORRECT_DATA:
			return makeError(NOT_CORRECT_DATA);
		case FORBIDDEN:
			return makeError(FORBIDDEN);
		case INTERNAL_SERVER_ERROR:
			return makeError(INTERNAL_SERVER_ERROR);
		case EXPIRED:
			return makeError(EXPIRED);
		case UNAUTHORIZED:
			return makeError(UNAUTHORIZED);
		case NOT_FOUND:
			return makeError(NOT_FOUND);

		default:
			return makeError();
	}
};
