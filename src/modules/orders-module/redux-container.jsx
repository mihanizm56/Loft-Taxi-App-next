import React from "react";
import { connect } from "react-redux";

class WrappedContainer extends React.Component {
	createOrder = ({ adressFrom, adressTo }) =>
		console.log("order create", adressFrom, adressTo);

	render() {
		const { children } = this.props;
		const { createOrder } = this;

		return children({ createOrder });
	}
}

export const ReduxContainer = connect(
	() => ({}),
	null
)(WrappedContainer);
