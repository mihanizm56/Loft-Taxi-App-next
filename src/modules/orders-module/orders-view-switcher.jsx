import React from "react";
import { LoadingTextIndicator } from "../../components/atoms";
import {
	AddOrderForm,
	OrderErrorBox,
	NewOrderBox,
	OrderInfoBox,
	OrderRedirectBox,
} from "../../components/molecules/clusters/order-cluster";

import "./styles/index.css";

export const OrdersViewSwitcher = ({
	handleSubmit,
	createOrder,
	isLoading,
	orderError,
	orderFromText,
	orderToText,
	orderTimeout,
	areCredsEmpty,
	isFormOpened,
	orderInfoBoxOpened,
	makeNewOrder,
	handleRedirectToCredentials,
	handleCancelOrder,
}) => {
	// typeof window !== "undefined" &&
	// 	console.log("props in OrdersViewSwitcher", {
	// 		isLoading,
	// 	});

	let ComponentToShow;

	if (isLoading) {
		ComponentToShow = <LoadingTextIndicator text="Загрузка" />;
	} else if (orderError) {
		ComponentToShow = <OrderErrorBox handleMakeNewOrder={makeNewOrder} />;
	} else if (areCredsEmpty) {
		ComponentToShow = (
			<OrderRedirectBox handleRedirect={handleRedirectToCredentials} />
		);
	} else if (isFormOpened) {
		ComponentToShow = (
			<AddOrderForm handleSubmit={handleSubmit} createOrder={createOrder} />
		);
	} else if (orderInfoBoxOpened) {
		ComponentToShow = (
			<OrderInfoBox
				handleCancelOrder={handleCancelOrder}
				fromPlace={orderFromText}
				toPlace={orderToText}
				timeToGetTaxi={orderTimeout}
			/>
		);
	} else {
		ComponentToShow = <NewOrderBox handleMakeNewOrder={makeNewOrder} />;
	}

	return <div className="order-container">{ComponentToShow}</div>;
};
