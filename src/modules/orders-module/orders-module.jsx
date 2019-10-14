import React from "react";
import { OrdersViewSwitcher } from "./orders-view-switcher";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import "./styles/index.css";

export const OrdersModule = () => {
	return (
		<FormContainer>
			{({ reduxFormProps }) => (
				<ReduxContainer>
					{({ createOrder }) => (
						<OrdersViewSwitcher {...reduxFormProps} createOrder={createOrder} />
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
