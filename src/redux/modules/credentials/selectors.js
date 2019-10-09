import { createSelector } from "reselect";

const cardNameState = state => state.сredentialsStorage.card.cardName;
const expDateState = state => state.сredentialsStorage.card.expDate;
const cardNumberState = state => state.сredentialsStorage.card.cardNumber;
const cvvState = state => state.сredentialsStorage.card.cvv;
const errorState = state => state.сredentialsStorage.error;
const loadingState = state => state.сredentialsStorage.isLoading;

export const getCardNameState = createSelector(
	[cardNameState],
	name => name
);

export const getExpDateState = createSelector(
	[expDateState],
	date => date
);

export const getCardNumberState = createSelector(
	[cardNumberState],
	number => number
);

export const getCvvState = createSelector(
	[cvvState],
	cvv => cvv
);

export const getErrorCredsState = createSelector(
	[errorState],
	error => error
);

export const getLoadingState = createSelector(
	[loadingState],
	isLoading => isLoading
);

export const getAllFormValues = createSelector(
	[getCardNameState, getExpDateState, getCardNumberState, getCvvState],
	(cardName, expDate, cardNumber, cvv) =>
		Boolean(cardName && expDate && cardNumber && cvv)
);
