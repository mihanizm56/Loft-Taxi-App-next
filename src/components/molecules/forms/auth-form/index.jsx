import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton, LoadingTextIndicator } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import "../../../../styles/shared.css";
import "./auth-form.css";

const FormComponent = props => {
	const {
		authInUser,
		handleSubmit,
		// normalizeEmail,
		// normalizePassword,
		t: translate,
		isLoading,
	} = props;

	return (
		<div className="auth-form-container auth-form">
			{isLoading ? (
				<LoadingTextIndicator />
			) : (
				<form onSubmit={handleSubmit(authInUser)} className="auth-form">
					<h1 className="form__title">{translate("auth-form.title")}</h1>
					<div className="form__field">
						<Field
							name="username"
							type="text"
							component={TextField}
							// normalize={normalizeEmail}
							label={`${translate("auth-form.username-label")}`}
						/>
					</div>
					<div className="form__field">
						<Field
							name="password"
							type="password"
							component={TextField}
							// normalize={normalizePassword}
							label={`${translate("auth-form.password-label")}`}
						/>
					</div>
					<div className="form__button form__button--type-auth-in">
						<Button type="submit" style={{ fontSize: "20px" }}>
							{translate("auth-form.button-sign-up")}
						</Button>
					</div>
					<div className="form__button form__button--link-button form__button--type-login-user">
						<LinkButton
							path="/login"
							text={`${translate("auth-form.button-link-sign-in")}`}
							style={{ fontSize: "14px" }}
						/>
					</div>
				</form>
			)}
		</div>
	);
};

export const AuthForm = withTranslation("common")(FormComponent);
