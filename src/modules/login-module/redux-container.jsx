import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
	signInAction as signIn,
	isLoginLoading,
} from "../../redux/modules/auth";
import { withTranslation } from "../../../i18n";

class WrappedContainer extends React.Component {
	signInUser = ({ username, password }) => {
		console.log("test signInUser", username, password);

		const {
			SubmissionError,
			submitValidateAuthFields,
			signIn: signInAction,
			t: translate,
		} = this.props;

		const { validationError } = submitValidateAuthFields({
			username,
			password,
		});

		if (validationError) {
			throw new SubmissionError(validationError);
		} else {
			signInAction({ username, password, i18n: translate });
		}
	};

	render() {
		const { children, isLoading } = this.props;
		const { signInUser } = this;

		return children({ signInUser, isLoading });
	}
}

const mapStateToProps = store => {
	return {
		isLoading: isLoginLoading(store),
	};
};

const mapDispatchToProps = {
	signIn,
};

export const ReduxContainer = compose(
	withTranslation("errors"),
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(WrappedContainer);
