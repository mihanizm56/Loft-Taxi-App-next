import { createSelector } from "reselect";

const fromCoordsSelector = store => store.addressesStorage.fromCoords;
const toCoordsSelector = store => store.addressesStorage.toCoords;
const coordsErrorSelector = store => store.addressesStorage.error;

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
