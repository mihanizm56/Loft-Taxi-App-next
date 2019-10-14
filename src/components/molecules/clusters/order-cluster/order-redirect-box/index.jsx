import React from "react";
import Button from "@material-ui/core/Button";
import "./index.css";

export const OrderRedirectBox = ({ handleRedirect }) => {
	return (
		<div className="order-redirect-box">
			<h5 className="order-redirect-box__title">Нет платёжных данных</h5>
			<div className="order-redirect-box__button">
				<Button variant="outlined" color="primary" onClick={handleRedirect}>
					Ввести платёжные данные
				</Button>
			</div>
		</div>
	);
};
