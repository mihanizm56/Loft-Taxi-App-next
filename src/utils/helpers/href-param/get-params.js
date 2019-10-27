export const getHrefParam = hrefString => {
	const arrayOfParams = hrefString.split("/");
	const lastParam = arrayOfParams[arrayOfParams.length - 1];

	return lastParam;
};
