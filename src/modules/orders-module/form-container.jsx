import React from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends React.Component {
	render() {
		const { children, ...restProps } = this.props;

		return children({
			reduxFormProps: restProps,
		});
	}
}

export const FormContainer = reduxForm({
	form: "credentials",
})(WrappedContainer);
