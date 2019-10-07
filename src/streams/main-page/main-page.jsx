import React from "react";
import { Link } from "../../../i18n";
import { LoadingSpinner } from "../../components/atoms";
import { HeaderModule } from "../../modules";

import "./main-page.css";

export const MainPageApp = ({ isLoading }) => (
	<div className="page">
		<HeaderModule />
		{isLoading ? (
			<LoadingSpinner />
		) : (
			<>
				<p>MainPageApp</p>
				<Link href="/login">
					<a>To Login</a>
				</Link>
			</>
		)}
	</div>
);
