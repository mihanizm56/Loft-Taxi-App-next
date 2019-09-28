import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton } from "../../../atoms";

export const LoginForm = props => {
	const { signInUser, handleSubmit, normalizeEmail, normalizePassword } = props;

	return (
		<div>
			<form onSubmit={handleSubmit(signInUser)} className="auth-form">
				<div>
					username
					<Field
						name="email"
						type="text"
						component={TextField}
						normalize={normalizeEmail}
						label="Имя пользователя *"
					/>
				</div>
				<div>
					password
					<Field
						name="password"
						type="password"
						normalize={normalizePassword}
						component={TextField}
						label="Пароль *"
					/>
				</div>
				<div className="auth-form__button">
					<Button type="submit">Войти</Button>
				</div>
				<div>
					to auth
					<LinkButton handleClick={() => {}} path="/auth" text="auth" />
				</div>
			</form>
		</div>
	);
};
