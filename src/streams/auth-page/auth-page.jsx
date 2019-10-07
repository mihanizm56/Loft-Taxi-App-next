import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormAuthModule, HeaderModule } from "../../modules";
import "./auth-page.css";

export const AuthPageApp = ({ isLoading }) => (
	<div className="page auth-page">
		<HeaderModule />
		{isLoading ? <LoadingSpinner /> : <FormAuthModule />}
	</div>
);
