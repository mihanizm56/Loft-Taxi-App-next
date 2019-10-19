import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { AuthForm } from "../../components/molecules";

export const FormAuthModule = () => {
	return (
		<FormContainer>
			{({
				reduxFormProps,
				normalizeUserInput,
				SubmissionError,
				submitValidateAuthFields,
			}) => (
				<ReduxContainer
					SubmissionError={SubmissionError}
					submitValidateAuthFields={submitValidateAuthFields}
				>
					{({ authInUser, isLoading }) => (
						<AuthForm
							normalizeUserInput={normalizeUserInput}
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
