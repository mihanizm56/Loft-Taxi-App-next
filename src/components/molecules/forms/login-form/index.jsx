import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton, LoadingTextIndicator } from "../../../atoms";
import "./login-form.css";

export const LoginForm = props => {
	const {
		signInUser,
		handleSubmit,
		normalizeEmail,
		normalizePassword,
		isLoading,
	} = props;

	return (
		<div className="auth-form-container login-form">
			{isLoading ? (
				<LoadingTextIndicator />
			) : (
				<form onSubmit={handleSubmit(signInUser)} className="auth-form">
					<h1 className="form__title">Форма входа</h1>
					<div className="form__field">
						<Field
							name="username"
							type="text"
							component={TextField}
							normalize={normalizeEmail}
							label="Имя пользователя *"
						/>
					</div>
					<div className="form__field">
						<Field
							name="password"
							type="password"
							normalize={normalizePassword}
							component={TextField}
							label="Пароль *"
						/>
					</div>
					<div className="form__button form__button--type-sign-in">
						<Button type="submit" style={{ fontSize: "20px" }}>
							Войти
						</Button>
					</div>
					<div className="form__button form__button--type-create-user">
						<LinkButton
							path="/auth"
							text="Создать нового пользователя"
							style={{ fontSize: "14px" }}
						/>
					</div>
				</form>
			)}
		</div>
	);
};
