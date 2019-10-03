import React from "react";
import { CredentialsPageApp } from "../src/streams";
import { i18n, withTranslation } from "../i18n";

class Credentials extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ["common"],
		};
	}

	render() {
		const { isLoading, t } = this.props;

		return (
			<div>
				<CredentialsPageApp isLoading={isLoading} />
				<button
					type="button"
					onClick={() =>
						i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
					}
				>
					Change locale
				</button>
				<h1>{t("title")}</h1>
			</div>
		);
	}
}

// TODO make splitted dicts
export default withTranslation("common")(Credentials);
