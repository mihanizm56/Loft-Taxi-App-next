import { createSelector } from "reselect";

const fromCoordsSelector = state => state.addressesStorage.from;
const toCoordsSelector = state => state.addressesStorage.to;

export const getFromCoords = createSelector(
	[fromCoordsSelector],
	coords => coords
);

export const getToCoords = createSelector(
	[toCoordsSelector],
	coords => coords
);
