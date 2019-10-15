import { createSelector } from "reselect";

const isLoadingSelector = state => state.ordersStorage.isLoading;
const errorSelector = state => state.ordersStorage.error;
const orderSelector = state => state.ordersStorage.order;
const credsEmptySelector = state => state.ordersStorage.areCredsEmpty;

export const getLoadingOrderState = createSelector(
	[isLoadingSelector],
	isLoading => isLoading
);

export const getOrderError = createSelector(
	[errorSelector],
	error => error
);

export const getOrderData = createSelector(
	[orderSelector],
	data => data
);

export const getOrderFromCoordsInfo = createSelector(
	[getOrderData],
	order => order.from_coords
);

export const getOrderToCoordsInfo = createSelector(
	[getOrderData],
	order => order.to_coords
);

export const getOrderFromTextInfo = createSelector(
	[getOrderData],
	order => order.from_text
);

export const getOrderToTextInfo = createSelector(
	[getOrderData],
	order => order.to_text
);

export const getOrderTimeout = createSelector(
	[getOrderData],
	order => order.exp_time
);

export const getOrderIsDoneStatus = createSelector(
	[getOrderData],
	order => order.is_done
);

export const getOrderId = createSelector(
	[getOrderData],
	order => order.order_id
);

export const getCredsEmptyStatus = createSelector(
	[credsEmptySelector],
	areEmpty => areEmpty
);
