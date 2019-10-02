import React from "react";
import { withTranslation } from "../i18n";

class Index extends React.Component {
	static getInitialProps = ({ ctx: { res } }) => {
		res.writeHead(302, {
			Location: "/login",
		});

		res.end();

		return {};
	};

	render() {
		return <div>Index page</div>;
	}
}

export default withTranslation("common")(Index);
