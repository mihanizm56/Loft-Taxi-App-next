export const validateCardUserField = value => {
	if (value) {
		const result = value.match(/^[A-Z ]{10,20}$/);

		if (!result) {
			return { userFieldError: "Введите корректное имя пользователя" };
		}
		return { userFieldError: null };
	}

	return { userFieldError: "Введите имя владельца карты" };
};
