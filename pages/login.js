import React from "react";
import { connect } from "react-redux";
import { handleAuthSSR } from "../src/services";
import { LoginPageApp } from "../src/streams";
import { withTranslation } from "../i18n";

class Login extends React.Component {
	static getInitialProps = async ctx => {
		console.log("AM ON THE LOGIN PAGE");

		await handleAuthSSR(ctx);

		return {
			namespacesRequired: ["common"],
		};
	};

	render() {
		const { isLoading } = this.props;

		return <LoginPageApp isLoading={isLoading} />;
	}
}

export default withTranslation("common")(connect()(Login));
