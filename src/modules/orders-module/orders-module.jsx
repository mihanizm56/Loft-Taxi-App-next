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
					{({
						createOrder,
						isLoading,
						error,
						orderFromText,
						orderToText,
						orderTimeout,
						areCredsEmpty,
						isFormOpened,
						orderInfoBoxOpened,
						makeNewOffer,
						handleRedirectToCredentials,
						handleCancelOrder,
					}) => (
						<OrdersViewSwitcher
							{...reduxFormProps}
							createOrder={createOrder}
							isLoading={isLoading}
							error={error}
							orderFromText={orderFromText}
							orderToText={orderToText}
							orderTimeout={orderTimeout}
							isFormOpened={isFormOpened}
							orderInfoBoxOpened={orderInfoBoxOpened}
							makeNewOffer={makeNewOffer}
							handleRedirectToCredentials={handleRedirectToCredentials}
							handleCancelOrder={handleCancelOrder}
							areCredsEmpty={areCredsEmpty}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
