import React from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "../../../../../../i18n";
import { ErrorIcon } from "../../../../atoms";
import "./index.css";

export const WrappedComponent = ({ handleMakeNewOrder, t: translate }) => {
	return (
		<div className="order-error-box">
			<div className="order-error-box__error-icon">
				<ErrorIcon />
			</div>
			<h5 className="order-error-box__title">{translate("error-title")}</h5>
			<div className="order-error-box__button">
				<Button variant="outlined" color="primary" onClick={handleMakeNewOrder}>
					{translate("button-make-new-order")}
				</Button>
			</div>
		</div>
	);
};

export const OrderErrorBox = withTranslation("order-error-box")(
	WrappedComponent
);
