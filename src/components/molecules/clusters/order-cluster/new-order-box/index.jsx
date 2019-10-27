import React from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "../../../../../../i18n";
import "./index.css";

export const WrappedComponent = ({ handleMakeNewOrder, t: translate }) => {
	return (
		<div className="order-new-box">
			<h5 className="order-new-box__title">{translate("new-order")}</h5>
			<div className="order-new-box__button">
				<Button variant="outlined" color="primary" onClick={handleMakeNewOrder}>
					{translate("button-make-new-order")}
				</Button>
			</div>
		</div>
	);
};

export const NewOrderBox = withTranslation("order-create-box")(
	WrappedComponent
);
