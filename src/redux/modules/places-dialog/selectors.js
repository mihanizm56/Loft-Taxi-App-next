import { createSelector } from "reselect";

const showStatusSelector = state => state.placesDialogStatusStorage.needToShow;

export const getPlaceDialogState = createSelector(
	[showStatusSelector],
	state => state
);
