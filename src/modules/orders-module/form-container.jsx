import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import {
	asyncValidateOrderFields,
	submitValidateOrderFields,
} from "../../services/validate/orders";

class WrappedContainer extends React.Component {
	render() {
		const { children, reset, ...restProps } = this.props;

		return children({
			reduxFormProps: restProps,
			reset,
			SubmissionError,
			submitValidateOrderFields,
		});
	}
}

export const FormContainer = reduxForm({
	asyncValidate: asyncValidateOrderFields,
	asyncBlurFields: ["adressFrom", "adressTo"],
	form: "orders",
})(WrappedContainer);
