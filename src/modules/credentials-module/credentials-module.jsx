import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { CredentialsForm } from "../../components/molecules";

export const CredentialsModule = () => {
	return (
		<FormContainer>
			{({ reduxFormProps }) => (
				<ReduxContainer>
					{({ saveUserCard, isLoading }) => (
						<CredentialsForm
							// normalizeEmail={normalizeEmail}
							// normalizePassword={normalizePassword}
							saveUserCard={saveUserCard}
							isLoading={isLoading}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
