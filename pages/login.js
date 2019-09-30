import React from "react";
import { handleAuthSSR } from "./utils/authSSR";
import { LoginPageApp } from "../src/streams";

export default class Login extends React.Component {
	static getInitialProps = async ctx => {
		await handleAuthSSR(ctx);

		return {};
	};

	render() {
		const { isLoading } = this.props;

		return <LoginPageApp isLoading={isLoading} />;
	}
}
