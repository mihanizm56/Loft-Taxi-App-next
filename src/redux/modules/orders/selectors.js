import { createSelector } from "reselect";

const orderIsDoneSelector = state => state.ordersStorage.orderIsDone;
const timeToLockSelector = state => state.ordersStorage.timerToLock;
const orderIdSelector = state => state.ordersStorage.orderId;
const errorSelector = state => state.ordersStorage.error;

export const getOrderIdIsDoneState = createSelector(
	[orderIsDoneSelector],
	isDone => isDone
);

export const getTimeToLockValue = createSelector(
	[timeToLockSelector],
	timeToLock => timeToLock
);

export const getOrderId = createSelector(
	[orderIdSelector],
	orderId => orderId
);

export const getOrderErrorSelector = createSelector(
	[errorSelector],
	error => error
);
