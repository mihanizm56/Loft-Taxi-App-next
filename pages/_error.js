import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";

class ErroPage extends React.Component {
	static getInitialProps = async ({ res, err }) => {
		let statusCode = null;
		if (res) {
			({ statusCode } = res);
		} else if (err) {
			({ statusCode } = err);
		}
		return {
			namespacesRequired: ["common"],
			statusCode,
		};
	};

	render() {
		return <h1>Error Page</h1>;
	}
}

export default withTranslation("common")(ErroPage);
