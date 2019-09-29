import React from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends React.Component {
	// normalizeEmail = value => value.replace(/^\s+/, "");

	// normalizePassword = value => value.replace(/^\s+/, "");

	render() {
		const { children, ...restProps } = this.props;
		// const { normalizeEmail, normalizePassword } = this;

		return children({
			// normalizeEmail,
			// normalizePassword,
			reduxFormProps: restProps,
		});
	}
}

export const FormContainer = reduxForm({
	form: "login",
})(WrappedContainer);
