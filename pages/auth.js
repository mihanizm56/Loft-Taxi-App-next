import React from "react";
import { handleAuthSSR } from "./utils/authSSR";
import { AuthPageApp } from "../src/streams";

export default class Auth extends React.Component {
	static getInitialProps = async ctx => {
		await handleAuthSSR(ctx);

		return {};
	};

	render() {
		const { isLoading } = this.props;

		return <AuthPageApp isLoading={isLoading} />;
	}
}
