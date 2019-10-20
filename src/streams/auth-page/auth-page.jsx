import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormAuthModule, HeaderModule } from "../../modules";
import "./auth-page.css";

export const AuthPageApp = ({ isLoading }) => (
	<div className="page auth-page">
		<HeaderModule />
		{isLoading ? (
			<LoadingSpinner />
		) : (
			<>
				<div className="dark-overlay dark-overlay--half-opacity" />
				<FormAuthModule />
			</>
		)}
	</div>
);
