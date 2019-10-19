export const validateAddressesField = value => {
	if (value) {
		const result = value.replace(/[^0-9a-zA-Zа-яА-Я]+/, "");
		console.log("validateAddressesField result", result);

		if (!result) {
			return {
				addressesError: "Введите адрес",
			};
		}

		return { addressesError: null };
	}

	return { addressesError: "Введите адрес" };
};
