const validateCardUserField = value => {
	if (value) {
		const result = value.match(/^[A-Z]{10,20}$/);
		if (!result) {
			return { userFieldError: "Введите корректное имя пользователя" };
		}
		return { userFieldError: null };
	}

	return { userFieldError: "Введите имя владельца карты" };
};

const validateCardNumberField = value => {
	if (value) {
		const result = value.replace(/\s+/g, "");
		console.log("validateCardNumberField result", result);

		if (!result) {
			return {
				numberFieldError: "Введите корректный номер карты",
			};
		}

		if (result.length !== 16) {
			return {
				numberFieldError: "Номер карты должен быть не менее 16 символов",
			};
		}
		return { numberFieldError: null };
	}

	return { numberFieldError: "Введите номер карты" };
};

const validateCardDateField = value => {
	if (value) {
		const isNaturalData = value.toString().length === 61;

		if (isNaturalData) {
			return {
				dateFieldError: null,
			};
		}

		const isExpDateNotFull = Boolean(value.indexOf("_") !== -1);

		if (isExpDateNotFull) {
			return {
				dateFieldError: "Введите полную дату",
			};
		}

		return { dateFieldError: null };
	}

	return { dateFieldError: "Введите дату окончания действия карты" };
};

const validateCardCVVField = value => {
	if (value) {
		const result = value.match(/^\d+$/);
		console.log("validateCardCVVField result", result);

		if (!result) {
			return {
				cvvFieldError: "Введите корректный секретный номер карты",
			};
		}

		if (result.length !== 3) {
			return {
				cvvFieldError: "Введите полный секретный номер карты",
			};
		}

		return { cvvFieldError: null };
	}

	return { cvvFieldError: "Введите секретный номер карты" };
};

export const asyncValidateCredentialsFields = inputs => {
	console.log("inputs", inputs);
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
