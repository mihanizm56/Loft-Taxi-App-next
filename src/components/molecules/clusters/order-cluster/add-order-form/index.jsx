import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { preventDefault } from "../../../../../utils/helpers";
import { TextField, LoadingTextIndicator } from "../../../../atoms";
import { withTranslation } from "../../../../../../i18n";

import "./index.css";

export const FormComponent = ({
	createOrder,
	handleSubmit,
	isLoading,
	t: translate,
}) => {
	return (
		<form onSubmit={handleSubmit(createOrder)} className="order-form">
			<h5 className="order-form__title ">{translate("new-order")}</h5>
			{isLoading ? (
				<LoadingTextIndicator />
			) : (
				<>
					<div className="form__field">
						<Field
							name="adressFrom"
							type="text"
							component={TextField}
							onDrop={preventDefault}
							label={translate("address-from-label")}
						/>
					</div>
					<div className="form__field">
						<Field
							name="adressTo"
							type="text"
							component={TextField}
							onDrop={preventDefault}
							label={translate("address-to-label")}
						/>
					</div>
					<div className="order-form__button">
						<Button type="submit" variant="outlined">
							{translate("button-make-order")}
						</Button>
					</div>
				</>
			)}
		</form>
	);
};

export const AddOrderForm = withTranslation("form-order")(FormComponent);
