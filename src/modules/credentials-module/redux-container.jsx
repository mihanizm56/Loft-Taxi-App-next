import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
	getcardUserState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getLoadingState,
	getErrorCredsState,
	getAllFormValues,
	saveCredentialsAction,
} from "../../redux/modules/credentials";
import { withTranslation } from "../../../i18n";

class WrappedContainer extends React.Component {
	state = {
		isFormOpened: false,
	};

	openCredentialsForm = () => {
		this.setState({ isFormOpened: true });
	};

	saveUserCard = ({ cardUser, expDate, cardNumber, cvv }) => {
		const trimmedCardUser = cardUser && cardUser.trim();
		const {
			SubmissionError,
			saveCardData,
			submitValidateCredentialsFields,
		} = this.props;

		const { validationError } = submitValidateCredentialsFields({
			cardUser: trimmedCardUser,
			expDate,
			cardNumber,
			cvv,
		});

		if (validationError) {
			throw new SubmissionError(validationError);
		} else {
			// trim card user value because cant do this when normalizing and in validation
			saveCardData({ cardUser: trimmedCardUser, expDate, cardNumber, cvv });
			this.setState({ isFormOpened: false });
		}
	};

	render() {
		const { isFormOpened } = this.state;
		const {
			children,
			isLoading,
			areCredsError,
			allFormValues,
			t: translate,
		} = this.props;
		const { saveUserCard, openCredentialsForm } = this;

		return children({
			saveUserCard,
			isLoading,
			isFormOpened,
			openCredentialsForm,
			areCredsError,
			allFormValues,
			translate,
		});
	}
}

const mapStateToProps = store => {
	return {
		cardUser: getcardUserState(store),
		expDate: getExpDateState(store),
		cardNumber: getCardNumberState(store),
		cvv: getCvvState(store),
		isLoading: getLoadingState(store),
		areCredsError: getErrorCredsState(store),
		allFormValues: getAllFormValues(store),
	};
};

export const ReduxContainer = compose(
	withTranslation(["additional-text"]),
	connect(
		mapStateToProps,
		{
			saveCardData: saveCredentialsAction,
		}
	)
)(WrappedContainer);
