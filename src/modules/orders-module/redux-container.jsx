import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Router, withTranslation } from "../../../i18n";
import {
	getLoadingOrderState,
	getOrderError,
	getOrderTimeout,
	getOrderIsDoneStatus,
	getOrderId,
	getCredsEmptyStatus,
	getOrderFromTextInfo,
	getOrderToTextInfo,
	addNewOrder as addNewOrderAction,
	removeOrderErrorAction,
	resetOrderData,
	cancelOrder as cancelOrderAction,
} from "../../redux/modules/orders";
import { sanitizeAddressField } from "../../utils/sanitizers";

class WrappedContainer extends React.Component {
	static getDerivedStateFromProps(nextProps) {
		const { orderIsDone } = nextProps;

		console.log("orderIsDone", orderIsDone);

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
		const {
			submitValidateOrderFields,
			addNewOrder,
			SubmissionError,
			t: i18n,
		} = this.props;
		const { validationError } = submitValidateOrderFields({
			adressFrom,
			adressTo,
		});

		if (validationError) {
			throw new SubmissionError(validationError);
		} else {
			addNewOrder({
				from: sanitizeAddressField(adressFrom),
				to: sanitizeAddressField(adressTo),
				i18n,
			});
		}
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
			t: translate,
		} = this.props;
		const {
			createOrder,
			makeNewOrder,
			handleRedirectToCredentials,
			handleCancelOrder,
		} = this;
		const { isFormOpened, orderInfoBoxOpened } = this.state;

		return children({
			translate,
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

export const ReduxContainer = compose(
	withTranslation(["form-order", "errors", "additional-text"]),
	connect(
		mapStateToProps,
		{
			addNewOrder: addNewOrderAction,
			removeOrderError: removeOrderErrorAction,
			resetData: resetOrderData,
			cancelOrder: cancelOrderAction,
		}
	)
)(WrappedContainer);
