import { createSelector } from "reselect";

const fromCoordsSelector = state => state.addressesStorage.from;
const toCoordsSelector = state => state.addressesStorage.to;
const coordsErrorSelector = state => state.addressesStorage.error;

export const getFromCoords = createSelector(
	[fromCoordsSelector],
	coords => coords
);

export const getToCoords = createSelector(
	[toCoordsSelector],
	coords => coords
);

export const getCoordsError = createSelector(
	[coordsErrorSelector],
	error => error
);
