import React from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends React.Component {
	render() {
		const { children, reset, ...restProps } = this.props;

		return children({
			reduxFormProps: restProps,
			reset,
		});
	}
}

export const FormContainer = reduxForm({
	form: "order",
})(WrappedContainer);
