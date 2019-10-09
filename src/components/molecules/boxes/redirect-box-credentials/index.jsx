import React from "react";
import Button from "@material-ui/core/Button";
import { LinkButton } from "../../../atoms";
import "./redirect-box-credentials.css";

export const CredentialsRedirectBox = ({ openCredentialsForm }) => {
	return (
		<>
			<h1 className="redirect-credentials-box__title">Профиль</h1>
			<h6 className="redirect-credentials-box__subtitle">
				Платёжные данные обновлены. Теперь вы можете заказывать такси.
			</h6>
			<div className="redirect-credentials-box__buttons">
				<Button
					variant="outlined"
					color="primary"
					onClick={openCredentialsForm}
				>
					Изменить данные кредитной карты
				</Button>
				<LinkButton
					path="/main"
					text="Перейти на главную страницу"
					variant="outlined"
					color="primary"
				/>
			</div>
		</>
	);
};
