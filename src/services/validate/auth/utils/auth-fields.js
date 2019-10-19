export const validateAuthField = value => {
	if (value) {
		const result = value.replace(/[^0-9a-zA-Zа-яА-Я@_]+/, "");
		console.log("validateAuthField result", result);

		if (!result) {
			return {
				authFieldError: "Введите корретные данные",
			};
		}

		return { authFieldError: null };
	}

	return { authFieldError: "Введите корретные данные" };
};
