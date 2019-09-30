import React from "react";
import Link from "next/link";
import { LoadingSpinner } from "../../components/atoms";

import "./main-page.css";

export const MainPageApp = ({ isLoading }) => {
	return (
		<div className="page">
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
};
