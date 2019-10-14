import React from "react";
import { LoadingSpinner } from "../../components/atoms";
import { MapBoxModule, HeaderModule, OrdersModule } from "../../modules";

import "./main-page.css";

export const MainPageApp = ({ isLoading }) => (
	<div className="page">
		<div className="page main-page">
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
	</div>
);
