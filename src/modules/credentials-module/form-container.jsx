import React from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends React.Component {
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
	// asyncValidate: asyncValidateForCredentials,
	// asyncBlurFields: ["cvv", "cardNumber", "cardUser", "expDate"],
	form: "orders",
})(WrappedContainer);
