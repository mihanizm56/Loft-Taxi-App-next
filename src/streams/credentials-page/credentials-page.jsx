import React from "react";
import { LoadingSpinner } from "../../components/atoms";

import "./credentials.css";

export const CredentialsPageApp = ({ isLoading }) => {
	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page">CredentialsPageApp</div>
	);
};
