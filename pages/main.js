import React from "react";
import { MainPageApp } from "../src/streams";
import { handleAuthSSR } from "./utils/authSSR";
import { withTranslation } from "../i18n";

class Main extends React.Component {
	static async getInitialProps() {
		await handleAuthSSR(ctx);

		return {
			namespacesRequired: ["common"],
		};
	}

	componentDidUpdate() {
		console.log("UPDATED1");
	}

	render() {
		const { isLoading } = this.props;

		return <MainPageApp isLoading={isLoading} />;
	}
}

// TODO make splitted dicts
export default withTranslation("common")(Main);
