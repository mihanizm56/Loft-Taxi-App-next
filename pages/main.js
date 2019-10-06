import React from "react";
import { connect } from "react-redux";
import { MainPageApp } from "../src/streams";
import { handleAuthSSR } from "../src/utils/helpers";
import { withTranslation } from "../i18n";

class Main extends React.Component {
	static async getInitialProps(ctx) {
		console.log("AM ON THE MAIN PAGE");
		// console.log("LOG STORE STATE", ctx.ctx.store.getState());

		await handleAuthSSR(ctx);

		// console.log("ctx");
		// if(ctx.store.dispatch){

		// ctx.ctx.store.dispatch({ type: "LOGIN" });
		// }

		return {
			namespacesRequired: ["common"],
		};
	}

	componentDidUpdate() {
		console.log("UPDATED");
	}

	render() {
		const { isLoading } = this.props;

		return <MainPageApp isLoading={isLoading} />;
	}
}

// TODO make splitted dicts

export default withTranslation("common")(connect()(Main));
