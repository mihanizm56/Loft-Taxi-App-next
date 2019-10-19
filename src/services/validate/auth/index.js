import { validateAuthField } from "./utils/auth-fields";

export const asyncValidateAuthFields = inputs => {
	console.log("in the asyncValidateAuthFields inputs", inputs);
	return Promise.resolve().then(() => {
		const errors = {};
		const { authFieldError: usernameError } = validateAuthField(
			inputs.username
		);
		const { authFieldError: passwordError } = validateAuthField(
			inputs.password
		);

		if (usernameError) {
			errors.username = usernameError;
		}

		if (passwordError) {
			errors.password = passwordError;
		}

		const errorsExists = Boolean(errors.username || errors.password);

		console.log("errors in auths form", errorsExists, errors);

		if (errorsExists) {
			throw errors;
		}
	});
};

export const submitValidateAuthFields = inputs => {
	console.log("in the submitValidateAuthFields inputs", inputs);
	const validationError = {};

	const { authFieldError: usernameError } = validateAuthField(inputs.username);
	const { authFieldError: passwordError } = validateAuthField(inputs.password);

	if (usernameError) {
		validationError.username = usernameError;
	}

	if (passwordError) {
		validationError.password = passwordError;
	}

	const errorsExists = Boolean(
		validationError.username || validationError.password
	);

	console.log("errors in auths form", errorsExists, validationError);

	return { validationError: null };
};
