import React from "react";
import Button from "@material-ui/core/Button";
import "./header.css";

export const HeaderView = ({
	handleMainButtonClick,
	handleCredentialsButtonClick,
	handleLogoutButtonClick,
	isLogined,
}) => {
	return (
		<header className="header">
			<span className="header__title">Loft Taxi</span>
			{isLogined && (
				<ul className="header__buttons-list">
					<li className="header__buttons-button">
						<Button
							onClick={handleMainButtonClick}
							className="header__buttons-button"
						>
							{/* {translate("auth-form.button-sign-up")} */}
							Главная
						</Button>
					</li>
					<li className="header__buttons-button">
						<Button onClick={handleCredentialsButtonClick}>
							{/* {translate("auth-form.button-sign-up")} */}
							Профиль
						</Button>
					</li>

					<li className="header__buttons-button">
						<Button onClick={handleLogoutButtonClick}>
							{/* {translate("auth-form.button-sign-up")} */}
							Выйти
						</Button>
					</li>
				</ul>
			)}
		</header>
	);
};
