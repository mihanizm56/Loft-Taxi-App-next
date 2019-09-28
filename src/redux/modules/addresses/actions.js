import { createAction } from "redux-actions";
import {
	SET_COORDS,
	DELETE_COORDS,
	SET_ADDRESSES_ERROR,
	REMOVE_ADDRESSES_ERROR,
} from "./constants";

export const setCoordsActions = createAction(SET_COORDS);
export const deleteCoordsActions = createAction(DELETE_COORDS);

export const setAddressesErrorAction = createAction(SET_ADDRESSES_ERROR);
export const removeAddressesErrorAction = createAction(REMOVE_ADDRESSES_ERROR);
