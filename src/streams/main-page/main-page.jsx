import React from "react";
import Link from "next/link";

import "./main-page.css";

export const MainPageApp = () => {
	return (
		<div className="page">
			<p>MainPageApp</p>
			<Link href="/login">
				<a>To Login</a>
			</Link>
		</div>
	);
};
