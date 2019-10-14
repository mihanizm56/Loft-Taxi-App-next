import React from "react";
import { connect } from "react-redux";
import {
	getLoadingOrderState,
	getOrderError,
	getOrderFromInfo,
	getOrderToInfo,
	getOrderTimeout,
	getOrderIsDoneStatus,
	getOrderId,
} from "../../redux/modules/orders";

class WrappedContainer extends React.Component {
	componentDidMount() {
		console.log("check order container props", this.props);
	}

	createOrder = ({ adressFrom, adressTo }) =>
		console.log("order create", adressFrom, adressTo);

	render() {
		const { children } = this.props;
		const { createOrder } = this;

		return children({ createOrder });
	}
}

const mapStateToProps = store => ({
	isLoading: getLoadingOrderState(store),
	error: getOrderError(store),
	orderFrom: getOrderFromInfo(store),
	orderTo: getOrderToInfo(store),
	orderTimeout: getOrderTimeout(store),
	orderIsDone: getOrderIsDoneStatus(store),
	orderId: getOrderId(store),
});

export const ReduxContainer = connect(
	mapStateToProps,
	null
)(WrappedContainer);
