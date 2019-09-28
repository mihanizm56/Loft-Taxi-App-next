import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { LoginForm } from "../../components/molecules";

export const FormLoginModule = () => {
	return (
		<FormContainer>
			{({ normalizeEmail, normalizePassword, reduxFormProps }) => (
				<ReduxContainer>
					{({ signInUser }) => (
						<LoginForm
							normalizeEmail={normalizeEmail}
							normalizePassword={normalizePassword}
							signInUser={signInUser}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
