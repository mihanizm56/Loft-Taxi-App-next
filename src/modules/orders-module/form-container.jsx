import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import {
	asyncValidateOrderFields,
	submitValidateOrderFields,
} from "../../services/validate/orders";

class WrappedContainer extends React.Component {
	normalizeAddressInput = value =>
		value && value.replace(/[^0-9a-zA-Zа-яА-Я]+/, "");

	render() {
		const { children, reset, ...restProps } = this.props;
		const { normalizeAddressInput } = this;

		return children({
			reduxFormProps: restProps,
			normalizeAddressInput,
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
