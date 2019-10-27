import React from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "../../../../../../i18n";
import "./index.css";

export const WrappedComponent = ({ handleRedirect, t: translate }) => {
	return (
		<div className="order-redirect-box">
			<h5 className="order-redirect-box__title">
				{translate("no-payment-data")}
			</h5>
			<div className="order-redirect-box__button">
				<Button variant="outlined" color="primary" onClick={handleRedirect}>
					{translate("enter-payment-data")}
				</Button>
			</div>
		</div>
	);
};

export const OrderRedirectBox = withTranslation("order-redirect-box")(
	WrappedComponent
);
