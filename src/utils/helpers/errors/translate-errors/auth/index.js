import {
	NOT_CORRECT_DATA,
	FORBIDDEN,
	INTERNAL_SERVER_ERROR,
	UNAUTHORIZED,
	SORRY_CLIENT_ERROR,
} from "../../../../../constants";

export const translatorLoginFormErrors = ({ errorFromBackend, i18n }) => {
	switch (errorFromBackend) {
		case FORBIDDEN:
		case INTERNAL_SERVER_ERROR:
		case UNAUTHORIZED:
		case NOT_CORRECT_DATA:
			return {
				username: i18n(`errors:login.${errorFromBackend}`),
				password: i18n(`errors:login.${errorFromBackend}`),
			};

		default:
			return {
				username: i18n(`errors:login.${SORRY_CLIENT_ERROR}`),
				password: i18n(`errors:login.${SORRY_CLIENT_ERROR}`),
			};
	}
};
