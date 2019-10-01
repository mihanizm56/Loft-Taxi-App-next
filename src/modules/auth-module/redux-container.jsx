import React from "react";
import { connect } from "react-redux";
import {
	authInAction as authIn,
	isLoginLoading as isAuthLoading,
} from "../../redux/modules/auth";

class WrappedContainer extends React.Component {
	authInUser = ({ username, password }) => {
		console.log("test authInUser", username, password);
		const { authIn: authInAction } = this.props;

		if (username && password) {
			authInAction({ username, password });
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

export const ReduxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
