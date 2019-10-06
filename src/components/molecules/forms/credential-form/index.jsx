import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, MaskedInput } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import "./credential-form.css";

const FormComponent = ({ saveUserCard, handleSubmit }) => {
	return (
		<div className="credentials-form-wrapper">
			<h1 className="credentials-form__title">Профиль</h1>
			<h6 className="form-subtitle">Способ оплаты</h6>
			<div className="credentials-form-container">
				<form onSubmit={handleSubmit(saveUserCard)}>
					<div className="credentials-form__col-container">
						<div className="credentials-form__row-container">
							<div className="credentials-form__item">
								<Field
									name="cardName"
									type="text"
									// normalize={normalizeCardName}
									component={TextField}
									label="Имя владельца *"
									// onDrop={preventDefault}
								/>
							</div>
							<div className="credentials-form__item">
								<Field
									name="expDate"
									type="date"
									// normalize={normalizeToEmpty}
									component={TextField}
									label="Дата окончания действия *"
									InputLabelProps={{
										shrink: true,
									}}
									// onDrop={preventDefault}
								/>
							</div>
						</div>
						<div className="credentials-form__row-container">
							<div className="credentials-form__item">
								<Field
									name="cardNumber"
									type="text"
									inputProps={{
										maxLength: 16,
									}}
									component={MaskedInput}
									label="Номер карты *"
									// onDrop={preventDefault}
								/>
							</div>
							<div className="credentials-form__item">
								<Field
									name="cvv"
									type="text"
									inputProps={{
										maxLength: 3,
									}}
									// normalize={normalizeToEmpty}
									component={TextField}
									label="CVV *"
									// onDrop={preventDefault}
								/>
							</div>
						</div>
					</div>
					<div className="credentials-form__button">
						<Button type="submit" color="primary" variant="contained">
							Сохранить
						</Button>
					</div>
				</form>
			</div>
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
