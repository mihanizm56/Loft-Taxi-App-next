import {
	NOT_CORRECT_DATA,
	FORBIDDEN,
	INTERNAL_SERVER_ERROR,
	UNAUTHORIZED,
	NOT_FOUND,
	SORRY_CLIENT_ERROR,
} from "../../../../../constants";

export const translatorOrderFormErrors = ({ errorFromBackend, i18n }) => {
	switch (errorFromBackend) {
		case NOT_CORRECT_DATA:
		case FORBIDDEN:
		case INTERNAL_SERVER_ERROR:
		case UNAUTHORIZED:
		case NOT_FOUND:
			return {
				adressFrom: i18n(`errors:orders.${errorFromBackend}`),
				adressTo: i18n(`errors:orders.${errorFromBackend}`),
			};

		default:
			return {
				adressFrom: i18n(`errors:orders.${SORRY_CLIENT_ERROR}`),
				adressTo: i18n(`errors:orders.${SORRY_CLIENT_ERROR}`),
			};
	}
};
