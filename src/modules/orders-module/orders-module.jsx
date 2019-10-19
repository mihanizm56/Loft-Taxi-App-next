import React from "react";
import { OrdersViewSwitcher } from "./orders-view-switcher";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import "./styles/index.css";

export const OrdersModule = () => {
	return (
		<FormContainer>
			{({
				reduxFormProps,
				reset,
				normalizeAddressInput,
				SubmissionError,
				submitValidateOrderFields,
			}) => (
				<ReduxContainer
					submitValidateOrderFields={submitValidateOrderFields}
					reset={reset}
					SubmissionError={SubmissionError}
				>
					{({
						createOrder,
						isLoading,
						orderError,
						orderFromText,
						orderToText,
						orderTimeout,
						areCredsEmpty,
						isFormOpened,
						orderInfoBoxOpened,
						makeNewOrder,
						handleRedirectToCredentials,
						handleCancelOrder,
						cancelOrder,
					}) => (
						<OrdersViewSwitcher
							normalizeAddressInput={normalizeAddressInput}
							createOrder={createOrder}
							isLoading={isLoading}
							orderError={orderError}
							orderFromText={orderFromText}
							orderToText={orderToText}
							orderTimeout={orderTimeout}
							isFormOpened={isFormOpened}
							orderInfoBoxOpened={orderInfoBoxOpened}
							makeNewOrder={makeNewOrder}
							handleRedirectToCredentials={handleRedirectToCredentials}
							handleCancelOrder={handleCancelOrder}
							areCredsEmpty={areCredsEmpty}
							cancelOrder={cancelOrder}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
