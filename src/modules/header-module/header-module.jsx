import React from "react";
import { ReduxContainer } from "./redux-container";
import { HeaderView } from "../../components/organisms";

export const HeaderModule = () => {
	return (
		<ReduxContainer>
			{({
				handleMainButtonClick,
				handleCredentialsButtonClick,
				handleLogoutButtonClick,
				isLogined,
			}) => (
				<HeaderView
					handleMainButtonClick={handleMainButtonClick}
					handleCredentialsButtonClick={handleCredentialsButtonClick}
					handleLogoutButtonClick={handleLogoutButtonClick}
					isLogined={isLogined}
				/>
			)}
		</ReduxContainer>
	);
};
