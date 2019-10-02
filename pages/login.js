import React from "react";
import { handleAuthSSR } from "./utils/authSSR";
import { LoginPageApp } from "../src/streams";
import { withTranslation } from "../i18n";

class Login extends React.Component {
	static getInitialProps = async ctx => {
		await handleAuthSSR(ctx);

		return {};
	};

	render() {
		const { isLoading } = this.props;

		return <LoginPageApp isLoading={isLoading} />;
	}
}

export default withTranslation("common")(Login);
