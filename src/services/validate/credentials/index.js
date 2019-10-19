import { validateCardUserField } from "./utils/name";
import { validateCardNumberField } from "./utils/number";
import { validateCardDateField } from "./utils/date";
import { validateCardCVVField } from "./utils/cvv";

export const asyncValidateCredentialsFields = inputs => {
	console.log("in the validateCredentialsFields inputs", inputs);
	return Promise.resolve().then(() => {
		const errors = {};
		const { userFieldError } = validateCardUserField(inputs.cardUser);
		const { numberFieldError } = validateCardNumberField(inputs.cardNumber);
		const { dateFieldError } = validateCardDateField(inputs.expDate);
		const { cvvFieldError } = validateCardCVVField(inputs.cvv);

		if (userFieldError) {
			errors.cardUser = userFieldError;
		}

		if (numberFieldError) {
			errors.cardNumber = numberFieldError;
		}

		if (dateFieldError) {
			errors.expDate = dateFieldError;
		}

		if (cvvFieldError) {
			errors.cvv = cvvFieldError;
		}

		const errorsExists = Boolean(
			errors.cardName || errors.expDate || errors.cardNumber || errors.cvv
		);

		console.log("errorsExists", errorsExists, errors);

		if (errorsExists) {
			throw errors;
		}
	});
};

export const submitValidateCredentialsFields = inputs => {
	console.log("in the submitValidateCredentialsFields inputs", inputs);
	const validationError = {};

	const { userFieldError } = validateCardUserField(inputs.cardUser);
	const { numberFieldError } = validateCardNumberField(inputs.cardNumber);
	const { dateFieldError } = validateCardDateField(inputs.expDate);
	const { cvvFieldError } = validateCardCVVField(inputs.cvv);

	if (userFieldError) {
		validationError.cardUser = userFieldError;
	}

	if (numberFieldError) {
		validationError.cardNumber = numberFieldError;
	}

	if (dateFieldError) {
		validationError.expDate = dateFieldError;
	}

	if (cvvFieldError) {
		validationError.cvv = cvvFieldError;
	}

	const errorsExists = Boolean(
		validationError.cardName ||
			validationError.expDate ||
			validationError.cardNumber ||
			validationError.cvv
	);

	console.log("errorsExists", errorsExists, validationError);

	if (errorsExists) {
		return { validationError };
	}

	return { validationError: null };
};
