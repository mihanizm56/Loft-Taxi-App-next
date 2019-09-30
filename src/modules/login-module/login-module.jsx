import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { LoginForm } from "../../components/molecules";

export const FormLoginModule = () => {
	return (
		<FormContainer>
			{({ reduxFormProps }) => (
				<ReduxContainer>
					{({ signInUser, isLoading }) => (
						<LoginForm
							// normalizeEmail={normalizeEmail}
							// normalizePassword={normalizePassword}
							signInUser={signInUser}
							isLoading={isLoading}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
