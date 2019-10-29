import React from "react";
import Button from "@material-ui/core/Button";
import { LinkButton } from "../../../atoms";
import { withTranslation } from "../../../../../i18n";
import "./redirect-box-credentials.css";

const WrappedComponent = ({ openCredentialsForm, t: translate }) => {
	return (
		<>
			<h1 className="redirect-credentials-box__title">Профиль</h1>
			<h6 className="redirect-credentials-box__subtitle">
				{translate("updated-data")}
			</h6>
			<div className="redirect-credentials-box__buttons">
				<Button
					variant="outlined"
					color="primary"
					onClick={openCredentialsForm}
				>
					{translate("change-card-data")}
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

export const CredentialsRedirectBox = withTranslation(
	"redirect-credentials-box"
)(WrappedComponent);
