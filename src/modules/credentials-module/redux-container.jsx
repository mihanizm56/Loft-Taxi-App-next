import React from "react";
import { connect } from "react-redux";
import {
	saveCredentialsAction,
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getLoadingState,
} from "../../redux/modules/credentials";

class WrappedContainer extends React.Component {
	saveUserCard = ({ cardName, expDate, cardNumber, cvv }) => {
		console.log("saveUserCard action", cardName, expDate, cardNumber, cvv);
		// const { saveCardData } = this.props;
		// saveCardData(cardName, expDate, cardNumber, cvv);
	};

	render() {
		const { children, isLoading } = this.props;
		const { saveUserCard } = this;

		return children({ saveUserCard, isLoading });
	}
}

const mapStateToProps = store => {
	return {
		cardName: getCardNameState(store),
		expDate: getExpDateState(store),
		cardNumber: getCardNumberState(store),
		cvv: getCvvState(store),
		isLoading: getLoadingState(store),
	};
};

export const ReduxContainer = connect(
	mapStateToProps,
	{ saveCredentialsAction }
)(WrappedContainer);