import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { AuthForm } from "../../components/molecules";

export const FormAuthModule = () => {
	return (
		<FormContainer>
			{({ reduxFormProps }) => (
				<ReduxContainer>
					{({ authInUser, isLoading }) => (
						<AuthForm
							// normalizeEmail={normalizeEmail}
							// normalizePassword={normalizePassword}
							authInUser={authInUser}
							isLoading={isLoading}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
