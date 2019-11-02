import React from "react";
import { CredentialsPageApp } from "../src/streams";
import { handleAuthSSR, showDialogAboutPlaces } from "../src/services";
import { withTranslation } from "../i18n";

class Credentials extends React.Component {
	static getInitialProps = async ctx => {
		console.log("AM ON THE CREDENTIALS PAGE");

		await handleAuthSSR(ctx);
		await showDialogAboutPlaces(ctx);

		return {
			namespacesRequired: ["common"],
		};
	};

	render() {
		const { isLoading } = this.props;

		return <CredentialsPageApp isLoading={isLoading} />;
	}
}

// TODO make splitted dicts
export default withTranslation("common")(Credentials);
