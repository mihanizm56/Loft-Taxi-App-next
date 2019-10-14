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
} from "../../redux/modules/orders";

class WrappedContainer extends React.Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		const { orderIsDone } = nextProps;

		if (!orderIsDone) {
			return { orderInfoBoxOpened: true, isFormOpened: false };
		}

		return prevState;
	}

	state = { isFormOpened: false, orderInfoBoxOpened: false };

	handleOpenInfoBox = () => this.setState({ orderInfoBoxOpened: true });

	makeNewOffer = () => {
		// resetOrderData
		this.setState({ isFormOpened: true });
	};

	handleCancelOrder = () => {
		// resetOrderData and fetch close order
		this.setState({ isFormOpened: true });
	};

	createOrder = ({ adressFrom, adressTo }) => {
		console.log("order create", adressFrom, adressTo);
		// make action to send offer data
	};

	handleRedirectToCredentials = () => Router.push("/credentials");

	render() {
		const {
			children,
			isLoading,
			error,
			orderTimeout,
			orderIsDone,
			areCredsEmpty,
			orderFromText,
			orderToText,
		} = this.props;
		const {
			createOrder,
			makeNewOffer,
			handleRedirectToCredentials,
			handleCancelOrder,
		} = this;
		const { isFormOpened, orderInfoBoxOpened } = this.state;

		return children({
			createOrder,
			isLoading,
			error,
			orderFromText,
			orderToText,
			orderTimeout,
			orderIsDone,
			areCredsEmpty,
			isFormOpened,
			orderInfoBoxOpened,
			makeNewOffer,
			handleRedirectToCredentials,
			handleCancelOrder,
		});
	}
}

const mapStateToProps = store => ({
	isLoading: getLoadingOrderState(store),
	error: getOrderError(store),
	orderTimeout: getOrderTimeout(store),
	orderIsDone: getOrderIsDoneStatus(store),
	orderId: getOrderId(store),
	areCredsEmpty: getCredsEmptyStatus(store),
	orderFromText: getOrderFromTextInfo(store),
	orderToText: getOrderToTextInfo(store),
});

export const ReduxContainer = connect(
	mapStateToProps,
	null
)(WrappedContainer);
