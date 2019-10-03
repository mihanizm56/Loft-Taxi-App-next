import React from "react";
import { Link } from "../../../i18n";
import { LoadingSpinner } from "../../components/atoms";
import { HeaderModule } from "../../modules";

import "./main-page.css";

export const MainPageApp = ({ isLoading }) => {
	console.log("MainPageApp isLoading", isLoading);

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<div className="page">
			<HeaderModule />

			<p>MainPageApp</p>
			<Link href="/login">
				<a>To Login</a>
			</Link>
		</div>
	);
};
