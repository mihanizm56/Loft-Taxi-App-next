import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormLoginModule } from "../../modules";

import "./login-page.css";

export const LoginPageApp = ({ isLoading }) => {
	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page login-page">
			<FormLoginModule />
		</div>
	);
};
