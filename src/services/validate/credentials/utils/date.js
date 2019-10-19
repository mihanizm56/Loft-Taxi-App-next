export const validateCardDateField = value => {
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
