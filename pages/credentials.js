import React from "react";
import { CredentialsPageApp } from "../src/streams";
import { handleAuthSSR } from "../src/utils/helpers";
import { withTranslation } from "../i18n";

class Credentials extends React.Component {
	static getInitialProps = async ctx => {
		console.log("AM ON THE CREDENTIALS PAGE");

		await handleAuthSSR(ctx);

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

// const { isLoading, t } = this.props;
// <div>
/* <button
					type="button"
					onClick={() =>
						i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
					}
				>
					Change locale
				</button>
				<h1>{t("title")}</h1> */
// </div>
