import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LinkButton, LoadingTextIndicator } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import { preventDefault } from "../../../../utils/helpers";
import "../../../../styles/shared.css";

const FormComponent = props => {
	const {
		signInUser,
		handleSubmit,
		normalizeUserInput,
		isLoading,
		t: translate,
	} = props;

	return (
		<div className="auth-form-wrapper">
			<div className="auth-form-container login-form">
				{isLoading ? (
					<LoadingTextIndicator
						text={translate("additional-text:loading-indicator-text")}
					/>
				) : (
					<form onSubmit={handleSubmit(signInUser)} className="auth-form">
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
								normalize={normalizeUserInput}
								component={TextField}
								onDrop={preventDefault}
								label={`${translate("password-label")}`}
							/>
						</div>
						<div className="form__button form__button--type-sign-in">
							<Button type="submit" style={{ fontSize: "20px" }}>
								{translate("button-sign-in")}
							</Button>
						</div>
						<div className="form__button form__button--type-create-user">
							<LinkButton
								path="/auth"
								text={`${translate("button-link-sign-up")}`}
								style={{ fontSize: "14px" }}
							/>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export const LoginForm = withTranslation(["form-login", "additional-text"])(
	FormComponent
);
