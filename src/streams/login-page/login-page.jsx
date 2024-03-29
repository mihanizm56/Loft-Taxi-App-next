import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormLoginModule, HeaderModule } from "../../modules";

import "./login-page.css";

export const LoginPageApp = ({ isLoading }) => (
	<div className="page login-page">
		<HeaderModule />
		{isLoading ? (
			<LoadingSpinner />
		) : (
			<>
				<div className="dark-overlay dark-overlay--half-opacity" />
				<FormLoginModule />
			</>
		)}
	</div>
);
