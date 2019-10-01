import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormAuthModule } from "../../modules";
import "./auth-page.css";

export const AuthPageApp = ({ isLoading }) => {
	console.log("AuthPageApp isLoading", isLoading);

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page login-page">
			<FormAuthModule />
		</div>
	);
};
