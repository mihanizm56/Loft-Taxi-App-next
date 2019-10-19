import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { TextField, LoadingTextIndicator } from "../../../../atoms";

import "./index.css";

export const AddOrderForm = ({
	createOrder,
	handleSubmit,
	isLoading,
	normalizeAddressInput,
}) => {
	return (
		<form onSubmit={handleSubmit(createOrder)} className="order-form">
			<h5 className="order-form__title ">Новый заказ</h5>
			{isLoading ? (
				<LoadingTextIndicator />
			) : (
				<>
					<div className="form__field">
						<Field
							name="adressFrom"
							type="text"
							component={TextField}
							normalize={normalizeAddressInput}
							label="Адрес отправления"
						/>
					</div>
					<div className="form__field">
						<Field
							name="adressTo"
							type="text"
							component={TextField}
							normalize={normalizeAddressInput}
							label="Адрес прибытия"
						/>
					</div>
					<div className="order-form__button">
						<Button type="submit" variant="outlined">
							Вызвать такси
						</Button>
					</div>
				</>
			)}
		</form>
	);
};
