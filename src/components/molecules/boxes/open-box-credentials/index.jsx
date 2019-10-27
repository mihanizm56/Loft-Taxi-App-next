import React from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "../../../../../i18n";

import "./open-box-credentials.css";

export const WrappedComponent = ({ openCredentialsForm, t: translate }) => {
	return (
		<>
			<h1 className="open-form-box__title">
				{translate("enter-card-data-main-title")}
			</h1>
			<h6 className="open-form-box__subtitle">
				{translate("enter-card-data-sub-title")}
			</h6>
			<div className="open-form-box__button">
				<Button
					variant="outlined"
					color="primary"
					onClick={openCredentialsForm}
				>
					{translate("enter-card-data-button")}
				</Button>
			</div>
		</>
	);
};

export const CredentialsOpenFormBox = withTranslation("open-credentials-box")(
	WrappedComponent
);
