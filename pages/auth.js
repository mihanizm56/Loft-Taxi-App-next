import React from "react";
import { handleAuthSSR } from "./utils/authSSR";
import { AuthPageApp } from "../src/streams";
import { withTranslation } from "../i18n";

class Auth extends React.Component {
	static getInitialProps = async ctx => {
		await handleAuthSSR(ctx);

		return {};
	};

	render() {
		const { isLoading } = this.props;

		return <AuthPageApp isLoading={isLoading} />;
	}
}

export default withTranslation("common")(Auth);
