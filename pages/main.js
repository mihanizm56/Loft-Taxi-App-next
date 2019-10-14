import React from "react";
import { connect } from "react-redux";

import { MainPageApp } from "../src/streams";
import { handleAuthSSR, handleLastOrderStatus } from "../src/services";
import { withTranslation } from "../i18n";

class Main extends React.Component {
	static async getInitialProps(ctx) {
		console.log("AM ON THE MAIN PAGE");

		await handleAuthSSR(ctx);
		await handleLastOrderStatus(ctx);

		return {
			namespacesRequired: ["common"],
		};
	}

	render() {
		const { isLoading } = this.props;

		return <MainPageApp isLoading={isLoading} />;
	}
}

// TODO make splitted dicts

export default withTranslation("common")(connect()(Main));
