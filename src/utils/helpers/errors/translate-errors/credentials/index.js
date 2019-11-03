import {
	NOT_CORRECT_DATA,
	FORBIDDEN,
	INTERNAL_SERVER_ERROR,
	UNAUTHORIZED,
	SORRY_CLIENT_ERROR,
} from "../../../../../constants";

export const translatorCredentialsFormErrors = ({ errorFromBackend, i18n }) => {
	switch (errorFromBackend) {
		case FORBIDDEN:
		case INTERNAL_SERVER_ERROR:
		case UNAUTHORIZED:
		case NOT_CORRECT_DATA:
			return {
				cardUser: i18n(`errors:credentials.${errorFromBackend}`),
				expDate: i18n(`errors:credentials.${errorFromBackend}`),
				cardNumber: i18n(`errors:credentials.${errorFromBackend}`),
				cvv: i18n(`errors:credentials.${errorFromBackend}`),
			};

		default:
			return {
				cardUser: i18n(`errors:credentials.${SORRY_CLIENT_ERROR}`),
				expDate: i18n(`errors:credentials.${SORRY_CLIENT_ERROR}`),
				cardNumber: i18n(`errors:credentials.${SORRY_CLIENT_ERROR}`),
				cvv: i18n(`errors:credentials.${SORRY_CLIENT_ERROR}`),
			};
	}
};
