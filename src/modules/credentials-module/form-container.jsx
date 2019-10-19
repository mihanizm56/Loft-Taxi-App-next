import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { asyncValidateCredentialsFields } from "../../services/validate";
import { submitValidateCredentialsFields } from "../../services/validate/credentials";

class WrappedContainer extends React.Component {
	componentDidMount() {
		const { initialize } = this.props;
		initialize({ expDate: new Date() });
	}

	normalizeCardUserValue = value => value && value.toUpperCase();

	normalizeCardExpDateValue = value => {
		console.log("normalizeCardExpDateValue value", value);

		return value;
	};

	normalizeCardCVVValue = value => value.trim();

	render() {
		const { children, handleSubmit, change } = this.props;
		const {
			normalizeCardUserValue,
			normalizeCardCVVValue,
			normalizeCardExpDateValue,
		} = this;

		return children({
			change,
			handleSubmit,
			normalizeCardUserValue,
			normalizeCardCVVValue,
			normalizeCardExpDateValue,
			SubmissionError,
			submitValidateCredentialsFields,
		});
	}
}

export const FormContainer = reduxForm({
	asyncValidate: asyncValidateCredentialsFields,
	asyncBlurFields: ["cvv", "cardNumber", "cardUser", "expDate"],
	form: "credentials",
})(WrappedContainer);
