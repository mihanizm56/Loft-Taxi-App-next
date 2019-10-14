import React from "react";
import Button from "@material-ui/core/Button";
import "./index.css";

export const NewOrderBox = ({ handleMakeNewOrder }) => {
	return (
		<div className="order-new-box">
			<h5 className="order-new-box__title">Новый заказ</h5>
			<div className="order-new-box__button">
				<Button variant="outlined" color="primary" onClick={handleMakeNewOrder}>
					Создать новый заказ
				</Button>
			</div>
		</div>
	);
};
