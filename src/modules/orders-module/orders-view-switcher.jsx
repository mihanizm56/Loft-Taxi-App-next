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
	error,
	orderFromText,
	orderToText,
	orderTimeout,
	areCredsEmpty,
	isFormOpened,
	orderInfoBoxOpened,
	makeNewOffer,
	handleRedirectToCredentials,
	handleCancelOrder,
}) => {
	// typeof window !== "undefined" &&
	// 	console.log("props in OrdersViewSwitcher", {
	// 		handleSubmit,
	// 		createOrder,
	// 		isLoading,
	// 		error,
	// 		orderFrom,
	// 		orderTo,
	// 		orderTimeout,
	// 		areCredsEmpty,
	// 		isFormOpened,
	// 		orderInfoBoxOpened,
	// 		makeNewOffer,
	// 		handleRedirectToCredentials,
	// 		handleCancelOrder,
	// 	});

	let ComponentToShow;

	if (isLoading) {
		ComponentToShow = <LoadingTextIndicator text="Загрузка" />;
	} else if (error) {
		ComponentToShow = <OrderErrorBox handleMakeNewOrder={makeNewOffer} />;
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
		ComponentToShow = <NewOrderBox handleMakeNewOrder={makeNewOffer} />;
	}

	return <div className="order-container">{ComponentToShow}</div>;
};
