import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { FormLoginModule, HeaderModule } from "../../modules";

import "./login-page.css";

export const LoginPageApp = ({ isLoading }) => (
	<div className="page login-page">
		<HeaderModule />
		{isLoading ? <LoadingSpinner /> : <FormLoginModule />}
	</div>
);
