import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import {
	asyncValidateAuthFields,
	submitValidateAuthFields,
} from "../../services/validate/auth";

class WrappedContainer extends React.Component {
	normalizeUserInput = value =>
		value && value.replace(/[^0-9a-zA-Zа-яА-Я@_]+/, "");

	render() {
		const { children, ...restProps } = this.props;
		const { normalizeUserInput } = this;

		return children({
			SubmissionError,
			normalizeUserInput,
			submitValidateAuthFields,
			reduxFormProps: restProps,
		});
	}
}

export const FormContainer = reduxForm({
	asyncValidate: asyncValidateAuthFields,
	asyncBlurFields: ["username", "password"],
	form: "auth",
})(WrappedContainer);
