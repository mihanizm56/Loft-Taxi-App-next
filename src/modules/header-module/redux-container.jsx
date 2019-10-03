import React from "react";
import { connect } from "react-redux";
import { Router } from "../../../i18n";
import {
	getLoginStatus,
	logoutAction as logout,
} from "../../redux/modules/auth";

const getHrefParam = hrefString => {
	const arrayOfParams = hrefString.split("/");
	const lastParam = arrayOfParams[arrayOfParams.length - 1];

	return lastParam;
};

class WrappedContainer extends React.Component {
	handleMainButtonClick = () => {
		const lastCheckHrefParam = getHrefParam(window.location.href);

		if (lastCheckHrefParam !== "main") {
			Router.push("/main");
		}
	};

	handleCredentialsButtonClick = () => {
		const lastCheckHrefParam = getHrefParam(window.location.href);

		if (lastCheckHrefParam !== "credentials") {
			Router.push("/credentials");
		}
		// console.log("Router", window.location.href);
	};

	handleLogoutButtonClick = () => {
		const { logout: logoutAction } = this.props;

		logoutAction();
	};

	render() {
		const { children, isLogined } = this.props;
		const {
			handleMainButtonClick,
			handleCredentialsButtonClick,
			handleLogoutButtonClick,
		} = this;

		return children({
			handleMainButtonClick,
			handleCredentialsButtonClick,
			handleLogoutButtonClick,
			isLogined,
		});
	}
}

const mapStateToProps = store => {
	return {
		isLogined: getLoginStatus(store),
	};
};

const mapDispatchToProps = {
	logout,
};

export const ReduxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
