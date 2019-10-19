import React from "react";
import { reduxForm } from "redux-form";
import { asyncValidateCredentialsFields } from "../../services/validate";

class WrappedContainer extends React.Component {
	componentDidMount() {
		const { initialize } = this.props;
		initialize({ expDate: new Date() });
	}

	normalizeCardUserValue = value => value && value.toUpperCase().trim();

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
		});
	}
}

export const FormContainer = reduxForm({
	asyncValidate: asyncValidateCredentialsFields,
	// asyncValidate: asyncValidateForCredentials,
	asyncBlurFields: ["cvv", "cardNumber", "cardUser", "expDate"],
	form: "orders",
})(WrappedContainer);
