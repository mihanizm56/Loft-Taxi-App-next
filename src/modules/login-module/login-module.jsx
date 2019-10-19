import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { LoginForm } from "../../components/molecules";

export const FormLoginModule = () => {
	return (
		<FormContainer>
			{({
				normalizeUserInput,
				reduxFormProps,
				submitValidateAuthFields,
				SubmissionError,
			}) => (
				<ReduxContainer
					submitValidateAuthFields={submitValidateAuthFields}
					SubmissionError={SubmissionError}
				>
					{({ signInUser, isLoading }) => (
						<LoginForm
							signInUser={signInUser}
							isLoading={isLoading}
							normalizeUserInput={normalizeUserInput}
							{...reduxFormProps}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
