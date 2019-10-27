import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, MaskedInput, DatePicker } from "../../../atoms";
import { preventDefault } from "../../../../utils/helpers";
import { withTranslation } from "../../../../../i18n";
import "./credential-form.css";

const FormComponent = props => {
	const {
		change,
		saveUserCard,
		handleSubmit,
		normalizeCardUserValue,
		normalizeCardCVVValue,
		normalizeCardExpDateValue,
		t: translate,
	} = props;

	return (
		<>
			<h1 className="credentials-form__title">{translate("profile")}</h1>
			<h6 className="form-subtitle">{translate("payment method")}</h6>
			<form onSubmit={handleSubmit(saveUserCard)}>
				<div className="credentials-form-container">
					<div className="credentials-form__row-container">
						<div className="credentials-form__item">
							<Field
								name="cardUser"
								type="text"
								normalize={normalizeCardUserValue}
								component={TextField}
								label={translate("customer-name")}
								onDrop={preventDefault}
								inputProps={{
									style: { fontSize: "20px" },
								}}
							/>
						</div>
						<div className="credentials-form__item">
							<Field
								name="cardNumber"
								type="text"
								inputProps={{
									style: { fontSize: "20px" },
								}}
								component={MaskedInput}
								label={translate("card-number")}
								onDrop={preventDefault}
							/>
						</div>
					</div>
					<div className="credentials-form__row-container">
						<div className="credentials-form__item credentials-form__item--datepicker">
							<Field
								name="expDate"
								component={DatePicker}
								label={translate("exp-date")}
								inputProps={{
									style: {
										fontSize: "20px",
										display: "flex",
										alignItems: "flex-end",
									},
								}}
								fullWidth
								change={change}
								normalize={normalizeCardExpDateValue}
								onDrop={preventDefault}
							/>
						</div>
						<div className="credentials-form__item">
							<Field
								name="cvv"
								type="text"
								normalize={normalizeCardCVVValue}
								inputProps={{
									maxLength: 3,
									style: { fontSize: "20px" },
								}}
								component={TextField}
								label={translate("cvv")}
								onDrop={preventDefault}
							/>
						</div>
					</div>
					<div className="credentials-form__row-container button-submit-container">
						<Button type="submit" color="primary" variant="contained">
							{translate("button-save")}
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export const CredentialsForm = withTranslation("form-credentials")(
	FormComponent
);
