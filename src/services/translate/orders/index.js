import {
	NOT_CORRECT_DATA,
	FORBIDDEN,
	INTERNAL_SERVER_ERROR,
	UNAUTHORIZED,
	NOT_FOUND,
	SORRY_CLIENT_ERROR,
} from "../../../constants";

const makeError = error => ({
	adressFrom: error,
	adressTo: error,
});

export const translatorOrderFormErrors = ({ errorFromBackend, i18n }) => {
	switch (errorFromBackend) {
		case NOT_CORRECT_DATA:
			return makeError(i18n(`errors:orders.${NOT_CORRECT_DATA}`));
		case FORBIDDEN:
			return makeError(i18n(`errors:orders.${FORBIDDEN}`));
		case INTERNAL_SERVER_ERROR:
			return makeError(i18n(`errors:orders.${INTERNAL_SERVER_ERROR}`));
		case UNAUTHORIZED:
			return makeError(i18n(`errors:orders.${UNAUTHORIZED}`));
		case NOT_FOUND:
			return makeError(i18n(`errors:orders.${NOT_FOUND}`));

		default:
			return makeError(i18n(`errors:shared.${SORRY_CLIENT_ERROR}`));
	}
};
