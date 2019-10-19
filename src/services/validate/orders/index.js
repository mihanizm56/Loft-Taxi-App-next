import { validateAddressesField } from "./utils/addresses";

export const asyncValidateOrderFields = inputs => {
	console.log("in the asyncValidateOrderFields inputs", inputs);
	return Promise.resolve().then(() => {
		const errors = {};
		const { addressesError: fromAddressError } = validateAddressesField(
			inputs.adressFrom
		);
		const { addressesError: toAddressError } = validateAddressesField(
			inputs.adressTo
		);

		if (fromAddressError) {
			errors.adressFrom = fromAddressError;
		}

		if (toAddressError) {
			errors.adressTo = toAddressError;
		}

		const errorsExists = Boolean(errors.adressFrom || errors.adressTo);

		console.log("errors in orders form", errorsExists, errors);

		if (errorsExists) {
			throw errors;
		}
	});
};

export const submitValidateOrderFields = inputs => {
	console.log("in the submitValidateOrderFields inputs", inputs);
	const validationError = {};

	const { addressesError: fromAddressError } = validateAddressesField(
		inputs.adressFrom
	);
	const { addressesError: toAddressError } = validateAddressesField(
		inputs.adressTo
	);

	if (fromAddressError) {
		validationError.adressFrom = fromAddressError;
	}

	if (toAddressError) {
		validationError.adressTo = toAddressError;
	}

	const errorsExists = Boolean(
		validationError.adressFrom || validationError.adressTo
	);

	console.log("errors in orders form", errorsExists, validationError);

	if (errorsExists) {
		return { validationError };
	}

	return { validationError: null };
};
