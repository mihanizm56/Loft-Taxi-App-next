import { createSelector } from "reselect";

const isLoadingSelector = state => state.ordersStorage.isLoading;
const errorSelector = state => state.ordersStorage.error;
const orderSelector = state => state.ordersStorage.order;

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

export const getOrderFromInfo = createSelector(
	[getOrderData],
	order => order.from
);

export const getOrderToInfo = createSelector(
	[getOrderData],
	order => order.to
);

export const getOrderTimeout = createSelector(
	[getOrderData],
	order => order.timeOutOrder
);

export const getOrderIsDoneStatus = createSelector(
	[getOrderData],
	order => order.orderIsDone
);

export const getOrderId = createSelector(
	[getOrderData],
	order => order.orderId
);
