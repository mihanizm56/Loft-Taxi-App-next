import React from "react";
import { connect } from "react-redux";
import { signInAction as signIn } from "../../redux/modules/auth";

class WrappedContainer extends React.Component {
	signInUser = ({ email, password }) => {
		console.log("test signInUser", email, password);

		// if (email && password) {
		// 	this.props.signIn(email, password);
		// }
	};

	render() {
		const { children } = this.props;
		const { signInUser } = this;

		return children({ signInUser });
	}
}

// const mapStateToProps = store => {
// 	return {
// loggedIn: getLoginState(store),
// };
// };

const mapDispatchToProps = {
	signIn,
};

export const ReduxContainer = connect(
	// mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
