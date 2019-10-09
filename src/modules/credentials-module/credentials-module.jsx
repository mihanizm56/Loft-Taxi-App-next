import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { CredentialsViewSwitcher } from "./credentials-view-switcher";

export const CredentialsModule = () => {
	return (
		<FormContainer>
			{({ reduxFormProps }) => (
				<ReduxContainer>
					{({
						saveUserCard,
						isLoading,
						isFormOpened,
						openCredentialsForm,
						areCredsError,
						allFormValues,
					}) => (
						<CredentialsViewSwitcher
							allFormValues={allFormValues}
							// normalizeEmail={normalizeEmail}
							// normalizePassword={normalizePassword}
							isFormOpened={isFormOpened}
							openCredentialsForm={openCredentialsForm}
							saveUserCard={saveUserCard}
							isLoading={isLoading}
							areCredsError={areCredsError}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
