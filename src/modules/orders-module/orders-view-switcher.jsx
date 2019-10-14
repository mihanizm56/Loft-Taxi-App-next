import React from "react";
import { AddOrderForm } from "../../components/molecules/clusters/order-cluster";
import "./styles/index.css";

export class OrdersViewSwitcher extends React.Component {
	state = {};

	render() {
		const { handleSubmit, createOrder } = this.props;

		return (
			<div className="order-container">
				<AddOrderForm handleSubmit={handleSubmit} createOrder={createOrder} />
			</div>
		);
	}
}
