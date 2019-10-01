import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton, LoadingTextIndicator } from "../../../atoms";
import "../../../../styles/shared.css";
import "./auth-form.css";

export const AuthForm = props => {
	const {
		authInUser,
		handleSubmit,
		// normalizeEmail,
		// normalizePassword,
		isLoading,
	} = props;

	return (
		<div className="auth-form-container auth-form">
			{isLoading ? (
				<LoadingTextIndicator />
			) : (
				<form onSubmit={handleSubmit(authInUser)} className="auth-form">
					<h1 className="form__title">Форма создания нового пользователя</h1>
					<div className="form__field">
						<Field
							name="username"
							type="text"
							component={TextField}
							// normalize={normalizeEmail}
							label="Имя пользователя *"
						/>
					</div>
					<div className="form__field">
						<Field
							name="password"
							type="password"
							// normalize={normalizePassword}
							component={TextField}
							label="Пароль *"
						/>
					</div>
					<div className="form__button form__button--type-auth-in">
						<Button type="submit" style={{ fontSize: "20px" }}>
							Войти
						</Button>
					</div>
					<div className="form__button form__button--link-button form__button--type-login-user">
						<LinkButton
							path="/login"
							text="Войти под существующим пользователем"
							style={{ fontSize: "14px" }}
						/>
					</div>
				</form>
			)}
		</div>
	);
};
