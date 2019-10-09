import React from "react";
import { connect } from "react-redux";
import {
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getLoadingState,
	getErrorCredsState,
	getAllFormValues,
	saveCredentialsAction,
} from "../../redux/modules/credentials";

class WrappedContainer extends React.Component {
	state = {
		isFormOpened: false,
	};

	openCredentialsForm = () => {
		this.setState({ isFormOpened: true });
	};

	saveUserCard = ({ cardName, expDate, cardNumber, cvv }) => {
		console.log("saveUserCard action cardName", cardName);
		console.log("saveUserCard action expDate", expDate);
		console.log("saveUserCard action cardNumber", cardNumber);
		console.log("saveUserCard action cvv", cvv);

		const { saveCardData } = this.props;

		saveCardData({ cardName, expDate, cardNumber, cvv });
		this.setState({ isFormOpened: false });
	};

	render() {
		const { isFormOpened } = this.state;
		const { children, isLoading, areCredsError, allFormValues } = this.props;
		const { saveUserCard, openCredentialsForm } = this;

		return children({
			saveUserCard,
			isLoading,
			isFormOpened,
			openCredentialsForm,
			areCredsError,
			allFormValues,
		});
	}
}

const mapStateToProps = store => {
	return {
		cardName: getCardNameState(store),
		expDate: getExpDateState(store),
		cardNumber: getCardNumberState(store),
		cvv: getCvvState(store),
		isLoading: getLoadingState(store),
		areCredsError: getErrorCredsState(store),
		allFormValues: getAllFormValues(store),
	};
};

export const ReduxContainer = connect(
	mapStateToProps,
	{
		saveCardData: saveCredentialsAction,
	}
)(WrappedContainer);
