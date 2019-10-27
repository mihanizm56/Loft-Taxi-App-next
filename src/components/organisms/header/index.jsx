import React from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "../../../../i18n";

import "./header.css";

const changeLang = i18n => ({ target: { innerText: langValue } }) => {
	if (langValue === "ENG") {
		console.log("change to eng");
		i18n.changeLanguage("en");
	}

	if (langValue === "RU") {
		console.log("change to ru");
		i18n.changeLanguage("ru");
	}
};

export const WrappedComponent = ({
	handleMainButtonClick,
	handleCredentialsButtonClick,
	handleLogoutButtonClick,
	isLogined,
	t: translate,
	i18n,
}) => {
	return (
		<header className="header">
			<span className="header__title">Loft Taxi</span>
			{isLogined && (
				<ul className="header__buttons-list">
					<li className="header__buttons-button">
						<Button onClick={changeLang(i18n)}>eng</Button>
					</li>
					<li className="header__buttons-button">
						<Button onClick={changeLang(i18n)}>ru</Button>
					</li>
					<li className="header__buttons-button">
						<Button
							onClick={handleMainButtonClick}
							className="header__buttons-button"
						>
							{translate("header-to-main")}
						</Button>
					</li>
					<li className="header__buttons-button">
						<Button onClick={handleCredentialsButtonClick}>
							{translate("header-to-credentials")}
						</Button>
					</li>
					<li className="header__buttons-button">
						<Button onClick={handleLogoutButtonClick}>
							{translate("header-to-logout")}
						</Button>
					</li>
				</ul>
			)}
		</header>
	);
};

export const HeaderView = withTranslation("header")(WrappedComponent);
