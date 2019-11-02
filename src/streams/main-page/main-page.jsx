import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import {
	MapBoxModule,
	HeaderModule,
	OrdersModule,
	PlacesDialogModule,
} from "../../modules";

import "./main-page.css";

export const MainPageApp = ({ isLoading }) => (
	// <div className="page">
	<div className="page main-page">
		<PlacesDialogModule />
		<HeaderModule />
		{isLoading ? (
			<LoadingSpinner />
		) : (
			<div className="main-page-container">
				<MapBoxModule />
				<div className="main-page-form">
					<OrdersModule />
				</div>
			</div>
		)}
	</div>
	// </div>
);
