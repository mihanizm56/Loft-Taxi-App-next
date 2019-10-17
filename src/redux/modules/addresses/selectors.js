import { createSelector } from "reselect";

const fromCoordsSelector = store => store.addressesStorage.fromCoords;
const toCoordsSelector = store => store.addressesStorage.toCoords;
const coordsErrorSelector = store => store.addressesStorage.error;

const cordsMapper = coords => ({ lat: coords.Latitude, lng: coords.Longitude });

export const getFromCoords = createSelector(
	[fromCoordsSelector],
	cordsMapper
);

export const getToCoords = createSelector(
	[toCoordsSelector],
	cordsMapper
);

export const getCoordsError = createSelector(
	[coordsErrorSelector],
	error => error
);
