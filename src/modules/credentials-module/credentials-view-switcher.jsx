import React from "react";
import {
	LoadingTextIndicator,
	CredentialsForm,
	CredentialsRedirectBox,
	CredentialsOpenFormBox,
} from "../../components";
import "./styles/index.css";

export class CredentialsViewSwitcher extends React.Component {
	renderContent = () => {
		const {
			change,
			saveUserCard,
			handleSubmit,
			isFormOpened,
			openCredentialsForm,
			areCredsError,
			allFormValues,
			isLoading,
			normalizeCardUserValue,
			normalizeCardCVVValue,
			normalizeCardExpDateValue,
			translate,
		} = this.props;

		const formProps = {
			normalizeCardUserValue,
			change,
			saveUserCard,
			handleSubmit,
			normalizeCardCVVValue,
			normalizeCardExpDateValue,
		};

		if (isLoading) {
			return (
				<div className="loading-indicator-wrapper">
					<LoadingTextIndicator
						text={translate("additional-text:loading-indicator-text")}
					/>
				</div>
			);
		}

		if (isFormOpened) {
			return <CredentialsForm {...formProps} />;
		}

		if (!isFormOpened && !areCredsError && allFormValues) {
			return (
				<CredentialsRedirectBox openCredentialsForm={openCredentialsForm} />
			);
		}

		if (!isFormOpened && areCredsError) {
			return <CredentialsForm {...formProps} />;
		}

		if (!isFormOpened && !areCredsError && !allFormValues) {
			return (
				<CredentialsOpenFormBox openCredentialsForm={openCredentialsForm} />
			);
		}

		return null;
	};

	render() {
		return <div className="credentials-container">{this.renderContent()}</div>;
	}
}
