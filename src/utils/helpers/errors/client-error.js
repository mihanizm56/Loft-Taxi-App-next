export const getClientError = ({ error, key, i18n }) =>
	i18n(`${key}.${error}`) || i18n("default-client-error");
