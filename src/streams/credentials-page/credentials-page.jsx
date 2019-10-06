import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { CredentialsModule, HeaderModule } from "../../modules";

import "./credentials.css";

export const CredentialsPageApp = ({ isLoading }) => {
	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page credentials-page">
			<HeaderModule />
			<div className="credentials-page__module-wrapper">
				<CredentialsModule />
			</div>
		</div>
	);
};
