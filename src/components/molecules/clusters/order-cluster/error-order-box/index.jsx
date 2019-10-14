import React from "react";
import Button from "@material-ui/core/Button";
import { ErrorIcon } from "../../../../atoms";
import "./index.css";

export const OrderErrorBox = ({ handleMakeNewOrder }) => {
	return (
		<div className="order-error-box">
			<div className="order-error-box__error-icon">
				<ErrorIcon />
			</div>
			<h5 className="order-error-box__title">Извините, произошла ошибка</h5>
			<div className="order-error-box__button">
				<Button variant="outlined" color="primary" onClick={handleMakeNewOrder}>
					Создать новый заказ
				</Button>
			</div>
		</div>
	);
};
