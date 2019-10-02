import React from "react";
import { MainPageApp } from "../src/streams";
import { i18n, withTranslation } from "../i18n";

class Main extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ["common"],
		};
	}

	componentDidUpdate() {
		console.log("UPDATED");
	}

	render() {
		const { isLoading } = this.props;

		return (
			<div>
				<MainPageApp isLoading={isLoading} />
				<button
					onClick={() =>
						i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
					}
				>
					Change locale
				</button>
				<h1>{this.props.t("title")}</h1>
			</div>
		);
	}
}

// TODO make splitted dicts
export default withTranslation("common")(Main);
