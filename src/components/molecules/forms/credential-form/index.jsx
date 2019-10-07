import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, MaskedInput, DatePicker } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import "./credential-form.css";

const FormComponent = ({ saveUserCard, handleSubmit }) => {
	return (
		<div className="credentials-form-wrapper">
			<h1 className="credentials-form__title">Профиль</h1>
			<h6 className="form-subtitle">Способ оплаты</h6>

			<form onSubmit={handleSubmit(saveUserCard)}>
				<div className="credentials-form-container">
					<div className="credentials-form__row-container">
						<div className="credentials-form__item">
							<Field
								name="cardName"
								type="text"
								// normalize={normalizeCardName}
								component={TextField}
								label="Имя владельца *"
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
									maxLength: 16,
									style: { fontSize: "20px" },
								}}
								component={MaskedInput}
								label="Номер карты *"
								// onDrop={preventDefault}
							/>
						</div>
					</div>
					<div className="credentials-form__row-container">
						<div className="credentials-form__item">
							<Field
								name="expDate"
								// normalize={normalizeToEmpty}
								component={DatePicker}
								label="Дата окончания действия *"
								inputProps={{
									style: { fontSize: "20px" },
								}}
								fullWidth
								// onDrop={preventDefault}
							/>
						</div>
						<div className="credentials-form__item">
							<Field
								name="cvv"
								type="text"
								inputProps={{
									maxLength: 3,
									style: { fontSize: "20px" },
								}}
								// normalize={normalizeToEmpty}
								component={TextField}
								label="CVV *"

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
		</div>
	);
};

export const CredentialsForm = withTranslation("common")(FormComponent);

const nullFunc = () => {};

CredentialsForm.defaultProps = {
	saveUserCard: nullFunc,
	normalizeCardUser: nullFunc,
	normalizeCardNumber: nullFunc,
	normalizeCardCVV: nullFunc,
};
