import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, MaskedInput, DatePicker } from "../../../atoms";
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
	} = props;

	return (
		<>
			<h1 className="credentials-form__title">Профиль</h1>
			<h6 className="form-subtitle">Способ оплаты</h6>

			<form onSubmit={handleSubmit(saveUserCard)}>
				<div className="credentials-form-container">
					<div className="credentials-form__row-container">
						<div className="credentials-form__item">
							<Field
								name="cardUser"
								type="text"
								normalize={normalizeCardUserValue}
								component={TextField}
								label="Имя владельца"
								// onDrop={preventDefault}
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
								label="Номер карты *"
								// onDrop={preventDefault}
							/>
						</div>
					</div>
					<div className="credentials-form__row-container">
						<div className="credentials-form__item credentials-form__item--datepicker">
							<Field
								name="expDate"
								component={DatePicker}
								label="Дата окончания действия"
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
								// onDrop={preventDefault}
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
								label="CVV"
								// onDrop={preventDefault}
							/>
						</div>
					</div>
					<div className="credentials-form__row-container button-submit-container">
						<Button type="submit" color="primary" variant="contained">
							Сохранить
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export const CredentialsForm = withTranslation("common")(FormComponent);
