import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import "./auth-page.css";

export const AuthPageApp = ({ isLoading }) => {
	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page">AuthPageApp</div>
	);
};
