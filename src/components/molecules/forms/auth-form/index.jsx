import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton, LoadingTextIndicator } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import { preventDefault } from "../../../../utils/helpers";
import "../../../../styles/shared.css";
import "./index.css";

const FormComponent = props => {
	const {
		authInUser,
		handleSubmit,
		normalizeUserInput,
		t: translate,
		isLoading,
	} = props;

	return (
		<div className="auth-form-wrapper">
			<div className="auth-form-container auth-form">
				{isLoading ? (
					<LoadingTextIndicator
						text={translate("additional-text:loading-indicator-text")}
					/>
				) : (
					<form onSubmit={handleSubmit(authInUser)} className="auth-form">
						<h1 className="form__title">{translate("title")}</h1>
						<div className="form__field">
							<Field
								name="username"
								type="text"
								component={TextField}
								normalize={normalizeUserInput}
								onDrop={preventDefault}
								label={`${translate("username-label")}`}
							/>
						</div>
						<div className="form__field">
							<Field
								name="password"
								type="password"
								component={TextField}
								normalize={normalizeUserInput}
								onDrop={preventDefault}
								label={`${translate("password-label")}`}
							/>
						</div>
						<div className="form__button form__button--type-auth-in">
							<Button type="submit" style={{ fontSize: "20px" }}>
								{translate("button-sign-up")}
							</Button>
						</div>
						<div className="form__button form__button--link-button form__button--type-login-user">
							<LinkButton
								path="/login"
								text={`${translate("button-link-sign-in")}`}
								style={{ fontSize: "14px" }}
							/>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export const AuthForm = withTranslation(["form-auth", "additional-text"])(
	FormComponent
);
