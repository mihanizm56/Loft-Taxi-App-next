import React from "react";
import { connect } from "react-redux";
import {
	putCredentialsAction,
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getLoadingState,
} from "../../redux/modules/credentials";

class WrappedContainer extends React.Component {
	saveUserCard = ({ cardName, expDate, cardNumber, cvv }) => {
		console.log("saveUserCard action cardName", cardName);
		console.log("saveUserCard action expDate", expDate);
		console.log("saveUserCard action cardNumber", cardNumber);
		console.log("saveUserCard action cvv", cvv);
		// const { saveCredentialsAction } = this.props;
		// saveCredentialsAction({ cardName, expDate, cardNumber, cvv });
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
	{ saveCardData: putCredentialsAction }
)(WrappedContainer);
