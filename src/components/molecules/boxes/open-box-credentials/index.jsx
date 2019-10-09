import React from "react";
import Button from "@material-ui/core/Button";
import "./open-box-credentials.css";

export const CredentialsOpenFormBox = ({ openCredentialsForm }) => {
	return (
		<>
			<h1 className="open-form-box__title">Профиль</h1>
			<h6 className="open-form-box__subtitle">
				Введите данные кредитной карты
			</h6>
			<div className="open-form-box__button">
				<Button
					variant="outlined"
					color="primary"
					onClick={openCredentialsForm}
				>
					Ввести данные кредитной карты
				</Button>
			</div>
		</>
	);
};
