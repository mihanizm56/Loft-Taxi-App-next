import React from "react";
import { FormContainer } from "./form-container";
import { ReduxContainer } from "./redux-container";
import { CredentialsViewSwitcher } from "./credentials-view-switcher";

export const CredentialsModule = () => {
	return (
		<FormContainer>
			{({
				change,
				handleSubmit,
				normalizeCardUserValue,
				normalizeCardCVVValue,
				normalizeCardExpDateValue,
				submitValidateCredentialsFields,
				SubmissionError,
			}) => (
				<ReduxContainer
					submitValidateCredentialsFields={submitValidateCredentialsFields}
					SubmissionError={SubmissionError}
				>
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
							isFormOpened={isFormOpened}
							openCredentialsForm={openCredentialsForm}
							saveUserCard={saveUserCard}
							isLoading={isLoading}
							areCredsError={areCredsError}
							change={change}
							handleSubmit={handleSubmit}
							normalizeCardUserValue={normalizeCardUserValue}
							normalizeCardCVVValue={normalizeCardCVVValue}
							normalizeCardExpDateValue={normalizeCardExpDateValue}
						/>
					)}
				</ReduxContainer>
			)}
		</FormContainer>
	);
};
