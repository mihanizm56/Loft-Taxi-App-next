import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
	authInAction as authIn,
	isLoginLoading as isAuthLoading,
} from "../../redux/modules/auth";
import { withTranslation } from "../../../i18n";

class WrappedContainer extends React.Component {
	authInUser = ({ username, password }) => {
		console.log("test authInUser", username, password);
		const {
			authIn: authInAction,
			SubmissionError,
			submitValidateAuthFields,
			t: translate,
		} = this.props;

		const { validationError } = submitValidateAuthFields({
			username,
			password,
		});

		if (validationError) {
			throw new SubmissionError(validationError);
		} else {
			authInAction({ username, password, i18n: translate });
		}
	};

	render() {
		const { children, isLoading } = this.props;
		const { authInUser } = this;

		return children({ authInUser, isLoading });
	}
}

const mapStateToProps = store => {
	return {
		isLoading: isAuthLoading(store),
	};
};

const mapDispatchToProps = {
	authIn,
};

export const ReduxContainer = compose(
	withTranslation("errors"),
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(WrappedContainer);
