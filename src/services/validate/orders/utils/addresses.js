import { sanitizeAddressField } from "../../../../utils/sanitizers";

export const validateAddressesField = value => {
	if (value) {
		const result = sanitizeAddressField;
		console.log("validateAddressesField result", result);

		if (!result) {
			return {
				addressesError: "Введите адрес",
			};
		}

		return { addressesError: null, result };
	}

	return { addressesError: "Введите адрес" };
};
