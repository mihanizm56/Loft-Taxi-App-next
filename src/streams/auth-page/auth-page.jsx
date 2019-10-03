import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormAuthModule, HeaderModule } from "../../modules";
import "./auth-page.css";

export const AuthPageApp = ({ isLoading }) => {
	console.log("AuthPageApp isLoading", isLoading);

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page auth-page">
			<HeaderModule />
			<FormAuthModule />
		</div>
	);
};
