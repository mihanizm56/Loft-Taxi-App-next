export const sanitizeAddressField = addressValue =>
	addressValue.replace(/[^0-9a-zA-Zа-яА-Я ./-]+/, "");
