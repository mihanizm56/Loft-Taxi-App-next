export const validateCardNumberField = value => {
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
