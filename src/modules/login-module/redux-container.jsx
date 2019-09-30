import React from "react";
import { connect } from "react-redux";
import {
	signInAction as signIn,
	isLoginLoading,
} from "../../redux/modules/auth";

class WrappedContainer extends React.Component {
	signInUser = ({ username, password }) => {
		console.log("test signInUser", username, password);
		const { signIn: signInAction } = this.props;

		if (username && password) {
			signInAction({ username, password });
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
		// loggedIn: getLoginState(store),
		isLoading: isLoginLoading(store),
	};
};

const mapDispatchToProps = {
	signIn,
};

export const ReduxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
