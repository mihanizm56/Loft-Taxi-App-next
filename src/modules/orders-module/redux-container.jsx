import React from "react";
import { connect } from "react-redux";
import { Router } from "../../../i18n";
import {
	getLoadingOrderState,
	getOrderError,
	getOrderTimeout,
	getOrderIsDoneStatus,
	getOrderId,
	getCredsEmptyStatus,
	getOrderFromTextInfo,
	getOrderToTextInfo,
	addNewOrder,
	removeOrderErrorAction,
	resetOrderData,
	cancelOrder as cancelOrderAction,
} from "../../redux/modules/orders";

class WrappedContainer extends React.Component {
	static getDerivedStateFromProps(nextProps) {
		const { orderIsDone } = nextProps;

		if (!orderIsDone) {
			return { orderInfoBoxOpened: true, isFormOpened: false };
		}

		return { orderInfoBoxOpened: false, isFormOpened: true };
	}

	state = { isFormOpened: false, orderInfoBoxOpened: false };

	handleOpenInfoBox = () => this.setState({ orderInfoBoxOpened: true });

	makeNewOrder = () => {
		const { removeOrderError, resetData, reset } = this.props;
		// reset form values
		reset("order");
		// resetOrderError
		removeOrderError();
		// resetOrderData
		resetData();

		this.setState({ isFormOpened: true });
	};

	handleCancelOrder = () => {
		const { cancelOrder, orderId } = this.props;

		this.setState({ isFormOpened: true });
		// call cancel order saga
		cancelOrder({ orderId });
	};

	createOrder = ({ adressFrom, adressTo }) => {
		this.props.addNewOrder({ from: adressFrom, to: adressTo });
	};

	handleRedirectToCredentials = () => Router.push("/credentials");

	render() {
		const {
			children,
			isLoading,
			orderError,
			orderTimeout,
			orderIsDone,
			areCredsEmpty,
			orderFromText,
			orderToText,
		} = this.props;
		const {
			createOrder,
			makeNewOrder,
			handleRedirectToCredentials,
			handleCancelOrder,
		} = this;
		const { isFormOpened, orderInfoBoxOpened } = this.state;

		return children({
			createOrder,
			isLoading,
			orderError,
			orderFromText,
			orderToText,
			orderTimeout,
			orderIsDone,
			areCredsEmpty,
			isFormOpened,
			orderInfoBoxOpened,
			makeNewOrder,
			handleRedirectToCredentials,
			handleCancelOrder,
		});
	}
}

const mapStateToProps = store => ({
	isLoading: getLoadingOrderState(store),
	orderError: getOrderError(store),
	orderTimeout: getOrderTimeout(store),
	orderIsDone: getOrderIsDoneStatus(store),
	orderId: getOrderId(store),
	areCredsEmpty: getCredsEmptyStatus(store),
	orderFromText: getOrderFromTextInfo(store),
	orderToText: getOrderToTextInfo(store),
});

export const ReduxContainer = connect(
	mapStateToProps,
	{
		addNewOrder,
		removeOrderError: removeOrderErrorAction,
		resetData: resetOrderData,
		cancelOrder: cancelOrderAction,
	}
)(WrappedContainer);
