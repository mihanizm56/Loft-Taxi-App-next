export const validateCardCVVField = value => {
	if (value) {
		const result = value.match(/^\d+$/);
		console.log("validateCardCVVField result", result);

		if (!result) {
			return {
				cvvFieldError: "Введите корректный секретный номер карты",
			};
		}

		if (result[0].length !== 3) {
			return {
				cvvFieldError: "Введите полный секретный номер карты",
			};
		}

		return { cvvFieldError: null };
	}

	return { cvvFieldError: "Введите секретный номер карты" };
};
