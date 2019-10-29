import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import {
	CredentialsModule,
	HeaderModule,
	PlacesDialogModule,
} from "../../modules";

import "./credentials.css";

export const CredentialsPageApp = ({ isLoading }) => (
	<div className="page credentials-page">
		<PlacesDialogModule />
		<HeaderModule />
		{isLoading ? (
			<LoadingSpinner />
		) : (
			<div className="credentials-page__module-wrapper">
				<CredentialsModule />
			</div>
		)}
	</div>
);
