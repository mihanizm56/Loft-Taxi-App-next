import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton, LoadingTextIndicator } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import "../../../../styles/shared.css";

const FormComponent = props => {
	const {
		signInUser,
		handleSubmit,
		normalizeEmail,
		normalizePassword,
		isLoading,
		t: translate,
	} = props;

	return (
		<div className="auth-form-wrapper">
			<div className="auth-form-container login-form">
				{isLoading ? (
					<LoadingTextIndicator />
				) : (
					<form onSubmit={handleSubmit(signInUser)} className="auth-form">
						<h1 className="form__title">{translate("login-form.title")}</h1>
						<div className="form__field">
							<Field
								name="username"
								type="text"
								component={TextField}
								normalize={normalizeEmail}
								label={`${translate("login-form.username-label")}`}
							/>
						</div>
						<div className="form__field">
							<Field
								name="password"
								type="password"
								normalize={normalizePassword}
								component={TextField}
								label={`${translate("login-form.password-label")}`}
							/>
						</div>
						<div className="form__button form__button--type-sign-in">
							<Button type="submit" style={{ fontSize: "20px" }}>
								{translate("login-form.button-sign-in")}
							</Button>
						</div>
						<div className="form__button form__button--type-create-user">
							<LinkButton
								path="/auth"
								text={`${translate("login-form.button-link-sign-up")}`}
								style={{ fontSize: "14px" }}
							/>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export const LoginForm = withTranslation("common")(FormComponent);
